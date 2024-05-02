import { bancos } from "./model";

export let miBanco = "";
export let miSucursal = "";
export let miDigitoControl = "";
export let miNumeroDeCuenta = "";

export const validacionFormatoIBAN = (value: string): boolean => {
  const patron =
    /^[A-Za-z]{2}(\s|-)?\d\d(\s|-)?\d{4}(\s|-)?\d{4}(\s|-)?\d{2}(\s|-)?\d{10}$/i;

  return patron.test(value);
};

export const extraerParametrosIBAN = (value: string) => {
  const patron =
    /^[A-Za-z]{2}(\s|-)?\d\d(\s|-)?(?<codigoBanco>\d{4})(\s|-)?(?<sucursal>\d{4})(\s|-)?(?<digitoControl>\d{2})(\s|-)?(?<numeroDeCuenta>\d{10})$/i;

  const coincidencia = patron.exec(value);

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
    const nombreBanco = bancos.filter((banco) => banco.codigo === codigoBanco);
    miBanco = nombreBanco[0].nombreBanco;
  }
};
