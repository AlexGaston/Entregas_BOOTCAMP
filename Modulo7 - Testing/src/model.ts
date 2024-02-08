interface Partida {
  puntacionJugador: number;
  estado: EstadoPartida;
}

export const partida: Partida = {
  puntacionJugador: 0,
  estado: "POR_DEBAJO_MAXIMO",
};

// Damos de alta las cartas
export const AS_DE_COPAS = 1;
export const DOS_DE_COPAS = 2;
export const TRES_DE_COPAS = 3;
export const CUATRO_DE_COPAS = 4;
export const CINCO_DE_COPAS = 5;
export const SEIS_DE_COPAS = 6;
export const SIETE_DE_COPAS = 7;
export const SOTA_DE_COPAS = 10;
export const CABALLO_DE_COPAS = 11;
export const REY_DE_COPAS = 12;

export type EstadoPartida =
  | "POR_DEBAJO_MAXIMO"
  | "JUSTO_MAXIMA"
  | "TE_HAS_PASADO";
