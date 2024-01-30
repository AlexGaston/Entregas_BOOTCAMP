import "./style.css";

let puntacion_Jugador: number = 0;
// Damos de alta las cartas
const AS_DE_COPAS = 1;
const DOS_DE_COPAS = 2;
const TRES_DE_COPAS = 3;
const CUATRO_DE_COPAS = 4;
const CINCO_DE_COPAS = 5;
const SEIS_DE_COPAS = 6;
const SIETE_DE_COPAS = 7;
const SOTA_DE_COPAS = 10;
const CABALLO_DE_COPAS = 11;
const REY_DE_COPAS = 12;

//Muestra la puntación en pantalla
function muestraPuntuacion() {
  const puntacionElement = document.getElementById("puntacion");
  if (puntacionElement) {
    puntacionElement.innerHTML = `Tu puntación es: ${puntacion_Jugador}`;
  } else {
    console.error("muestraPuntuacion: No se encuantra el id de puntación");
  }
}

// Funcion para dar carta aleatoria del 1 al 10
function obtenerNumeroAleatorio(): number {
  const min = 1;
  const max = 10;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Función para obtener el n-umero de la carta
function obtenerNumeroCarta(numeroAleatorio: number) {
  return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
}

//Función mostrar carta
const dameUrlDeLaCarta = (numeroDeCarta: number) => {
  let src = "./src/img/back.jpg";

  switch (numeroDeCarta) {
    case AS_DE_COPAS:
      src = "./src/img/1_as-copas.jpg";
      break;
    case DOS_DE_COPAS:
      src = "./src/img/2_dos-copas.jpg";
      break;
    case TRES_DE_COPAS:
      src = "./src/img/3_tres-copas.jpg";
      break;
    case CUATRO_DE_COPAS:
      src = "./src/img/4_cuatro-copas.jpg";
      break;
    case CINCO_DE_COPAS:
      src = "./src/img/5_cinco-copas.jpg";
      break;
    case SEIS_DE_COPAS:
      src = "./src/img/6_seis-copas.jpg";
      break;
    case SIETE_DE_COPAS:
      src = "./src/img/7_siete-copas.jpg";
      break;
    case SOTA_DE_COPAS:
      src = "./src/img/10_sota-copas.jpg";
      break;
    case CABALLO_DE_COPAS:
      src = "./src/img/11_caballo-copas.jpg";
      break;
    case REY_DE_COPAS:
      src = "./src/img/12_rey-copas.jpg";
      break;
    default:
      src = "./src/img/error.jpg";
      break;
  }
  return src;
};

const pintarUrlDeLaCarta = (src: string) => {
  const imagenCarta = document.getElementById("imagenCarta");
  if (
    imagenCarta !== null &&
    imagenCarta !== undefined &&
    imagenCarta instanceof HTMLImageElement
  ) {
    imagenCarta.src = src;
  }
};

const obtenerPuntosDeLaCarta = (carta: number) => {
  return carta > 7 ? 0.5 : carta;
};

const sumarPuntos = (puntos: number) => {
  return puntacion_Jugador + puntos;
};

const setPuntacion_Jugador = (puntosYaSumados: number) => {
  return (puntacion_Jugador = puntosYaSumados);
};

const elementoComprobarPuntacion = document.getElementById("mensajeJuego");

const gestionarGameOver = (puntacion: number) => {
  if (puntacion > 7.5) {
    if (
      elementoComprobarPuntacion !== null &&
      elementoComprobarPuntacion !== undefined
    ) {
      elementoComprobarPuntacion.innerHTML =
        "¡GAME OVER has superado 7 y medio!";
    }
  } else {
    if (
      elementoComprobarPuntacion !== null &&
      elementoComprobarPuntacion !== undefined
    ) {
      elementoComprobarPuntacion.innerHTML = "¿Otra carta?";
    }
  }
};

const deshabilitarBotonPedirCarta = (puntacion: number) => {
  if (puntacion > 7.5) {
    if (
      botonDameCarta !== null &&
      botonDameCarta !== undefined &&
      botonDameCarta instanceof HTMLButtonElement
    )
      botonDameCarta.disabled = true;
  }
};

const handlePedirCarta = () => {
  const numeroAleatorio: number = obtenerNumeroAleatorio();
  const numeroCarta = obtenerNumeroCarta(numeroAleatorio);
  console.log(numeroCarta);
  const urlDeLaCarta = dameUrlDeLaCarta(numeroCarta);
  if (urlDeLaCarta !== null && urlDeLaCarta !== undefined) {
    pintarUrlDeLaCarta(urlDeLaCarta);
  }
  const puntosCarta = obtenerPuntosDeLaCarta(numeroCarta);
  const puntosSumados = sumarPuntos(puntosCarta);
  setPuntacion_Jugador(puntosSumados);
  muestraPuntuacion();
  gestionarGameOver(puntacion_Jugador);
  deshabilitarBotonPedirCarta(puntacion_Jugador);
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

// Boton Dame una carta
const botonDameCarta = document.getElementById("dameCarta");
if (botonDameCarta !== null && botonDameCarta !== undefined) {
  botonDameCarta.addEventListener("click", handlePedirCarta);
}

//Boton me planto
/*
Si su puntuación es menor que 4, mostrar un mensaje que diga "Has sido muy conservador".

Si la puntuación ha sido 5, mostrar un mensaje que diga "Te ha entrado el canguelo eh?".

Si la puntuación ha sido 6 o 7, mostrar un mensaje que diga... "Casi casi...".

Si la puntuación es 7.5, mostrar un mensaje que diga "¡ Lo has clavado! ¡Enhorabuena!"
*/

const muestraMensajeCuandoTePlantas = () => {};

const handleMePlanto = () => {
  deshabilitarBotonPedirCarta(8);
};

const botonMePlanto = document.getElementById("mePlanto");
if (botonMePlanto !== null && botonMePlanto !== undefined) {
  botonMePlanto.addEventListener("click", handleMePlanto);
}
