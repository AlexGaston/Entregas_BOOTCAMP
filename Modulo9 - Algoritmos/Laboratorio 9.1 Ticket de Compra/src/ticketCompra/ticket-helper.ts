import {
  Producto,
  IVAgeneral,
  IVAreducido,
  IVAsuperreducidoA,
  IVAsuperreducidoB,
  ResultadoLineaTicket,
  TotalPorTipoIva,
  TipoIva,
} from "./model";

//Calcular el valor del IVA del producto:

export const calcularElIva = (producto: Producto): number => {
  let iva: number = 0;

  switch (producto.tipoIva) {
    case "general":
      iva = producto.precio * IVAgeneral;
      break;
    case "reducido":
      iva = producto.precio * IVAreducido;
      break;
    case "superreducidoA":
      iva = producto.precio * IVAsuperreducidoA;
      break;
    case "superreducidoB":
      iva = producto.precio * IVAsuperreducidoB;
      break;
    case "superreducidoC":
      iva = 0;
      break;
    case "sinIva":
      iva = 0;
      break;
    default:
      console.log(
        "Ha habido algun tipo de problema al calcular el IVA del producto"
      );
      break;
  }

  return iva;
};

export const calcularPrecioProductoConIva = (producto: Producto): number => {
  return producto.precio + calcularElIva(producto);
};

export const calcularPrecioTotalSinIVA = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
): number => {
  return resultadoLineasTicketProducto.reduce(
    (acc, lineaProducto) => acc + lineaProducto.precioSinIva,
    0
  );
};

export const calcularPrecioTotalConIva = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
) => {
  return resultadoLineasTicketProducto.reduce(
    (acc, lineaProducto) => acc + lineaProducto.precioConIva,
    0
  );
};

export const calcularTotalIva = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
) => {
  const totalIva = resultadoLineasTicketProducto.reduce(
    (acc, lineaProducto) =>
      acc + (lineaProducto.precioConIva - lineaProducto.precioSinIva),
    0
  );
  const totalIvaRedondeado = Number(totalIva.toFixed(2));
  return totalIvaRedondeado;
};

export let totalesIva: TotalPorTipoIva[] = [];

export const totalesIvaTicket = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
): TotalPorTipoIva[] => {
  const totalesPorIVA: { [tipoIva: string]: number } = {};
  resultadoLineasTicketProducto.forEach((resultadoLineasTicketProducto) => {
    resultadoLineasTicketProducto;
    const diferenciaIva =
      resultadoLineasTicketProducto.precioConIva -
      resultadoLineasTicketProducto.precioSinIva;
    const diferenciaIvaRedondeada = Number(diferenciaIva.toFixed(2));
    totalesPorIVA[resultadoLineasTicketProducto.tipoIva] =
      (totalesPorIVA[resultadoLineasTicketProducto.tipoIva] || 0) +
      diferenciaIvaRedondeada;
  });
  console.log("Totales por IVA: ", totalesPorIVA);

  return Object.keys(totalesPorIVA).map((tipoIVA) => ({
    tipoIva: tipoIVA as TipoIva,
    cuantia: totalesPorIVA[tipoIVA] || 0,
  }));
};
