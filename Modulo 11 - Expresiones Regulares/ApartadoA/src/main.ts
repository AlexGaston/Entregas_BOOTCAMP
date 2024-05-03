import "./style.css";
import { validacionFormatoIBAN, extraerParametrosIBAN } from "./validacion";

import {
  pintarValidacionFormatoiban,
  pintarValidacionIban,
  pintarBanco,
  pintarCodigoSucursal,
  pintarDigitoControl,
  pintarNumeroDeCuenta,
  borrarDatos,
} from "./ui";

import { isValidIBAN } from "ibantools";

export let ibanleido = "";

const leerIban = () => {
  const campoIban = document.getElementById("enter-iban");
  if (
    campoIban !== null &&
    campoIban !== undefined &&
    campoIban instanceof HTMLInputElement
  ) {
    ibanleido = campoIban.value;
  }

  pintarValidacionFormatoiban();
  pintarValidacionIban();
  if (validacionFormatoIBAN(ibanleido)) {
    extraerParametrosIBAN(ibanleido);
    pintarBanco();
    pintarCodigoSucursal();
    pintarDigitoControl();
    pintarNumeroDeCuenta();
  }
};

export const validacionIban = (ibanleido: string): boolean => {
  if (isValidIBAN(ibanleido)) {
    return true;
  } else {
    return false;
  }
};

const botonchequearIban = document.getElementById("check-iban");
if (
  botonchequearIban !== null &&
  botonchequearIban !== undefined &&
  botonchequearIban instanceof HTMLButtonElement
) {
  botonchequearIban.addEventListener("click", leerIban);
}

const botonreset = document.getElementById("reset");
if (
  botonreset !== null &&
  botonreset !== undefined &&
  botonreset instanceof HTMLButtonElement
) {
  botonreset?.addEventListener("click", borrarDatos);
}
