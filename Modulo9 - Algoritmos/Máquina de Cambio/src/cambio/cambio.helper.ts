import { Cambio } from "./model";

interface Resultado {
  cuantos: number;
  restoCantidad: number;
}

export const calcularEntrada = (
  cantidad: number,
  billeteMoneda: number
): Resultado => {
  if (!cantidad || !billeteMoneda || cantidad === 0 || billeteMoneda === 0) {
    throw "Los parámetros introducidos no son correctos";
  }

  //dividirCantidadEntreBilleteMoneda
  const numeroDeBilletesADevolver = Math.floor(cantidad / billeteMoneda);
  const cantidadADevolver = cantidad % billeteMoneda;
  //cantidad - billeteMoneda * numeroDeBilletesADevolver;

  return {
    cuantos: numeroDeBilletesADevolver,
    restoCantidad: cantidadADevolver,
  };
};
