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
  "Mickey Mouse, el icónico ratón y símbolo principal de Disney",
  "Minnie Mouse, la compañera elegante y encantadora de Mickey",
  "Donald Duck, el pato temperamental y divertido de Disney",
  "Goofy, el perro alto y torpe pero de gran corazón",
  "Pluto, el fiel perro mascota de Mickey",
  "Daisy Duck, la sofisticada y firme pareja de Donald",
  "Pato Lucas, un pato clásico del universo animado (generalmente conocido como Ludwig Von Drake en Disney)",
  "Chip, una de las ardillitas inteligentes del dúo Chip y Dale",
  "Dale, la ardillita más relajada y despistada del dúo",
  "Pato Pascual, el pato mexicano del corto 'Los Tres Caballeros'",
  "Blancanieves, la primera princesa Disney del bosque encantado",
  "Cenicienta, la joven amable que vive una transformación mágica",
  "Aurora, la princesa de 'La Bella Durmiente' que cae en un sueño eterno",
  "Ariel, la sirena pelirroja curiosa del mundo humano",
  "Bella, la lectora inteligente que ve más allá de las apariencias",
  "Jasmín, la princesa de Agrabah que anhela libertad",
  "Mulán, la guerrera valiente que se hace pasar por hombre para salvar a su padre",
  "Pocahontas, la fuerte y sabia hija del líder Powhatan",
  "Tiana, la trabajadora soñadora que quiere su propio restaurante",
  "Rapunzel, la joven de cabello mágico encerrada en una torre",
  "Elsa, la reina del hielo con poderes congelantes",
  "Anna, la optimista princesa que nunca se rinde con su hermana",
  "Moana, la navegante polinesia elegida por el océano",
  "Vaiana, el nombre alterno de Moana en algunos países",
  "Mirabel Madrigal, la única Madrigal sin poderes pero con gran corazón",
  "Aladdín, el joven ladrón que encuentra una lámpara mágica",
  "Simba, el heredero del reino en 'El Rey León'",
  "Nala, la leona valiente y compañera de Simba",
  "Mufasa, el sabio y respetado rey de la sabana",
  "Scar, el villano que traiciona a su propia familia",
  "Hércules, el semidiós de fuerza increíble que busca ser un héroe",
  "Megara, la sarcástica y valiente chica que trabaja para Hades",
  "Tarzán, el hombre criado por gorilas en la selva",
  "Jane, la exploradora curiosa que conoce a Tarzán",
  "Pumba, el jabalí bonachón amigo de Timón",
  "Timón, el suricato simpático que vive bajo el lema Hakuna Matata",
  "Stitch, el extraterrestre azul de 'Lilo & Stitch'",
  "Lilo, la niña hawaiana que adopta a Stitch como mascota",
  "Winnie the Pooh, el oso amarillo amante de la miel",
  "Tigger, el tigre saltarín lleno de energía",
  "Campanita, el hada celosa y brillante de 'Peter Pan'",
  "Peter Pan, el niño que nunca crece y vive en el País de Nunca Jamás",
  "Capitán Garfio, el pirata enemigo de Peter Pan",
  "Cruella de Vil, la villana obsesionada con abrigos de dálmata",
  "Maléfica, el hada oscura que maldice a Aurora",
  "Úrsula, la bruja del mar que engaña a Ariel",
  "Hades, el dios del inframundo con humor sarcástico",
  "Buzz Lightyear, el guardián espacial de 'Toy Story'",
  "Woody, el vaquero leal líder del cuarto de juguetes"
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
