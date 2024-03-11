/**
 * Valida un NIF
 * @param {string} numero, es de tipo string debe tener un tamaño de 8 caracteres
y ser numérico (sin separadores de miles ni nada)
 * @param {string} letra, de tipo string debe ser una letra mayúscula
 * @returns {boolean}
 */

const __CUANTAS_LETRAS = 23;
const __LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";
const calculaIndiceDeLetra = (parteNumericaNIF) => {
  parteNumericaNIF % __CUANTAS_LETRAS;
};
const obtenerLetra = (indice) => {
  __LETRAS[indice];
};

export function validarNIF(parteNumericaNIF, letra) {
  const resto = calculaIndiceDeLetra(parteNumericaNIF);
  return letra === obtenerLetra(resto);
}
