import "./style.css";

/*
function sumar() {
  // Leer los valores de los inputs
  const sumando1 = (document.getElementById("sumando1") as HTMLInputElement)
    .value;
  const sumando2 = (document.getElementById("sumando2") as HTMLInputElement)
    .value;
  // Sumar los dos números
  const resultado = parseInt(sumando1) + parseInt(sumando2);
  // Mostrar el resultado
  const resultadoElement = document.getElementById("resultado");

  if (resultadoElement !== null && resultadoElement !== undefined) {
    resultadoElement.innerHTML = resultado.toString();
  }
}

const botonSumar = document.getElementById("sumar");

if (botonSumar !== null && botonSumar !== undefined) {
  botonSumar.addEventListener("click", sumar);
}
*/

// Inicializamos el turno
const turnoInicial = 0;
// funcion para incrmentar el turno
function siguienteTurno(turnoInicial: number): number {
  return turnoInicial + 1;
}
/*
function anteriorTurno() {
  return turno - 1;
}

function resetTurno() {
  return turnoInicial;
}*/

const botonSiguiente = document.getElementById("siguiente");
if (botonSiguiente !== null && botonSiguiente !== undefined) {
  botonSiguiente.addEventListener("click", siguienteTurno);
}
const botonAnterior = document.getElementById("anterior");
const botonReset = document.getElementById("reset");
