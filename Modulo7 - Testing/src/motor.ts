import { partida } from "./model";

// Funcion para dar carta aleatoria del 1 al 10
export const obtenerNumeroAleatorio = (): number => {
  const min = 1;
  const max = 10;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//Función para obtener el número de la carta
export const obtenerNumeroCarta = (numeroAleatorio: number) => {
  return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
};

export const obtenerPuntosDeLaCarta = (carta: number) => {
  return carta > 7 ? 0.5 : carta;
};

export const sumarPuntos = (puntos: number) => {
  return partida.puntacionJugador + puntos;
};

export const setPuntacion_Jugador = (puntosYaSumados: number) => {
  partida.puntacionJugador = puntosYaSumados;
};

export const resetPuntacion = () => {
  partida.puntacionJugador = 0;
};
