import {
  Producto,
  IVAgeneral,
  IVAreducido,
  IVAsuperreducidoA,
  IVAsuperreducidoB,
  ResultadoLineaTicket,
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
  return resultadoLineasTicketProducto.reduce(
    (acc, lineaProducto) =>
      acc + (lineaProducto.precioConIva - lineaProducto.precioSinIva),
    0
  );
};
