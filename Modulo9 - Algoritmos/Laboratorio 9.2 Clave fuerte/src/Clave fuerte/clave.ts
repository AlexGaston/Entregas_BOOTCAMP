import { ValidacionClave } from "./model";

//La clave debe de tener mayúsculas y minúsculas

export let validacionMayusculasYMinusculas: ValidacionClave = {
  esValida: false,
  error: "La clave debe de tener mayúsculas y minúsculas",
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
    validacionMayusculasYMinusculas.error = "";
  }

  return validacionMayusculasYMinusculas;
};

// La clave debe de tener números

export let validacionTieneNumeros: ValidacionClave = {
  esValida: false,
  error: "",
};
//const numeros = "0123456789";

export const tieneNumeros = (clave: string): ValidacionClave => {
  for (let i = 0; i < clave.length; i++) {
    if (!isNaN(parseInt(clave[i]))) {
      validacionTieneNumeros.esValida = true;
      validacionTieneNumeros.error = "";
      return validacionTieneNumeros;
    }
  }
  validacionTieneNumeros.esValida = false;
  validacionTieneNumeros.error = "La clave debe de tener números";
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
export let validacionTienCaracteresEspeciales: ValidacionClave = {
  esValida: false,
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  for (let i = 0; i < clave.length; i++) {
    if (caracteresEspeciales.includes(clave[i])) {
      validacionTienCaracteresEspeciales.esValida = true;
      validacionTienCaracteresEspeciales.error = "";
      return validacionTienCaracteresEspeciales;
    }
    validacionTienCaracteresEspeciales.esValida = false;
    validacionTienCaracteresEspeciales.error =
      "La clave debe de tener caracteres especiales";
  }

  return validacionTienCaracteresEspeciales;
};

// La clave debe de tener una longitud mínima de 8 caracteres.
export let validacionTieneLongitudMinima: ValidacionClave = {
  esValida: false,
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (clave.length >= 8) {
    validacionTieneLongitudMinima.esValida = true;
    validacionTieneLongitudMinima.error = "";
    return validacionTieneLongitudMinima;
  }
  validacionTieneLongitudMinima.esValida = false;
  validacionTieneLongitudMinima.error =
    "La clave debe de tener una longitud mínima de 8 caracteres";
  return validacionTieneLongitudMinima;
};

//La clave no debe tener el nombre del usuario.
export let validacionTieneNombreUsuario: ValidacionClave = {
  esValida: false,
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (!clave.toLowerCase().includes(nombreUsuario.toLowerCase())) {
    validacionTieneNombreUsuario.esValida = true;
    validacionTieneNombreUsuario.error = "";
    return validacionTieneNombreUsuario;
  }
  validacionTieneNombreUsuario.esValida = false;
  validacionTieneNombreUsuario.error =
    "La clave no debe tener el nombre del usuario";
  return validacionTieneNombreUsuario;
};

// La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).

export let validacionTienePalabrasComunes: ValidacionClave = {
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
    return validacionTienePalabrasComunes;
  }
  validacionTienePalabrasComunes.esValida = true;
  validacionTienePalabrasComunes.error = "";
  return validacionTienePalabrasComunes;
};
