import { Tablero, tablero } from "./modelo";
import {
  sePuedeVoltearLaCarta,
  voltearLaCarta,
  numeroParejasEncontradas,
  sonPareja,
  parejaEncontrada,
  parejaNoEncontrada,
  iniciaPartida,
} from "./motor";

export const girarCarta = (tablero: Tablero, indice: number) => {
  if (sePuedeVoltearLaCarta(tablero, indice)) {
    voltearLaCarta(tablero, indice);
    mirarSiLaSegundaCartaEspareja(tablero);
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

export const voltearParejaNoCorrecta = (tablero: Tablero) => {
  setTimeout(() => {
    for (let i = 0; i < tablero.cartas.length; i++) {
      if (!tablero.cartas[i].encontrada && !tablero.cartas[i].estaVuelta) {
        const dataIndiceIdA = `[data-indice-id="carta${i}"]`;
        const cartaImagenA = document.querySelector(`img${dataIndiceIdA}`);
        const dataIndiceIdB = `[data-indice-id="carta${i}"]`;
        const cartaImagenB = document.querySelector(`img${dataIndiceIdB}`);
        if (
          cartaImagenA !== null &&
          cartaImagenA !== undefined &&
          cartaImagenA instanceof HTMLImageElement &&
          cartaImagenB !== null &&
          cartaImagenB !== undefined &&
          cartaImagenB instanceof HTMLImageElement
        ) {
          console.log("VOLTEAR PAREJA INCORRECTA");
          cartaImagenA.src = "./src/img/back.png";
          cartaImagenB.src = "./src/img/back.png";
        }
      }
    }
  }, 1000);
};

export const pintarParejasEncontradas = () => {
  const resultado = document.getElementById("parejasEncontradas");
  const mensajePartida = document.getElementById("mensajePartida");

  if (
    resultado !== null &&
    resultado !== undefined &&
    resultado instanceof HTMLElement
  ) {
    resultado.innerHTML = String(numeroParejasEncontradas);
  }

  if (numeroParejasEncontradas === 6) {
    tablero.estadoPartida = "PartidaCompleta";
    console.log("PARTICA ACABADA!!!!");
    if (
      mensajePartida !== null &&
      mensajePartida !== undefined &&
      mensajePartida instanceof HTMLDivElement
    ) {
      mensajePartida.innerHTML =
        "Enhorabuena has encontrado todas las parejas!!!!";
    }
  }
};

export const voltearCartasPartidaNueva = (tablero: Tablero) => {
  for (let i = 0; i < tablero.cartas.length; i++) {
    const dataIndiceId = `[data-indice-id="carta${i}"]`;
    const cartaImagen = document.querySelector(`img${dataIndiceId}`);
    if (
      cartaImagen !== null &&
      cartaImagen !== undefined &&
      cartaImagen instanceof HTMLImageElement
    ) {
      cartaImagen.src = "./src/img/back.png";
    }
  }
};

export const borrarMensajesPartida = () => {
  const resultado = document.getElementById("parejasEncontradas");
  const mensajePartida = document.getElementById("mensajePartida");

  if (
    resultado !== null &&
    resultado !== undefined &&
    resultado instanceof HTMLElement
  ) {
    resultado.innerHTML = String(0);
  }

  if (
    mensajePartida !== null &&
    mensajePartida !== undefined &&
    mensajePartida instanceof HTMLDivElement
  ) {
    mensajePartida.innerHTML = " ";
  }
};

export const mirarSiLaSegundaCartaEspareja = (tablero: Tablero) => {
  if (
    tablero.indiceCartaVolteadaA !== undefined &&
    tablero.indiceCartaVolteadaB !== undefined
  ) {
    if (
      sonPareja(
        tablero.indiceCartaVolteadaA,
        tablero.indiceCartaVolteadaB,
        tablero
      )
    ) {
      parejaEncontrada(
        tablero,
        tablero.indiceCartaVolteadaA,
        tablero.indiceCartaVolteadaB
      );
      pintarParejasEncontradas();
    } else {
      parejaNoEncontrada(
        tablero,
        tablero.indiceCartaVolteadaA,
        tablero.indiceCartaVolteadaB
      );
      voltearParejaNoCorrecta(tablero);
    }
  }
};

export const nuevaPartida = (tablero: Tablero) => {
  iniciaPartida(tablero);
  voltearCartasPartidaNueva(tablero);
  borrarMensajesPartida();
};
