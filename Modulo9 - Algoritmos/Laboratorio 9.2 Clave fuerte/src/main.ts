import "./style.css";
import { ValidacionClave } from "./Clave fuerte/model";

let clave = "palabraClave";
const numeros = "0123456789";

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

console.log("Tiene Numeros: ", tieneNumeros(clave));
