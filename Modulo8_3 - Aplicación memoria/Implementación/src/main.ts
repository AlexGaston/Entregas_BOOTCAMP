import "./style.css";

import { Carta, cartas, Tablero } from "./modelo";

/*
En el motor nos va a hacer falta un método para barajar cartas



const barajarCartas = (cartas: Carta[]): Carta[] => {
  let baraja = cartas
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return baraja;
};

console.log(barajarCartas(cartas));*/

const darleLaVueltaALaCarta = (indice: number) => {
  if (partida.estadoPartida === "CeroCartasLevantada") {
    partida.indeceCartaVolteadaA = indice;
    partida.estadoPartida = "UnaCartaLevantada";
  } else if (partida.estadoPartida === "UnaCartaLevantada") {
    partida.indeceCartaVolteadaB = indice;
    partida.estadoPartida = "DosCartaLevantada";
  }
};
partida.cartas[indiceA].idFoto === partida.cartas[indiceB].idFoto;
