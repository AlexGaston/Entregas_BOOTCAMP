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
  const turnoActual = document.getElementById("numeroTurno");
  const resetTurno = 0;
  if (turnoActual !== null && turnoActual !== undefined) {
    turnoActual.textContent = resetTurno.toString();
  }
  turnoInicial = 0;
  return turnoInicial;
}

//Damos de alta el boton siguiente
const botonSiguiente = document.getElementById("siguiente");

//Creamos una funcion handler del BotonSiguiente que luego la utilizaremos en el boton siguiente
const handlerBotonSiguiente = () => {
  console.log(turnoInicial);
  const turnoSiguiente = siguienteTurno();
  const turnoActual = document.getElementById("numeroTurno");
  if (turnoActual !== null && turnoActual !== undefined) {
    turnoActual.textContent = turnoSiguiente.toString().padStart(2, "0");
  }
};

if (botonSiguiente !== null && botonSiguiente !== undefined) {
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
  if (turnoActual !== null && turnoActual !== undefined) {
    turnoActual.textContent = turnoAnterior.toString().padStart(2, "0");
  }
};

botonAnterior?.addEventListener("click", () => {
  handlerBotonAnterior();
});

//Damos de alta el botón de reset
const botonReset = document.getElementById("reset");
botonReset?.addEventListener("click", resetTurno);
