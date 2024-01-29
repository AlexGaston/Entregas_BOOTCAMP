import "./style.css";

let puntacion_Jugador: number = 0;

//type Carta = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 10 | 11 | 12;

//Mustra la puntación en pantalla
function muestraPuntuacion() {
  const puntacionElement = document.getElementById("puntacion");
  if (puntacionElement) {
    puntacionElement.innerHTML = `Tu puntación es: ${puntacion_Jugador}`;
  } else {
    console.error("muestraPuntuacion: No se encuantra el id de puntación");
  }
}

// Funcion para dar carta aleatoria
function dameCarta(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("Carta random: " + dameCarta(1, 10));

document.addEventListener("DOMContentLoaded", muestraPuntuacion);
