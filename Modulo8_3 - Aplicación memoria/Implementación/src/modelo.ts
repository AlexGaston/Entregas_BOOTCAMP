export interface Carta {
  idFoto: number; // id del 1 al 6 para 12 cartas, así identificamos rápido si es un gatito ,un perrito...
  // el ID se repete 2 veces en el array de cartas (hay dos cartas de un perro, hay dos cartas de un gato)
  imagen: string; // por comodidad repetimos la url de la imagen
  estaVuelta: boolean;
  encontrada: boolean;
}

interface InfoCarta {
  idFoto: number;
  imagen: string;
}

/* Aquí ponemos seis cartas siguiendo la interfaz de InfoCarta */
export const infoCartas: InfoCarta[] = [
  {
    idFoto: 1,
    imagen: "./src/img/1.png", //LEON
  },
  {
    idFoto: 2,
    imagen: "./src/img/2.png", //BUHO
  },
  {
    idFoto: 3,
    imagen: "./src/img/3.png", //PERRO
  },
  {
    idFoto: 4,
    imagen: "./src/img/4.png", //GALLINA
  },
  {
    idFoto: 5,
    imagen: "./src/img/5.png", //CERDO
  },
  {
    idFoto: 6,
    imagen: "./src/img/6.png", //ABEJA
  },
];

/*NO ESTOY LO ESTOY UTILIZANDO????
const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
  idFoto,
  imagen,
  estaVuelta: false,
  encontrada: false,
});
*/

export const crearColeccionDeCartasInicial = (
  infoCartas: InfoCarta[]
): Carta[] => {
  /* Aquí crearemos un array de cartas a partir de un array de infoCartas
         y duplicaremos las cartas para que haya dos de cada tipo.
      */

  const nuevoArrayCartas = infoCartas.map((carta) => {
    return {
      ...carta,
      estaVuelta: false,
      encontrada: false,
    };
  });

  return [...nuevoArrayCartas, ...nuevoArrayCartas];
};

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

/*
  Aquí definimos el tipo de estado de la partida, la idea es que cuando empiece la partida todas las cartas estén boca abajo y si se hacen click sobre ellas no se volteen.
  EstadoPartida = "PartidaNoIniciada", una vez que se pulse Iniciar partida el estado de la partida cambiaría a "CeroCartasLevantadas" y así sucesivamente.
*/

type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
}

const crearTableroInicial = (): Tablero => ({
  cartas: cartas,
  estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero = crearTableroInicial();
