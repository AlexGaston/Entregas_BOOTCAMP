import "./style.css";

import { calculaTicket, totalesTicket } from "./ticketCompra/ticket";

import { totalesIva, totalesIvaTicket } from "./ticketCompra/ticket-helper";

import {
  LineaTicket,
  TicketFinal,
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
  {
    producto: {
      nombre: "arroz",
      precio: 3,
      tipoIva: "superreducidoB",
    },
    cantidad: 1,
  },
];

const calcularTicketFinal = (productos: LineaTicket[]): TicketFinal => {
  const resultadoLineasTicketProducto = calculaTicket(productos);

  const ticketFinal = {
    lineas: resultadoLineasTicketProducto,
    total: totalesTicket(resultadoLineasTicketProducto),
    desgloseIva: totalesIvaTicket(resultadoLineasTicketProducto),
  };
  return ticketFinal;
};

console.log("Ticket Final: ", calcularTicketFinal(productos));

//---------------------------------------------------------IMPRIMIR
/*
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
}*/

const totalesFinalesIva = (totalesIva: TotalPorTipoIva[]) => {
  const ivasFinalesUnificados: TotalPorTipoIva[] = [];

  const ivaGenealFinal = totalesIva.filter((iva) => iva.tipoIva === "general");
  const ivaSuperReducidoAFInal = totalesIva.filter(
    (iva) => iva.tipoIva === "superreducidoA"
  );
  const ivaSuperReducidoBFinal = totalesIva.filter(
    (iva) => iva.tipoIva === "superreducidoB"
  );
  const ivaSuperReducidoCFinal = totalesIva.filter(
    (iva) => iva.tipoIva === "superreducidoC"
  );
  //console.log(ivaGenealFinal);

  const ivaGeneralFinalUnificado: TotalPorTipoIva = {
    tipoIva: "general",
    cuantia: ivaGenealFinal.reduce(
      (acc, ivaGeneral) => acc + ivaGeneral.cuantia,
      0
    ),
  };
  if (ivaGeneralFinalUnificado.cuantia > 0) {
    ivasFinalesUnificados.push(ivaGeneralFinalUnificado);
  }

  const ivaSUperReducidoAFinalUnificado: TotalPorTipoIva = {
    tipoIva: "superreducidoA",
    cuantia: ivaSuperReducidoAFInal.reduce(
      (acc, ivaSuperReducidoA) => acc + ivaSuperReducidoA.cuantia,
      0
    ),
  };
  if (ivaSUperReducidoAFinalUnificado.cuantia > 0) {
    ivasFinalesUnificados.push(ivaSUperReducidoAFinalUnificado);
  }

  const ivaSuperReducidoBFinalUnificado: TotalPorTipoIva = {
    tipoIva: "superreducidoB",
    cuantia: ivaSuperReducidoBFinal.reduce(
      (acc, ivaSuperReducidoB) => acc + ivaSuperReducidoB.cuantia,
      0
    ),
  };
  if (ivaSuperReducidoBFinalUnificado.cuantia > 0) {
    ivasFinalesUnificados.push(ivaSuperReducidoBFinalUnificado);
  }

  const ivaSuperReducidoCFinalUnificado: TotalPorTipoIva = {
    tipoIva: "superreducidoC",
    cuantia: ivaSuperReducidoCFinal.reduce(
      (acc, ivaSuperReducidoC) => acc + ivaSuperReducidoC.cuantia,
      0
    ),
  };
  if (ivaSuperReducidoCFinalUnificado.cuantia > 0) {
    ivasFinalesUnificados.push(ivaSuperReducidoCFinalUnificado);
  }
  return ivasFinalesUnificados;
};

console.log("Totales finales de IVA: ", totalesFinalesIva(totalesIva));
