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
    puntacionElement.innerHTML = `${puntacion_Jugador}`;
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
    pintarMensaje("¡GAME OVER has superado 7 y medio!");
    habilitarBotonNuevaPartida();
  } else {
    pintarMensaje("¿Quieres otra carta?");
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
  pintarUrlDeLaCarta(urlDeLaCarta);
  const puntosCarta = obtenerPuntosDeLaCarta(numeroCarta);
  const puntosSumados = sumarPuntos(puntosCarta);
  setPuntacion_Jugador(puntosSumados);
  habilitarBotonMePlanto(puntacion_Jugador);
  muestraPuntuacion();
  gestionarGameOver(puntacion_Jugador);
  deshabilitarBotonPedirCarta(puntacion_Jugador);
  deshabilitarBotonMePlanto(puntacion_Jugador);
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

// Boton Dame una carta
const botonDameCarta = document.getElementById("dameCarta");
if (botonDameCarta !== null && botonDameCarta !== undefined) {
  botonDameCarta.addEventListener("click", handlePedirCarta);
}

//Boton me planto
const habilitarBotonMePlanto = (puntacion: number) => {
  if (puntacion !== 0) {
    if (
      botonMePlanto !== null &&
      botonMePlanto !== undefined &&
      botonMePlanto instanceof HTMLButtonElement
    ) {
      botonMePlanto.disabled = false;
    }
  }
};

const deshabilitarBotonMePlanto = (puntacion: number) => {
  if (puntacion > 7.5) {
    if (
      botonMePlanto !== null &&
      botonMePlanto !== undefined &&
      botonMePlanto instanceof HTMLButtonElement
    ) {
      botonMePlanto.disabled = true;
    }
  }
};

const dameMensajeCuandoTePlantas = (puntacion: number) => {
  if (puntacion < 4) {
    return "Has sido muy conservador";
  }
  if (puntacion === 4 || puntacion < 6) {
    return "Te ha entrado el canguelo eh?";
  }
  if (puntacion === 6 || puntacion <= 7) {
    return "Casi casi...";
  }
  if (puntacion === 7.5) {
    return "¡ Lo has clavado! ¡Enhorabuena!";
  }
  return "Te has pasado de rango";
};

const pintarMensaje = (mensaje: string) => {
  if (
    elementoComprobarPuntacion !== null &&
    elementoComprobarPuntacion !== undefined
  ) {
    elementoComprobarPuntacion.innerHTML = mensaje;
  }
};

const handleMePlanto = () => {
  deshabilitarBotonPedirCarta(8);
  const mensajeCuandoMePlanto = dameMensajeCuandoTePlantas(puntacion_Jugador);
  pintarMensaje(mensajeCuandoMePlanto);
  habilitarBotonNuevaPartida();
  deshabilitarBotonMePlanto(8);
  pintarBotonQuePasaria();
};

const botonMePlanto = document.getElementById("mePlanto");
if (botonMePlanto !== null && botonMePlanto !== undefined) {
  botonMePlanto.addEventListener("click", handleMePlanto);
}

//Boton nueva partida

const habilitarBotonNuevaPartida = () => {
  if (
    botonNuevaPartida !== null &&
    botonNuevaPartida !== undefined &&
    botonNuevaPartida instanceof HTMLButtonElement
  ) {
    botonNuevaPartida.disabled = false;
  }
};

const deshabilitarBotonNuevaPartida = () => {
  if (
    botonNuevaPartida !== null &&
    botonNuevaPartida !== undefined &&
    botonNuevaPartida instanceof HTMLButtonElement
  ) {
    botonNuevaPartida.disabled = true;
  }
};

const resetPuntacion = () => {
  return (puntacion_Jugador = 0);
};

const habilitarBotonPedirCarta = () => {
  if (
    botonDameCarta !== null &&
    botonDameCarta !== undefined &&
    botonDameCarta instanceof HTMLButtonElement
  ) {
    botonDameCarta.disabled = false;
  }
};

const handelNuevaPartida = () => {
  resetPuntacion();
  habilitarBotonPedirCarta();
  pintarMensaje("Vamos a por la nueva partida!!");
  deshabilitarBotonNuevaPartida();
  pintarUrlDeLaCarta("./src/img/back.jpg");
  muestraPuntuacion();
  borrarBotonQuePasaria();
};

const botonNuevaPartida = document.getElementById("nuevaPartida");
if (botonNuevaPartida !== null && botonNuevaPartida !== undefined) {
  botonNuevaPartida.addEventListener("click", handelNuevaPartida);
}

//Boton que pasaría si...

const pintarBotonQuePasaria = () => {
  if (
    botonQuePasaria !== null &&
    botonQuePasaria !== undefined &&
    botonQuePasaria instanceof HTMLButtonElement
  ) {
    botonQuePasaria.hidden = false;
  }
};

const borrarBotonQuePasaria = () => {
  if (
    botonQuePasaria !== null &&
    botonQuePasaria !== undefined &&
    botonQuePasaria instanceof HTMLButtonElement
  ) {
    botonQuePasaria.hidden = true;
  }
};

const handleBotonQuePasaria = () => {
  handlePedirCarta();
};

const botonQuePasaria = document.getElementById("quepasaria");
if (botonQuePasaria !== null && botonQuePasaria !== undefined) {
  botonQuePasaria.addEventListener("click", handleBotonQuePasaria);
}
