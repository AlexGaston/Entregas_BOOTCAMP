import "./style.css";

// Inicializamos el turnoInicial con valor a 1
let turnoInicial = 1;

// función para incrementar el turno, devolviendo el turno inicial actualizado
const siguienteTurno = (): number => {
  turnoInicial = turnoInicial + 1;
  return turnoInicial;
};

// función para decrementar el turno, devolviendo el turno inicial actualizado
const anteriorTurno = (): number => {
  turnoInicial = turnoInicial - 1;
  return turnoInicial;
};

// función para resetear el contador de turno, devolviendo el turno inicial a 0
function resetTurno() {
  turnoInicial = 0;
  const turnoActual = document.getElementById("numeroTurno");

  if (
    turnoActual !== null &&
    turnoActual !== undefined &&
    turnoActual instanceof HTMLHeadingElement
  ) {
    turnoActual.textContent = turnoInicial.toString().padStart(2, "0");
  }
}

// función para saltar directamente al turno X
function saltarTurno() {
  // Donde vamos a pintar el turno
  const turnoActual = document.getElementById("numeroTurno");
  // Guardamos el Input donde introducimos el turno
  const turnoXpress = document.getElementById("saltoTurno");
  console.log("Valor turnoXpress: " + turnoXpress);

  if (
    turnoActual !== null &&
    turnoActual !== undefined &&
    turnoActual instanceof HTMLHeadingElement
  ) {
    if (
      turnoXpress !== null &&
      turnoXpress !== undefined &&
      turnoXpress instanceof HTMLInputElement
    ) {
      turnoActual.textContent = turnoXpress.value.padStart(2, "0");
      turnoInicial = parseInt(turnoXpress.value);
    }
  }
}

//Damos de alta el boton siguiente
const botonSiguiente = document.getElementById("siguiente");

//Creamos una funcion handler del BotonSiguiente que luego la utilizaremos en el boton siguiente
const handlerBotonSiguiente = () => {
  console.log(turnoInicial);
  const turnoSiguiente = siguienteTurno();
  const turnoActual = document.getElementById("numeroTurno");
  if (
    turnoActual !== null &&
    turnoActual !== undefined &&
    turnoActual instanceof HTMLHeadingElement
  ) {
    turnoActual.textContent = turnoSiguiente.toString().padStart(2, "0");
  }
};

if (
  botonSiguiente !== null &&
  botonSiguiente !== undefined &&
  botonSiguiente instanceof HTMLButtonElement
) {
  botonSiguiente.addEventListener("click", () => {
    handlerBotonSiguiente();
  });
}

//Damos de alta el botón de anterior
const botonAnterior = document.getElementById("anterior");
//Creamos igual que en el boton siguiente un a función handler
const handlerBotonAnterior = () => {
  const turnoAnterior = anteriorTurno();
  const turnoActual = document.getElementById("numeroTurno");
  if (
    turnoActual !== null &&
    turnoActual !== undefined &&
    turnoActual instanceof HTMLHeadingElement
  ) {
    turnoActual.textContent = turnoAnterior.toString().padStart(2, "0");
  }
};
if (
  botonAnterior !== null &&
  botonAnterior !== undefined &&
  botonAnterior instanceof HTMLButtonElement
) {
  botonAnterior.addEventListener("click", () => {
    handlerBotonAnterior();
  });
}

//Damos de alta el botón de reset
const botonReset = document.getElementById("reset");
if (
  botonReset !== null &&
  botonReset !== undefined &&
  botonReset instanceof HTMLButtonElement
) {
  botonReset.addEventListener("click", resetTurno);
}

//Damos de alta el botón de Saltar turno
const botonSalto = document.getElementById("salto");
if (
  botonSalto !== null &&
  botonSalto !== undefined &&
  botonSalto instanceof HTMLButtonElement
) {
  botonSalto.addEventListener("click", saltarTurno);
}
