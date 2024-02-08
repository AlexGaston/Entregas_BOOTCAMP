import {
  partida,
  AS_DE_COPAS,
  DOS_DE_COPAS,
  TRES_DE_COPAS,
  CUATRO_DE_COPAS,
  CINCO_DE_COPAS,
  SEIS_DE_COPAS,
  SIETE_DE_COPAS,
  SOTA_DE_COPAS,
  CABALLO_DE_COPAS,
  REY_DE_COPAS,
} from "./model";

import {
  obtenerNumeroAleatorio,
  obtenerNumeroCarta,
  obtenerPuntosDeLaCarta,
  sumarPuntos,
  setPuntacion_Jugador,
  resetPuntacion,
} from "./motor";

//Muestra la puntación en pantalla
export const muestraPuntuacion = () => {
  const puntacionElement = document.getElementById("puntacion");
  if (puntacionElement) {
    puntacionElement.innerHTML = `${partida.puntacionJugador}`;
  } else {
    console.error("muestraPuntuacion: No se encuantra el id de puntación");
  }
};

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

const elementoComprobarPuntacion = document.getElementById("mensajeJuego");

const pintarMensaje = (mensaje: string) => {
  if (
    elementoComprobarPuntacion !== null &&
    elementoComprobarPuntacion !== undefined
  ) {
    elementoComprobarPuntacion.innerHTML = mensaje;
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

const gestionarPartida = (puntacion: number) => {
  if (puntacion > 7.5) {
    pintarMensaje("¡GAME OVER has superado 7 y medio!");
    habilitarBotonNuevaPartida();
    deshabilitarBotonMePlanto();
    deshabilitarBotonPedirCarta();
  }
  if (puntacion === 7.5) {
    pintarMensaje(dameMensajeCuandoTePlantas(puntacion));
    habilitarBotonNuevaPartida();
    deshabilitarBotonMePlanto();
    deshabilitarBotonPedirCarta();
  }
  if (puntacion < 7.5) {
    pintarMensaje("¿Quieres otra carta?");
    habilitarBotonMePlanto();
  }
};

// Boton Dame una carta
export const botonDameCarta = document.getElementById("dameCarta");

export const handlePedirCarta = () => {
  const numeroAleatorio: number = obtenerNumeroAleatorio();
  const numeroCarta = obtenerNumeroCarta(numeroAleatorio);
  console.log(numeroCarta);
  const urlDeLaCarta = dameUrlDeLaCarta(numeroCarta);
  pintarUrlDeLaCarta(urlDeLaCarta);
  const puntosCarta = obtenerPuntosDeLaCarta(numeroCarta);
  const puntosSumados = sumarPuntos(puntosCarta);
  setPuntacion_Jugador(puntosSumados);
  muestraPuntuacion();
  gestionarPartida(partida.puntacionJugador);
};

const deshabilitarBotonPedirCarta = () => {
  if (
    botonDameCarta !== null &&
    botonDameCarta !== undefined &&
    botonDameCarta instanceof HTMLButtonElement
  )
    botonDameCarta.disabled = true;
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

//Boton me planto
export const botonMePlanto = document.getElementById("mePlanto");

export const handleMePlanto = () => {
  deshabilitarBotonPedirCarta();
  const mensajeCuandoMePlanto = dameMensajeCuandoTePlantas(
    partida.puntacionJugador
  );
  pintarMensaje(mensajeCuandoMePlanto);
  habilitarBotonNuevaPartida();
  deshabilitarBotonMePlanto();
  pintarBotonQuePasaria();
};

const habilitarBotonMePlanto = () => {
  if (
    botonMePlanto !== null &&
    botonMePlanto !== undefined &&
    botonMePlanto instanceof HTMLButtonElement
  ) {
    botonMePlanto.disabled = false;
  }
};

const deshabilitarBotonMePlanto = () => {
  if (
    botonMePlanto !== null &&
    botonMePlanto !== undefined &&
    botonMePlanto instanceof HTMLButtonElement
  ) {
    botonMePlanto.disabled = true;
  }
};

//Boton nueva partida
export const botonNuevaPartida = document.getElementById("nuevaPartida");

export const handelNuevaPartida = () => {
  resetPuntacion();
  pintarMensaje("Vamos a por la nueva partida!!");
  pintarUrlDeLaCarta("./src/img/back.jpg");
  muestraPuntuacion();
  borrarBotonQuePasaria();
  habilitarBotonPedirCarta();
  deshabilitarBotonNuevaPartida();
};

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

//Boton que pasaría si...
export const botonQuePasaria = document.getElementById("quepasaria");

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

const gestionarQueHubieraPasado = (puntacion: number) => {
  if (puntacion > 7.5) {
    pintarMensaje("¡GAME OVER has hecho bien en plantarte");
    habilitarBotonNuevaPartida();
    deshabilitarBotonMePlanto();
    deshabilitarBotonPedirCarta();
  }
  if (puntacion === 7.5) {
    pintarMensaje("¡Tendrías que haber arriesgado!");
    habilitarBotonNuevaPartida();
    deshabilitarBotonMePlanto();
    deshabilitarBotonPedirCarta();
  }
  if (puntacion < 7.5) {
    pintarMensaje("¡Te has plantado demasiado pronto!");
    habilitarBotonMePlanto();
  }
};

export const handleBotonQuePasaria = () => {
  const numeroAleatorio: number = obtenerNumeroAleatorio();
  const numeroCarta = obtenerNumeroCarta(numeroAleatorio);
  console.log(numeroCarta);
  const urlDeLaCarta = dameUrlDeLaCarta(numeroCarta);
  pintarUrlDeLaCarta(urlDeLaCarta);
  const puntosCarta = obtenerPuntosDeLaCarta(numeroCarta);
  const puntosSumados = sumarPuntos(puntosCarta);
  setPuntacion_Jugador(puntosSumados);
  muestraPuntuacion();
  gestionarQueHubieraPasado(partida.puntacionJugador);
  borrarBotonQuePasaria();
  deshabilitarBotonMePlanto();
};
