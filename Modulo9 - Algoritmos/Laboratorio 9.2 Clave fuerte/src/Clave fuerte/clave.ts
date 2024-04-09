import { ValidacionClave, commonPasswords } from "./model";
/*
const validarClave = (
    nombreUsuario: string,
    clave: string,
    commonPasswords: string[]
  ): ValidacionClave => {
    // ...
  };
*/

//La clave debe de tener mayúsculas y minúsculas

let validacionMayusculasYMinusculas: ValidacionClave = {
  esValida: false,
};

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  let mayusculasArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let minusculasArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let tieneMayuscula = false;
  let tieneMinuscula = false;

  tieneMayuscula = mayusculasArray.some((letra) => clave.includes(letra));
  tieneMinuscula = minusculasArray.some((letra) => clave.includes(letra));

  if (tieneMayuscula && tieneMinuscula) {
    validacionMayusculasYMinusculas.esValida = true;
  } else {
    validacionMayusculasYMinusculas.esValida = false;
    validacionMayusculasYMinusculas.error =
      "La clave debe de tener mayúsculas y minúsculas";
  }

  return validacionMayusculasYMinusculas;
};

// La clave debe de tener números

let validacionTieneNumeros: ValidacionClave = {
  esValida: false,
};
const numeros = "0123456789";

export const tieneNumeros = (clave: string): ValidacionClave => {
  for (let i = 0; i < clave.length; i++) {
    if (numeros.indexOf(clave.charAt(i), 0) != -1) {
      validacionTieneNumeros.esValida = true;
      return validacionTieneNumeros;
    }
    validacionTieneNumeros.esValida = false;
    validacionTieneNumeros.error = "La clave debe de tener números";
  }

  return validacionTieneNumeros;
};

// La clave debe de tener caracteres especiales (@,#,+, _, ...)

// Lista de caracteres especiales
const caracteresEspeciales = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  "|",
  "\\",
  ";",
  ":",
  "'",
  '"',
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
];
let validacionTienCaracteresEspeciales: ValidacionClave = {
  esValida: false,
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  for (let i = 0; i < clave.length; i++) {
    if (caracteresEspeciales.includes(clave[i])) {
      validacionTienCaracteresEspeciales.esValida = true;
      return validacionTienCaracteresEspeciales;
    }
    validacionTienCaracteresEspeciales.esValida = false;
    validacionTienCaracteresEspeciales.error =
      "La clave debe de tener caracteres especiales";
  }

  return validacionTienCaracteresEspeciales;
};

// La clave debe de tener una longitud mínima de 8 caracteres.
let validacionTieneLongitudMinima: ValidacionClave = {
  esValida: false,
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (clave.length >= 8) {
    validacionTieneLongitudMinima.esValida = true;
    return validacionTieneLongitudMinima;
  }
  validacionTieneLongitudMinima.esValida = false;
  validacionTieneLongitudMinima.error =
    "La clave debe de tener una longitud mínima de 8 caracteres";
  return validacionTieneLongitudMinima;
};

//La clave no debe tener el nombre del usuario.
let validacionTieneNombreUsuario: ValidacionClave = {
  esValida: false,
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (!clave.toLowerCase().includes(nombreUsuario.toLowerCase())) {
    validacionTieneNombreUsuario.esValida = true;
    return validacionTieneNombreUsuario;
  }
  validacionTieneNombreUsuario.esValida = false;
  validacionTieneNombreUsuario.error =
    "La clave no debe tener el nombre del usuario";
  return validacionTienCaracteresEspeciales;
};

// La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).

let validacionTienePalabrasComunes: ValidacionClave = {
  esValida: true,
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  let contieneCommonPasswords = false;
  contieneCommonPasswords = commonPasswords.some((password) =>
    clave.includes(password)
  );

  if (contieneCommonPasswords) {
    validacionTienePalabrasComunes.esValida = false;
    validacionTienePalabrasComunes.error =
      "La clave no debe de contener palabras comunes";
  }
  return validacionTienePalabrasComunes;
};
