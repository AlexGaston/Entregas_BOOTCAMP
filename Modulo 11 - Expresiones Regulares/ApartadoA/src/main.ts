import "./style.css";
import {
  validacionFormatoIBAN,
  extraerParametrosIBAN,
  miBanco,
  miSucursal,
  miDigitoControl,
  miNumeroDeCuenta,
} from "./validacion";

let ibanleido = "";

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
  extraerParametrosIBAN(ibanleido);
  pintarBanco();
  pintarCodigoSucursal();
  pintarDigitoControl();
  pintarNumeroDeCuenta();
};

const isValidIBAN = (ibanleido: string): boolean => {
  const ibantools = require("ibantools");
  if (ibantools.isValidIBAN(ibanleido)) {
    return true;
  } else {
    return false;
  }
};

const pintarValidacionFormatoiban = () => {
  const divResultado = document.getElementById("resultado");
  if (validacionFormatoIBAN(ibanleido)) {
    if (
      divResultado !== null &&
      divResultado !== undefined &&
      divResultado instanceof HTMLDivElement
    ) {
      divResultado.innerHTML = "El IBAN esta bien formado";
    }
  } else {
    if (
      divResultado !== null &&
      divResultado !== undefined &&
      divResultado instanceof HTMLDivElement
    ) {
      divResultado.innerHTML = "El IBAN no tiene el formato correcto";
    }
  }
};

const pintarValidacionIban = () => {
  const divValidacionIban = document.getElementById("validacion-iban");
  if (isValidIBAN(ibanleido)) {
    if (
      divValidacionIban !== null &&
      divValidacionIban !== undefined &&
      divValidacionIban instanceof HTMLDivElement
    ) {
      divValidacionIban.innerHTML = "El IBAN es válido";
    }
  } else {
    if (
      divValidacionIban !== null &&
      divValidacionIban !== undefined &&
      divValidacionIban instanceof HTMLDivElement
    ) {
      divValidacionIban.innerHTML = "El IBAN NO es válido";
    }
  }
};

const pintarBanco = () => {
  const divBanco = document.getElementById("nombre-banco");
  if (
    divBanco !== null &&
    divBanco !== undefined &&
    divBanco instanceof HTMLElement
  ) {
    divBanco.innerHTML = miBanco;
  }
};

const pintarCodigoSucursal = () => {
  const divCodigoSucursal = document.getElementById("codigo-sucursal");
  if (
    divCodigoSucursal !== null &&
    divCodigoSucursal !== undefined &&
    divCodigoSucursal instanceof HTMLElement
  ) {
    divCodigoSucursal.innerHTML = miSucursal;
  }
};

const pintarDigitoControl = () => {
  const divDigitoControl = document.getElementById("digito-control");
  if (
    divDigitoControl !== null &&
    divDigitoControl !== undefined &&
    divDigitoControl instanceof HTMLElement
  ) {
    divDigitoControl.innerHTML = miDigitoControl;
  }
};

const pintarNumeroDeCuenta = () => {
  const divNumeroDeCuenta = document.getElementById("numero-cuenta");
  if (
    divNumeroDeCuenta !== null &&
    divNumeroDeCuenta !== undefined &&
    divNumeroDeCuenta instanceof HTMLElement
  ) {
    divNumeroDeCuenta.innerHTML = miNumeroDeCuenta;
  }
};

const botonchequearIban = document.getElementById("check-iban");
botonchequearIban?.addEventListener("click", leerIban);
