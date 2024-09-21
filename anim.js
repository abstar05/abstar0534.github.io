// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Préstame tu peine", time: 44 },
  { text: "Y péiname el alma", time: 45 },
  { text: "Desenrédame", time: 51 },
  { text: "Fuera de este mundo", time: 54 },
  { text: "Dime que no estoy", time: 59 },
  { text: "Soñándote", time: 60 },
  { text: "Enséñame", time: 66 },
  { text: "De que estamos hechos", time: 70 },
  { text: "Que quiero orbitar planetas", time: 75 },
  { text: "Hasta ver uno vacío", time: 75.3 },
  { text: "Que quiero irme a vivir", time: 83 },
  { text: "Pero que sea contigo", time: 83.3 },
  { text: "Viento, amárranos", time: 89 },
  { text: "Tiempo, detente muchos años", time: 98 },
  { text: "Viento, amárranos", time: 105 },
  { text: "Tiempo, detente muchos años", time: 113 },
  { text: "Préstame tu peine", time: 136 },
  { text: "Y péiname el alma", time: 139 },
  { text: "Purifícame", time: 143 },
  { text: "No me abandones", time: 147 },
  { text: "Préstame tu sueño", time: 151 },
  { text: "Y duérmeme", time: 154 },
  { text: "Embrújame", time: 160 },
  { text: "Volvámonos eternos", time: 161 },
  { text: "Que quiero brincar planetas", time: 168 },
  { text: "Hasta ver uno vacío", time: 170 },
  { text: "Que quiero irme a vivir", time: 175 },
  { text: "Pero que sea contigo", time: 177 },
  { text: "Viento, amárranos", time: 181 },
  { text: "Tiempo, detente muchos años", time: 190 },
  { text: "Viento, amárranos", time: 198 },
  { text: "Tiempo, detente muchos años", time: 205 },
  { text: "Viento, amárranos", time: 213 },
  { text: "Tiempo, detente muchos años", time: 220 },
  { text: "Love.", time: 225 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);