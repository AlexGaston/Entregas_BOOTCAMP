import "./style.css";
import { bancos } from "./model";

let miBanco = "";
let miSucursal = "";
let miDigitoControl = "";
let miNumeroDeCuenta = "";

export const validacionIBAN = (): any => {
  const ibanIntroducido = document.getElementById("iban");
  if (
    ibanIntroducido !== null &&
    ibanIntroducido !== undefined &&
    ibanIntroducido instanceof HTMLInputElement
  ) {
    let valorIbanIntroducido: string = ibanIntroducido.value;

    const patron =
      /^[A-Za-z]{2}(\s|-)?\d\d(\s|-)?(?<codigoBanco>\d{4})(\s|-)?(?<sucursal>\d{4})(\s|-)?(?<digitoControl>\d{2})(\s|-)?(?<numeroDeCuenta>\d{10})$/i;

    const coincidencia = patron.exec(valorIbanIntroducido);

    if (coincidencia) {
      const { codigoBanco, sucursal, digitoControl, numeroDeCuenta } =
        coincidencia.groups as any;

      console.log("El código del Banco es: ", codigoBanco);
      console.log("EL código de la sucursal es: ", sucursal);
      console.log("El dígito de control es: ", digitoControl);
      console.log("El número de cuenta es: ", numeroDeCuenta);

      miSucursal = sucursal;
      miDigitoControl = digitoControl;
      miNumeroDeCuenta = numeroDeCuenta;

      //Hacemos un filter del array de bancos para encontrar el nombre del banco
      const nombreBanco = bancos.filter(
        (banco) => banco.codigo === codigoBanco
      );
      miBanco = nombreBanco[0].nombreBanco;

      console.log("Nombre de Banco: ", miBanco);

      pintarMensaje();
      pintarBanco();
      pintarCodigoSucursal();
      pintarDigitoControl();
      pintarNumeroDeCuenta();
    } else {
      return false;
    }

    return patron.test(valorIbanIntroducido);
  } else {
    return false;
  }
};

const pintarMensaje = () => {
  const resultado = document.getElementById("resultado");
  if (resultado !== null && resultado !== undefined) {
    resultado.innerHTML = "El IBAN está bien formado y es válido";
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

//Damos de alta el boton para validar el IBAN
const botonValidarIban = document.getElementById("checkIban");
if (
  botonValidarIban !== null &&
  botonValidarIban !== undefined &&
  botonValidarIban instanceof HTMLButtonElement
) {
  botonValidarIban.addEventListener("click", () => validacionIBAN());
}
