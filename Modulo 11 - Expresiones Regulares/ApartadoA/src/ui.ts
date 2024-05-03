import {
  validacionFormatoIBAN,
  miBanco,
  miSucursal,
  miDigitoControl,
  miNumeroDeCuenta,
} from "./validacion";

import { ibanleido, validacionIban } from "./main";

export const pintarValidacionFormatoiban = () => {
  const divResultado = document.getElementById("resultado");
  if (validacionFormatoIBAN(ibanleido)) {
    if (
      divResultado !== null &&
      divResultado !== undefined &&
      divResultado instanceof HTMLDivElement
    ) {
      divResultado.innerHTML = "El IBAN está bien formado";
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

export const pintarValidacionIban = () => {
  const divValidacionIban = document.getElementById("validacion-iban");
  if (validacionIban(ibanleido)) {
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

export const pintarBanco = () => {
  const divBanco = document.getElementById("nombre-banco");
  if (
    divBanco !== null &&
    divBanco !== undefined &&
    divBanco instanceof HTMLElement
  ) {
    divBanco.innerHTML = miBanco;
  }
};

export const pintarCodigoSucursal = () => {
  const divCodigoSucursal = document.getElementById("codigo-sucursal");
  if (
    divCodigoSucursal !== null &&
    divCodigoSucursal !== undefined &&
    divCodigoSucursal instanceof HTMLElement
  ) {
    divCodigoSucursal.innerHTML = miSucursal;
  }
};

export const pintarDigitoControl = () => {
  const divDigitoControl = document.getElementById("digito-control");
  if (
    divDigitoControl !== null &&
    divDigitoControl !== undefined &&
    divDigitoControl instanceof HTMLElement
  ) {
    divDigitoControl.innerHTML = miDigitoControl;
  }
};

export const pintarNumeroDeCuenta = () => {
  const divNumeroDeCuenta = document.getElementById("numero-cuenta");
  if (
    divNumeroDeCuenta !== null &&
    divNumeroDeCuenta !== undefined &&
    divNumeroDeCuenta instanceof HTMLElement
  ) {
    divNumeroDeCuenta.innerHTML = miNumeroDeCuenta;
  }
};

export const borrarDatos = () => {
  const inputIban = document.getElementById("enter-iban");
  if (
    inputIban !== null &&
    inputIban !== undefined &&
    inputIban instanceof HTMLInputElement
  ) {
    inputIban.value = "";
  }

  const divResultado = document.getElementById("resultado");
  if (
    divResultado !== null &&
    divResultado !== undefined &&
    divResultado instanceof HTMLDivElement
  ) {
    divResultado.innerHTML = "";
  }

  const divValidacionIban = document.getElementById("validacion-iban");
  if (
    divValidacionIban !== null &&
    divValidacionIban !== undefined &&
    divValidacionIban instanceof HTMLDivElement
  ) {
    divValidacionIban.innerHTML = "";
  }

  const divBanco = document.getElementById("nombre-banco");
  if (
    divBanco !== null &&
    divBanco !== undefined &&
    divBanco instanceof HTMLElement
  ) {
    divBanco.innerHTML = "";
  }

  const divCodigoSucursal = document.getElementById("codigo-sucursal");
  if (
    divCodigoSucursal !== null &&
    divCodigoSucursal !== undefined &&
    divCodigoSucursal instanceof HTMLElement
  ) {
    divCodigoSucursal.innerHTML = "";
  }

  const divDigitoControl = document.getElementById("digito-control");
  if (
    divDigitoControl !== null &&
    divDigitoControl !== undefined &&
    divDigitoControl instanceof HTMLElement
  ) {
    divDigitoControl.innerHTML = "";
  }

  const divNumeroDeCuenta = document.getElementById("numero-cuenta");
  if (
    divNumeroDeCuenta !== null &&
    divNumeroDeCuenta !== undefined &&
    divNumeroDeCuenta instanceof HTMLElement
  ) {
    divNumeroDeCuenta.innerHTML = "";
  }
};
