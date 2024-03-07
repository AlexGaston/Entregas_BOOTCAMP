import { Carta, Tablero, tablero } from "./modelo";
import { sePuedeVoltearLaCarta, sonPareja, voltearLaCarta } from "./motor";

export const girarCarta = (tablero: Tablero, indice: number) => {
  if (sePuedeVoltearLaCarta(tablero, indice)) {
    voltearLaCarta(tablero, indice);
    cambiarImagenCarta(indice);
    console.log(tablero);
  }
};

// cambiamos la src de la carta para mostrar el animal
const cambiarImagenCarta = (indice: number) => {
  const dataIndiceId = `[data-indice-id="carta${indice}"]`;
  const cartaImagen = document.querySelector(`img${dataIndiceId}`);

  if (
    cartaImagen !== null &&
    cartaImagen !== undefined &&
    cartaImagen instanceof HTMLImageElement
  ) {
    cartaImagen.src = tablero.cartas[indice].imagen;
  }
};
