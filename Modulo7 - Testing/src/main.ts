import "./style.css";

/*import {
  partida,
  AS_DE_COPAS,
  DOS_DE_COPAS,
  TRES_DE_COPAS,
  CUATRO_DE_COPAS,
  CINCO_DE_COPAS,
  SEIS_DE_COPAS,
  SIETE_DE_COPAS,
  SOTA_DE_COPAS,
  CABALLO_DE_COPAS,
  REY_DE_COPAS,
} from "./model";

import {
  obtenerNumeroAleatorio,
  obtenerNumeroCarta,
  obtenerPuntosDeLaCarta,
  sumarPuntos,
  setPuntacion_Jugador,
  resetPuntacion,
} from "./motor";*/

import {
  botonDameCarta,
  botonMePlanto,
  botonNuevaPartida,
  botonQuePasaria,
  muestraPuntuacion,
  handlePedirCarta,
  handleMePlanto,
  handelNuevaPartida,
  handleBotonQuePasaria,
} from "./ui";

const empezarPartida = () => {
  if (
    botonDameCarta !== null &&
    botonDameCarta !== undefined &&
    botonDameCarta instanceof HTMLButtonElement
  ) {
    botonDameCarta.addEventListener("click", handlePedirCarta);
  }
  if (
    botonQuePasaria !== null &&
    botonQuePasaria !== undefined &&
    botonQuePasaria instanceof HTMLButtonElement
  ) {
    botonQuePasaria.addEventListener("click", handleBotonQuePasaria);
  }
  if (
    botonMePlanto !== null &&
    botonMePlanto !== undefined &&
    botonDameCarta instanceof HTMLButtonElement
  ) {
    botonMePlanto.addEventListener("click", handleMePlanto);
  }
  if (
    botonNuevaPartida !== null &&
    botonNuevaPartida !== undefined &&
    botonNuevaPartida instanceof HTMLButtonElement
  ) {
    botonNuevaPartida.addEventListener("click", handelNuevaPartida);
  }
  muestraPuntuacion();
};
document.addEventListener("DOMContentLoaded", empezarPartida);
