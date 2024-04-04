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
  return resultadoLineasTicketProducto.reduce(
    (acc, lineaProducto) =>
      acc + (lineaProducto.precioConIva - lineaProducto.precioSinIva),
    0
  );
};

/*export const calcularTipoIva = (
  resultadoLineasTicketProducto: ResultadoLineaTicket,
  tipoDeIva: TipoIva
): TotalPorTipoIva => {
  let iva: TotalPorTipoIva = {
    tipoIva: tipoDeIva,
    cuantia: 0,
  };
  iva.cuantia +=
    resultadoLineasTicketProducto.precioConIva -
    resultadoLineasTicketProducto.precioSinIva;

  return iva;
};*/
/*
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
*/

export let totalesIva: TotalPorTipoIva[] = [];
/*export const totalesIvaTicket = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
): TotalPorTipoIva[] => {
  //let totalesIva: TotalPorTipoIva[] = [];

  let ivaGeneralTotal: TotalPorTipoIva = {
    tipoIva: "general",
    cuantia: 0,
  };

  let ivasuperreducidoATotal: TotalPorTipoIva = {
    tipoIva: "superreducidoA",
    cuantia: 0,
  };

  let ivasuperreducidoBTotal: TotalPorTipoIva = {
    tipoIva: "superreducidoB",
    cuantia: 0,
  };

  let ivasuperreducidoCTotal: TotalPorTipoIva = {
    tipoIva: "superreducidoC",
    cuantia: 0,
  };

  let ivareducidoTotal: TotalPorTipoIva = {
    tipoIva: "reducido",
    cuantia: 0,
  };

  let sinIvaTotal: TotalPorTipoIva = {
    tipoIva: "sinIva",
    cuantia: 0,
  };

  for (let i = 0; i < resultadoLineasTicketProducto.length; i++) {
    switch (resultadoLineasTicketProducto[i].tipoIva) {
      case "general":
        totalesIva.push(
          calcularTipoIva(resultadoLineasTicketProducto[i], "general")
        );
        break;
      case "superreducidoA":
        totalesIva.push(
          calcularTipoIva(resultadoLineasTicketProducto[i], "superreducidoA")
        );
        break;
      case "superreducidoB":
        totalesIva.push(
          calcularTipoIva(resultadoLineasTicketProducto[i], "superreducidoB")
        );
        break;
      case "superreducidoC":
        totalesIva.push(
          calcularTipoIva(resultadoLineasTicketProducto[i], "superreducidoC")
        );
        break;
      case "reducido":
        totalesIva.push(ivareducidoTotal);
        break;
      case "sinIva":
        totalesIva.push(sinIvaTotal);
        break;
      default:
        console.error("Ha habido un error al calcular los totales de IVA");
    }
  }
  return totalesIva;
};*/

export const totalesIvaTicket = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
): TotalPorTipoIva[] => {
  const totalesPorIVA: { [tipoIva: string]: number } = {};
  resultadoLineasTicketProducto.forEach((resultadoLineasTicketProducto) => {
    //const { tipoIva, precioConIva, precioSinIva } =
    //resultadoLineasTicketProducto;
    const diferenciaIva =
      resultadoLineasTicketProducto.precioConIva -
      resultadoLineasTicketProducto.precioSinIva;
    totalesPorIVA[resultadoLineasTicketProducto.tipoIva] =
      (totalesPorIVA[resultadoLineasTicketProducto.tipoIva] || 0) +
      diferenciaIva;
  });
  console.log(totalesPorIVA);

  return Object.keys(totalesPorIVA).map((tipoIVA) => ({
    tipoIva: tipoIVA as TipoIva,
    cuantia: totalesPorIVA[tipoIVA] || 0,
  }));
};
