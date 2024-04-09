import "./style.css";
import { ValidacionClave, commonPasswords } from "./Clave fuerte/model";

// La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).

const clave = "nuevo";

let validacionTienePalabrasComunes: ValidacionClave = {
  esValida: true,
};

const tienePalabrasComunes = (
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

console.log(
  "Tiene palabras comunes: ",
  tienePalabrasComunes(clave, commonPasswords)
);
