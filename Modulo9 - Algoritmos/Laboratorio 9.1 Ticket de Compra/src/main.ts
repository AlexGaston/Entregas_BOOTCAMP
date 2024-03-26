import "./style.css";

import {
  IVAgeneral,
  IVAreducido,
  IVAsuperreducidoA,
  IVAsuperreducidoB,
  LineaTicket,
  Producto,
  ResultadoLineaTicket,
  ResultadoTotalTicket,
  TotalPorTipoIva,
} from "./ticketCompra/model";

//Productos de entrada:
export const productos: LineaTicket[] = [
  {
    producto: {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    },
    cantidad: 2,
  },
  {
    producto: {
      nombre: "Perfume",
      precio: 20,
      tipoIva: "general",
    },
    cantidad: 3,
  },
  {
    producto: {
      nombre: "Leche",
      precio: 1,
      tipoIva: "superreducidoC",
    },
    cantidad: 6,
  },
  {
    producto: {
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superreducidoA",
    },
    cantidad: 1,
  },
];

let resultadoLineasTicketProducto: ResultadoLineaTicket[] = [];

export const calculaTicket = (productos: LineaTicket[]) => {
  for (let i = 0; i < productos.length; i++) {
    let lineaProducto = {
      nombre: productos[i].producto.nombre,
      cantidad: productos[i].cantidad,
      precioSinIva: productos[i].producto.precio * productos[i].cantidad, //Tenemos en cuenta la cantidad de producto
      tipoIva: productos[i].producto.tipoIva,
      precioConIva:
        calcularPrecioProductoConIva(productos[i].producto) *
        productos[i].cantidad, //Tenemos en cuenta la cantidad de producto
    };
    resultadoLineasTicketProducto.push(lineaProducto);
  }
};

const calcularElIva = (producto: Producto): number => {
  let iva: number = 0;

  /* IMPLEMENTARLO CON SWITCH*/
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
      iva = 0;
      break;
  }

  return iva;

  /*if (producto.tipoIva === "general") {
    iva = producto.precio * IVAgeneral;
  } else {
    if (producto.tipoIva === "reducido") {
      iva = producto.precio * IVAreducido;
    } else {
      if (producto.tipoIva === "superreducidoA") {
        iva = producto.precio * IVAsuperreducidoA;
      } else {
        if (producto.tipoIva === "superreducidoB") {
          iva = producto.precio * IVAsuperreducidoB;
        } else {
          if (producto.tipoIva === "superreducidoC") {
            iva = 0;
          } else {
            if (producto.tipoIva === "sinIva") {
              iva = 0;
            }
          }
        }
      }
    }
  }

  return iva;*/
};

const calcularPrecioProductoConIva = (producto: Producto): number => {
  return producto.precio + calcularElIva(producto);
};

const calcularPrecioTotalSinIVA = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
): number => {
  return resultadoLineasTicketProducto.reduce(
    (acc, lineaProducto) => acc + lineaProducto.precioSinIva,
    0
  );
};

/*const calcularTotalDeIva = (
  tiquetFinaldeCompra: ResultadoLineaTicket[]
): number => {
  const totalIVA = tiquetFinaldeCompra.reduce(
    (acc, lineaProducto) =>
      acc + (lineaProducto.precioConIva - lineaProducto.precioSinIva),
    0
  );
  return Number(totalIVA.toFixed(2));
};*/

const calcularPrecioTotalConIva = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
) => {
  return resultadoLineasTicketProducto.reduce(
    (acc, lineaProducto) => acc + lineaProducto.precioConIva,
    0
  );
};

const calcularTotalIva = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
) => {
  return resultadoLineasTicketProducto.reduce(
    (acc, lineaProducto) =>
      acc + (lineaProducto.precioConIva - lineaProducto.precioSinIva),
    0
  );
};

let totalIvaGeneral = 0;
let totalIvaReducido = 0;
let totalIvaSuperReducidoA = 0;
let totalIvaSuperReducidoB = 0;
let totalIvaSuperReducidoC = 0;

const desgloseTipoIva = (productos: LineaTicket[]) => {
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

const importeTotal = (tiquetFinaldeCompra: ResultadoLineaTicket[]): number => {
  return tiquetFinaldeCompra.reduce(
    (acc, lineaProducto) => acc + lineaProducto.precioConIva,
    0
  );
};

calculaTicket(productos);
desgloseTipoIva(productos);

console.log(resultadoLineasTicketProducto);

console.log(
  "Precio Total sin IVA: ",
  calcularPrecioTotalSinIVA(resultadoLineasTicketProducto)
);
console.log(
  "Precio Total con IVA: ",
  calcularPrecioTotalConIva(resultadoLineasTicketProducto)
);

console.log(
  "Total IVA: ",
  calcularTotalIva(resultadoLineasTicketProducto).toFixed(2)
);

console.log("Total Iva General: ", totalIvaGeneral);

const totalesTicket = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
): ResultadoTotalTicket => {
  const resultados = {
    totalSinIva: calcularPrecioTotalSinIVA(resultadoLineasTicketProducto),
    totalConIva: calcularPrecioTotalConIva(resultadoLineasTicketProducto),
    totalIva: Number(
      calcularTotalIva(resultadoLineasTicketProducto).toFixed(2)
    ),
  };
  return resultados;
};

console.log("Totales Tickest: ", totalesTicket(resultadoLineasTicketProducto));

// Calcular los totales de los IVAS
let ivaGeneralTotal: TotalPorTipoIva = {
  tipoIva: "general",
  cuantia: 0,
};

const calcularTotalIvaGeneral = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
): TotalPorTipoIva => {
  for (let i = 0; i < resultadoLineasTicketProducto.length; i++) {
    if (resultadoLineasTicketProducto[i].tipoIva === "general") {
      ivaGeneralTotal.cuantia =
        ivaGeneralTotal.cuantia +
        resultadoLineasTicketProducto[i].precioConIva -
        resultadoLineasTicketProducto[i].precioSinIva;
    }
  }
  return ivaGeneralTotal;
};

console.log(
  "Total iva general: ",
  calcularTotalIvaGeneral(resultadoLineasTicketProducto)
);

let ivasuperreducidoCTotal: TotalPorTipoIva = {
  tipoIva: "superreducidoC",
  cuantia: 0,
};

const calcularTotalIvaSuperReducidoC = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
): TotalPorTipoIva => {
  for (let i = 0; i < resultadoLineasTicketProducto.length; i++) {
    if (resultadoLineasTicketProducto[i].tipoIva === "superreducidoC") {
      ivasuperreducidoCTotal.cuantia =
        ivasuperreducidoCTotal.cuantia +
        resultadoLineasTicketProducto[i].precioConIva -
        resultadoLineasTicketProducto[i].precioSinIva;
    }
  }
  return ivasuperreducidoCTotal;
};

console.log(
  "Total iva Super Reducido C: ",
  calcularTotalIvaSuperReducidoC(resultadoLineasTicketProducto)
);

let ivasuperreducidoATotal: TotalPorTipoIva = {
  tipoIva: "superreducidoA",
  cuantia: 0,
};

const calcularTotalIvaSuperReducidoA = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
): TotalPorTipoIva => {
  for (let i = 0; i < resultadoLineasTicketProducto.length; i++) {
    if (resultadoLineasTicketProducto[i].tipoIva === "superreducidoA") {
      ivasuperreducidoATotal.cuantia =
        ivasuperreducidoATotal.cuantia +
        resultadoLineasTicketProducto[i].precioConIva -
        resultadoLineasTicketProducto[i].precioSinIva;
    }
  }
  return ivasuperreducidoATotal;
};

console.log(
  "Total iva Super Reducido A: ",
  calcularTotalIvaSuperReducidoA(resultadoLineasTicketProducto)
);

//---------------------------------------------------------IMPRIMIR

const mostrarProductosEnPagina = (producto: string) => {
  const div = document.getElementById("lista-productos");
  const parrafo = document.createElement("p");

  parrafo.textContent = producto;
  if (div !== null && div !== undefined) {
    div.appendChild(parrafo);
  }
};

for (let i = 0; i < productos.length; i++) {
  mostrarProductosEnPagina(productos[i].producto.nombre);
}
