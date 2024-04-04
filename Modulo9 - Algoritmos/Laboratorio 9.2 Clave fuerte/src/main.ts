import "./style.css";
import { ValidacionClave } from "./Clave fuerte/model";

console.log("Hello Typescript!!!");

let clave = "palabraCl1ve";
const numeros = "0123456789";

let validacionTieneNumeros: ValidacionClave = {
  esValida: false,
};

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

console.log("Tiene Numeros: ", tieneNumeros(clave));
