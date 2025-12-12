let currentPlayer = 0;
let roles = [];
let secretWord = "";

const wordBank = {
  objetos: [
    "Plátano", "Escalera", "Sombrero", "Lámpara", "Tijeras", "Zapato", "Papel", "Cámara", "Silla", "Mesa",
    "Teléfono", "Cuerda", "Cuchara", "Cuchillo", "Tenedor", "Vaso", "Taza", "Espejo", "Reloj", "Bolígrafo",
    "Lápiz", "Cuaderno", "Libro", "Mochila", "Maleta", "Cepillo", "Peine", "Toalla", "Llave", "Cartera",
    "Monedero", "Computadora", "Teclado", "Ratón", "Pantalla", "Control", "Cable", "Audífonos", "Micrófono", "Altavoz",
    "Televisión", "Ventilador", "Almohada", "Colchón", "Cobija", "Sábana", "Cama", "Puerta", "Ventana", "Cortina",
    "Foco", "Enchufe", "Estufa", "Refrigerador", "Microondas", "Licuadora", "Plancha", "Lavadora", "Escoba", "Recogedor",
    "Basurero", "Cubeta", "Esponja", "Jabón", "Champú", "Perfume", "Desodorante", "Cepillo de dientes", "Pasta dental", "Papel higiénico",
    "Silla de ruedas", "Bastón", "Muleta", "Casco", "Lentes", "Sombrilla", "Paraguas", "Candado", "Regla", "Tijeras escolares",
    "Pegamento", "Grapadora", "Cinta adhesiva", "Marcador", "Resaltador", "Estuche", "Disco", "USB", "CD", "DVD",
    "Juguete", "Pelota", "Muñeca", "Carrito", "Cubo Rubik", "Reloj de arena", "Linterna", "Cámara web", "Tablet", "Drone"
  ],
  lugares: [
  "Nueva York", "Londres", "Tokio", "París", "Roma",
  "Torre Eiffel", "Coliseo Romano", "Taj Mahal", "Gran Muralla China", "Machu Picchu",
  "Santorini", "Dubái", "Sídney", "Río de Janeiro", "Barcelona",
  "Lago de Como", "Las Vegas", "Los Ángeles", "Bali", "Cancún",
  "Chichén Itzá", "Cataratas del Niágara", "Monte Everest", "Monte Fuji", "Islas Maldivas",
  "La Habana", "Madrid", "Estambul", "Petra", "Atenas",
  "Times Square", "Disney World Orlando", "Louvre", "Big Ben", "Vinicunca – Montaña de Colores",
  "Isla de Pascua", "Angkor Wat", "Sagrada Familia", "Versalles", "Kioto",
  "Salar de Uyuni", "Santuario Fushimi Inari", "Kilimanjaro", "Burj Khalifa", "Gran Cañón",
  "Seúl", "Ciudad del Cabo", "Vancouver", "Toronto", "Bangkok"
  ],
  animales: [
  "León", "Tigre", "Elefante", "Jirafa", "Cebra",
  "Gorila", "Chimpancé", "Oso Polar", "Oso Pardo", "Lobo",
  "Zorro", "Canguro", "Koala", "Hipopótamo", "Rinoceronte",
  "Delfín", "Ballena Azul", "Tiburón Blanco", "Pulpo", "Pingüino",
  "Águila", "Halcón", "Búho", "Flamenco", "Colibrí",
  "Tortuga", "Cocodrilo", "Serpiente Pitón", "Camello", "Burro",
  "Caballo", "Vaca", "Oveja", "Cerdo", "Cabra",
  "Perro", "Gato", "Conejo", "Hámster", "Erizo",
  "Llama", "Alpaca", "Panda Gigante", "Panda Rojo", "Mapache",
  "Castor", "Foca", "Morsa", "Tarantula", "Mariposa Monarca"
  ],
  personajes: [
  "Mickey Mouse, el ratón más famoso de Disney",
  "Minnie Mouse, la pareja de Mickey en los clásicos de Disney",
  "Donald Duck, el pato enojón de Disney",
  "Goofy, el perro torpe y simpático amigo de Mickey",
  "Pluto, el perro fiel de Mickey",
  "Daisy Duck, la pareja de Donald",
  "Pato Lucas (Ludwig Von Drake), el pato científico de Disney",
  "Chip, la ardilla inteligente del dúo Chip y Dale",
  "Dale, la ardilla relajada del dúo Chip y Dale",
  "Pato Pascual, el pato mexicano de ‘Los Tres Caballeros’",
  "Blancanieves, la primera princesa de Disney",
  "Cenicienta, la princesa que pierde el zapatito de cristal",
  "Aurora, la princesa de ‘La Bella Durmiente’",
  "Ariel, la sirena protagonista de ‘La Sirenita’",
  "Bella, la protagonista de ‘La Bella y la Bestia’",
  "Jasmín, la princesa de Agrabah en ‘Aladdín’",
  "Mulán, la guerrera que salva a China",
  "Pocahontas, la princesa nativa que conecta dos mundos",
  "Tiana, la princesa que sueña con su propio restaurante",
  "Rapunzel, la princesa del cabello mágico",
  "Elsa, la reina del hielo de ‘Frozen’",
  "Anna, la hermana optimista de Elsa",
  "Moana, la navegante elegida por el océano",
  "Vaiana, la versión alternativa del nombre Moana",
  "Mirabel Madrigal, la protagonista sin poderes de ‘Encanto’",
  "Aladdín, el joven que encuentra la lámpara mágica",
  "Simba, el rey león heredero de la sabana",
  "Nala, la leona aliada y pareja de Simba",
  "Mufasa, el rey sabio del reino de ‘El Rey León’",
  "Scar, el villano del Rey León",
  "Hércules, el semidiós héroe de fuerza increíble",
  "Megara, la chica que trabaja para Hades en ‘Hércules’",
  "Tarzán, el hombre criado por gorilas",
  "Jane, la exploradora que conoce a Tarzán",
  "Pumba, el jabalí amigo de Timón",
  "Timón, el suricato del lema Hakuna Matata",
  "Stitch, el extraterrestre azul de ‘Lilo & Stitch’",
  "Lilo, la niña hawaiana que adopta a Stitch",
  "Winnie the Pooh, el oso amante de la miel",
  "Tigger, el tigre saltarín de los cuentos de Pooh",
  "Campanita, el hada de ‘Peter Pan’",
  "Peter Pan, el niño que nunca crece",
  "Capitán Garfio, el pirata enemigo de Peter Pan",
  "Cruella de Vil, la villana obsesionada con pieles de dálmata",
  "Maléfica, la villana que maldice a Aurora",
  "Úrsula, la bruja del mar de ‘La Sirenita’",
  "Hades, el dios del inframundo en ‘Hércules’",
  "Buzz Lightyear, el guardián espacial de ‘Toy Story’",
  "Woody, el vaquero líder de los juguetes en ‘Toy Story’"
]

};

const usedWords = [];

// Mostrar u ocultar campo para palabra personalizada
document.getElementById("category").addEventListener("change", function () {
  const customContainer = document.getElementById("customWordContainer");
  if (this.value === "custom") {
    customContainer.classList.remove("hidden");
  } else {
    customContainer.classList.add("hidden");
  }
});

function startGame() {
  const numPlayers = parseInt(document.getElementById("numPlayers").value);
  const numImpostors = parseInt(document.getElementById("numImpostors").value);
  const category = document.getElementById("category").value;

  if (numImpostors >= numPlayers) {
    alert("El número de impostores debe ser menor que el número de jugadores.");
    return;
  }

  let availableWords = [];

  if (category === "custom") {
    const customInput = document.getElementById("customWord").value.trim();
    if (!customInput) {
      alert("Por favor escribe una palabra personalizada.");
      return;
    }
    secretWord = customInput;

  } else if (category === "random") {
    for (let key in wordBank) {
      availableWords = availableWords.concat(
        wordBank[key].filter(word => !usedWords.includes(word))
      );
    }
  } else {
    availableWords = wordBank[category].filter(word => !usedWords.includes(word));
  }

  if (category !== "custom") {
    if (availableWords.length === 0) {
      alert("Ya no quedan palabras disponibles en esta categoría. Recarga la página para reiniciar.");
      return;
    }

    const index = Math.floor(Math.random() * availableWords.length);
    secretWord = availableWords[index];
    usedWords.push(secretWord);
  }

  // Asignar roles
  roles = Array(numPlayers).fill("palabra");
  for (let i = 0; i < numImpostors; i++) {
    let idx;
    do {
      idx = Math.floor(Math.random() * numPlayers);
    } while (roles[idx] === "impostor");
    roles[idx] = "impostor";
  }

  currentPlayer = 0;
  document.getElementById("setup").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  document.getElementById("reveal").classList.add("hidden");

  showNextPlayer();
}

function showNextPlayer() {
  if (currentPlayer >= roles.length) {
    alert("Todos los jugadores han visto su rol. ¡Comienza el juego!");
    location.reload();
    return;
  }

  document.getElementById("playerInfo").textContent = `Jugador ${currentPlayer + 1}, presiona el botón para ver tu rol.`;
  document.getElementById("game").classList.remove("hidden");
  document.getElementById("reveal").classList.add("hidden");
}

function nextPlayer() {
  const role = roles[currentPlayer];

  document.getElementById("roleReveal").textContent =
    role === "impostor"
      ? "Eres el IMPOSTOR. No conoces la palabra secreta."
      : `Tu palabra secreta es: ${secretWord}`;

  document.getElementById("game").classList.add("hidden");
  document.getElementById("reveal").classList.remove("hidden");

  currentPlayer++;
}

