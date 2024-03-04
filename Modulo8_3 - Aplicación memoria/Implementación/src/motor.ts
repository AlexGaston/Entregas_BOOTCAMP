import { Carta, cartas, tablero, Tablero } from "./modelo";

/*
En el motor nos va a hacer falta un método para barajar cartas
*/
const barajarCartas = (cartas: Carta[]): Carta[] => {
  let baraja = cartas
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return baraja;
};

console.log(barajarCartas(cartas));

/*
  Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
*/
const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
if (!tablero.cartas[indice].encontrada && !tablero.cartas[indice].estaVuelta || tablero.estadoPartida !== "DosCartasLevantadas" ){
    return true;
}
return false;
};
  
const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
    if (tablero.estadoPartida==="CeroCartasLevantadas"){
        tablero.indiceCartaVolteadaA = indice;
        tablero.estadoPartida = "UnaCartaLevantada";
    } else if ( tablero.estadoPartida === "UnaCartaLevantada"){
        tablero.indiceCartaVolteadaB = indice;
        tablero.estadoPartida = "DosCartasLevantadas";
    }
  };

  /*
  Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
*/
export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
    if (tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto){
      return true;  
    }
    return false;
  }
  
  /*
    Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
  */
  const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceB].encontrada = true;
    if (tablero.estadoPartida === "PartidaCompleta"){
        
    }
  }
  
  /*
    Aquí asumimos que no son pareja y las volvemos a poner boca abajo
  */
  const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
    // ...
  }
  
  /*
    Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
  */
  export const esPartidaCompleta(tablero: Tablero) : boolean => {
    //...
  }
  
  /*
  Iniciar partida
  */
  
  export const iniciaPartida = (tablero: Tablero): void => {
    //...
  };
