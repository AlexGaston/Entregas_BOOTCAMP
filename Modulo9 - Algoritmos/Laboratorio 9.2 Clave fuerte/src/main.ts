import "./style.css";
import { ValidacionClave, commonPasswords } from "./Clave fuerte/model";
import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes,
  validacionMayusculasYMinusculas,
  validacionTienCaracteresEspeciales,
  validacionTieneLongitudMinima,
  validacionTieneNombreUsuario,
  validacionTieneNumeros,
  validacionTienePalabrasComunes,
} from "./Clave fuerte/clave";

const validacionClave: ValidacionClave = {
  esValida: true,
  error: "",
};

const nombreUsuario: string = "Alex";
const clave: string = "Clave1!";

const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  tieneMayusculasYMinusculas(clave);
  if (validacionMayusculasYMinusculas.esValida === false) {
    validacionClave.error = validacionMayusculasYMinusculas.error;
    return validacionClave;
  }

  tieneNumeros(clave);
  if (validacionTieneNumeros.esValida === false) {
    validacionClave.error = validacionTieneNumeros.error;
    return validacionClave;
  }

  tieneCaracteresEspeciales(clave);
  if (validacionTienCaracteresEspeciales.esValida === false) {
    validacionClave.error = validacionTienCaracteresEspeciales.error;
    return validacionClave;
  }

  tieneLongitudMinima(clave);
  if (validacionTieneLongitudMinima.esValida === false) {
    validacionClave.error = validacionTieneLongitudMinima.error;
    return validacionClave;
  }

  tieneNombreUsuario(nombreUsuario, clave);
  if (validacionTieneNombreUsuario.esValida === false) {
    validacionClave.error = validacionTieneNombreUsuario.error;
    return validacionClave;
  }

  tienePalabrasComunes(clave, commonPasswords);
  if (validacionTienePalabrasComunes.esValida === false) {
    validacionClave.error = validacionTienePalabrasComunes.error;
    return validacionClave;
  }

  return validacionClave;
};

console.log(validarClave(nombreUsuario, clave, commonPasswords));
