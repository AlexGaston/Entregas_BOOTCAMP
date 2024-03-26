import { Cambio } from "./model";
import { calcularEntrada } from "./cambio.helper";

const arrayBilletesMonedas = [
  50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
];

export const calcularCambio = (compra: number, pago: number): Cambio[] => {
  if (!compra || !pago) {
    throw new Error("Los parametros introducidos no son correctos");
  }
  let cambioRestante = pago - compra;
  let resultado: Cambio[] = [];

  for (let i = 0; i < arrayBilletesMonedas.length - 1; i++) {
    const billeteMoneda = arrayBilletesMonedas[i];
    const { cuantos, restoCantidad } = calcularEntrada(
      cambioRestante,
      billeteMoneda
    );

    if (cuantos > 0) {
      resultado = [...resultado, { moneda: billeteMoneda, cuantos }];
      //resultado.push({moneda: billeteMoneta, cuantos })
      cambioRestante = restoCantidad;
    }

    if (cambioRestante === 0) {
      break;
    }
  }

  return resultado;
};
