import { ValidacionClave } from "./model";
/*
const validarClave = (
    nombreUsuario: string,
    clave: string,
    commonPasswords: string[]
  ): ValidacionClave => {
    // ...
  };
*/

let clave = "palabraclave";

//La clave debe de tener mayúsculas y minúsculas

let validacionMayusculasYMinusculas: ValidacionClave = {
  esValida: false,
};

const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  let claveArray = [...clave];
  if (
    claveArray.some((letra) => letra === letra.toUpperCase()) &&
    claveArray.some((letra) => letra === letra.toLowerCase())
  ) {
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

const tieneNumeros = (clave: string): ValidacionClave => {
  for (let i = 0; i < clave.length; i++) {
    if (numeros.indexOf(clave.charAt(i), 0) != -1) {
      validacionTieneNumeros.esValida = true;
      return validacionTieneNumeros;
    }
  }
  validacionTieneNumeros.esValida = false;
  validacionTieneNumeros.error = "La clave debe de tener números";
  return validacionTieneNumeros;
};

// La clave debe de tener caracteres especiales (@,#,+, _, ...)

const caracteresEspeciales = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
