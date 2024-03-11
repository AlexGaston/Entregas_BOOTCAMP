import {
  Carta,
  Tablero,
  crearColeccionDeCartasInicial,
  infoCartas,
} from "./modelo";

import {
  voltearParejaNoCorrecta,
  pintarParejasEncontradas,
  voltearCartasPartidaNueva,
  borrarMensajesPartida,
  mirarSiLaSegundaCartaEspareja,
} from "./ui";
/*
En el motor nos va a hacer falta un método para barajar cartas
*/
const generarNumeroAleatorio = (indiceDelArray: number) =>
  Math.floor(Math.random() * (indiceDelArray + 1));
const barajarCartas = (cartas: Carta[]): Carta[] => {
  const copiaCartas = [...cartas];
  for (let indice = copiaCartas.length - 1; indice > 0; indice--) {
    let indiceAleatorio = generarNumeroAleatorio(indice);
    [{ ...copiaCartas[indice] }, { ...copiaCartas[indiceAleatorio] }] = [
      copiaCartas[indiceAleatorio],
      copiaCartas[indice],
    ];
  }
  return copiaCartas;
};

//console.log(barajarCartas(cartas));

/*
  Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
*/
export const sePuedeVoltearLaCarta = (
  tablero: Tablero,
  indice: number
): boolean => {
  if (
    (!tablero.cartas[indice].encontrada &&
      !tablero.cartas[indice].estaVuelta) ||
    tablero.estadoPartida !== "DosCartasLevantadas"
  ) {
    console.log("Se puede voltear la carta");
    return true;
  }
  return false;
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  if (
    tablero.estadoPartida === "CeroCartasLevantadas" ||
    tablero.estadoPartida === "PartidaNoIniciada"
  ) {
    tablero.indiceCartaVolteadaA = indice;
    tablero.estadoPartida = "UnaCartaLevantada";
  } else if (tablero.estadoPartida === "UnaCartaLevantada") {
    tablero.indiceCartaVolteadaB = indice;
    tablero.estadoPartida = "DosCartasLevantadas";
  }
  tablero.cartas[indice].estaVuelta = true;

  mirarSiLaSegundaCartaEspareja(tablero);
};

/*
  Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
*/
export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  return tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto;
};

/*
    Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
  */

export const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.cartas[indiceA].estaVuelta = true;
  tablero.cartas[indiceB].estaVuelta = true;
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
  numeroParejasEncontradas = numeroParejasEncontradas + 1;
  console.log("Número de parejas encontradas: ", numeroParejasEncontradas);
  pintarParejasEncontradas();
};

/*
    Aquí asumimos que no son pareja y las volvemos a poner boca abajo
  */
export const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].encontrada = false;
  tablero.cartas[indiceB].encontrada = false;

  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
  voltearParejaNoCorrecta(tablero, indiceA, indiceB);
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
};

/*
    Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
  
  export const esPartidaCompleta(tablero: Tablero) : boolean => {
    //...
  }*/

export let numeroParejasEncontradas: number = 0;

/*
  Iniciar partida: Crear el tablero inicial y Barajar las cartas
  */

export const iniciaPartida = (tablero: Tablero): void => {
  const cartaBarajadas: Carta[] = barajarCartas(
    crearColeccionDeCartasInicial(infoCartas)
  );
  tablero.cartas = [...cartaBarajadas];
  console.log("tablero.carta: ", tablero.cartas);
  tablero.estadoPartida = "PartidaNoIniciada";
  voltearCartasPartidaNueva(tablero);
  numeroParejasEncontradas = 0;
  borrarMensajesPartida();
};
