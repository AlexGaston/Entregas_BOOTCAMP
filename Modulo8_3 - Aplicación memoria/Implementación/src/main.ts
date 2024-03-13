import "./style.css";

import { tablero } from "./modelo";
//import { iniciaPartida } from "./motor";
import { girarCarta, nuevaPartida } from "./ui";

// Boton iniciar Partida
const botonInicioPartida = document.getElementById("iniciaPartida");
if (
  botonInicioPartida !== null &&
  botonInicioPartida !== undefined &&
  botonInicioPartida instanceof HTMLButtonElement
) {
  botonInicioPartida.addEventListener("click", () => nuevaPartida(tablero));
}

const mapearTablero = () => {
  // Creando los elementos del tablero
  for (let i = 0; i < tablero.cartas.length; i++) {
    const dataIndiceId = `[data-indice-id="carta${i}"]`;
    const elementoDiv = document.querySelector(`div${dataIndiceId}`);

    if (
      elementoDiv !== null &&
      elementoDiv !== undefined &&
      elementoDiv instanceof HTMLDivElement
    ) {
      elementoDiv.addEventListener("click", () => {
        if (tablero.estadoPartida !== "PartidaNoIniciada") {
          girarCarta(tablero, i);
        }
      });
    }
  }
};

document.addEventListener("DOMContentLoaded", mapearTablero);
