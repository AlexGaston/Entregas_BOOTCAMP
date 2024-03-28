import {
  Producto,
  IVAgeneral,
  IVAreducido,
  IVAsuperreducidoA,
  IVAsuperreducidoB,
  ResultadoLineaTicket,
  LineaTicket,
  TotalPorTipoIva,
  ivaGeneralTotal,
  ivasuperreducidoATotal,
  ivasuperreducidoBTotal,
  ivasuperreducidoCTotal,
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

export let totalIvaGeneral = 0;
export let totalIvaReducido = 0;
export let totalIvaSuperReducidoA = 0;
export let totalIvaSuperReducidoB = 0;
export let totalIvaSuperReducidoC = 0;

export const desgloseTipoIva = (productos: LineaTicket[]) => {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].producto.tipoIva === "general") {
      totalIvaGeneral = totalIvaGeneral + calcularElIva(productos[i].producto);
    }
    if (productos[i].producto.tipoIva === "reducido") {
      totalIvaReducido =
        totalIvaReducido + calcularElIva(productos[i].producto);
    }
    if (productos[i].producto.tipoIva === "superreducidoA") {
      totalIvaSuperReducidoA =
        totalIvaSuperReducidoA + calcularElIva(productos[i].producto);
    }
    if (productos[i].producto.tipoIva === "superreducidoB") {
      totalIvaSuperReducidoB =
        totalIvaSuperReducidoB + calcularElIva(productos[i].producto);
    }
    if (productos[i].producto.tipoIva === "superreducidoC") {
      totalIvaSuperReducidoC =
        totalIvaSuperReducidoC + calcularElIva(productos[i].producto);
    }
  }
};

export const calcularTotalIvaGeneral = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
): TotalPorTipoIva => {
  for (let i = 0; i < resultadoLineasTicketProducto.length; i++) {
    if (resultadoLineasTicketProducto[i].tipoIva === "general") {
      ivaGeneralTotal.cuantia +=
        resultadoLineasTicketProducto[i].precioConIva -
        resultadoLineasTicketProducto[i].precioSinIva;
    }
  }
  return ivaGeneralTotal;
};

export const calcularTotalIvaSuperReducidoA = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
): TotalPorTipoIva => {
  for (let i = 0; i < resultadoLineasTicketProducto.length; i++) {
    if (resultadoLineasTicketProducto[i].tipoIva === "superreducidoA") {
      ivasuperreducidoATotal.cuantia +=
        resultadoLineasTicketProducto[i].precioConIva -
        resultadoLineasTicketProducto[i].precioSinIva;
    }
  }
  return ivasuperreducidoATotal;
};

export const calcularTotalIvaSuperReducidoB = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
): TotalPorTipoIva => {
  for (let i = 0; i < resultadoLineasTicketProducto.length; i++) {
    if (resultadoLineasTicketProducto[i].tipoIva === "superreducidoB") {
      ivasuperreducidoBTotal.cuantia +=
        resultadoLineasTicketProducto[i].precioConIva -
        resultadoLineasTicketProducto[i].precioSinIva;
    }
  }
  return ivasuperreducidoBTotal;
};

export const calcularTotalIvaSuperReducidoC = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
): TotalPorTipoIva => {
  for (let i = 0; i < resultadoLineasTicketProducto.length; i++) {
    if (resultadoLineasTicketProducto[i].tipoIva === "superreducidoC") {
      ivasuperreducidoCTotal.cuantia +=
        resultadoLineasTicketProducto[i].precioConIva -
        resultadoLineasTicketProducto[i].precioSinIva;
    }
  }
  return ivasuperreducidoCTotal;
};

export let totalesIva: TotalPorTipoIva[] = [];

export const totalesIvaTicket = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
): TotalPorTipoIva[] => {
  if (ivaGeneralTotal.cuantia > 0) {
    totalesIva.push(calcularTotalIvaGeneral(resultadoLineasTicketProducto));
  }
  if (ivasuperreducidoATotal.cuantia > 0) {
    totalesIva.push(
      calcularTotalIvaSuperReducidoA(resultadoLineasTicketProducto)
    );
  }
  if (ivasuperreducidoBTotal.cuantia > 0) {
    totalesIva.push(
      calcularTotalIvaSuperReducidoB(resultadoLineasTicketProducto)
    );
  }
  if (ivasuperreducidoCTotal.cuantia > 0) {
    totalesIva.push(
      calcularTotalIvaSuperReducidoC(resultadoLineasTicketProducto)
    );
  }

  return totalesIva;
};
