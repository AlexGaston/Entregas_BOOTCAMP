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

export const calcularTipoIva = (
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
};
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

let totalesIva: TotalPorTipoIva[] = [];
export const totalesIvaTicket = (
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
};

/*const totalesFinalesIva = (totalesIva: TotalPorTipoIva[]): TotalPorTipoIva[] => {
  for (let i=0; i<totalesIva.length; i++){
    if(totalesIva[i].tipoIva === "general"){
      
    }
  }
}*/

/*
export const desgloseTipoIva = (productos: LineaTicket[]) => {
  let totalIvaReducido = 0;
  let totalIvaSuperReducidoA = 0;
  let totalIvaSuperReducidoB = 0;
  let totalIvaSuperReducidoC = 0;

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
};*/
