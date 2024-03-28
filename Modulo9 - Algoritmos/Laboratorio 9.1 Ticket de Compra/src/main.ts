import "./style.css";

import {
  resultadoLineasTicketProducto,
  calculaTicket,
  totalesTicket,
} from "./ticketCompra/ticket";

import {
  calcularTotalIvaGeneral,
  calcularTotalIvaSuperReducidoA,
  calcularTotalIvaSuperReducidoB,
  calcularTotalIvaSuperReducidoC,
  totalesIvaTicket,
} from "./ticketCompra/ticket-helper";

import { LineaTicket, TicketFinal } from "./ticketCompra/model";

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

calculaTicket(productos);
//desgloseTipoIva(productos);
calcularTotalIvaGeneral(resultadoLineasTicketProducto);
calcularTotalIvaSuperReducidoA(resultadoLineasTicketProducto);
calcularTotalIvaSuperReducidoB(resultadoLineasTicketProducto);
calcularTotalIvaSuperReducidoC(resultadoLineasTicketProducto);

console.log("1 - Estructira calculaTicket: ", resultadoLineasTicketProducto);

console.log(
  "2 - Resultados totales tiquet: ",
  totalesTicket(resultadoLineasTicketProducto)
);

/*console.log(
  "3 - Total iva General ",
  calcularTotalIvaGeneral(resultadoLineasTicketProducto)
);

console.log(
  "4 - Total iva Super Reducido A: ",
  calcularTotalIvaSuperReducidoA(resultadoLineasTicketProducto)
);

console.log(
  "5 - Total iva Super Reducido B: ",
  calcularTotalIvaSuperReducidoB(resultadoLineasTicketProducto)
);

console.log(
  "6 - Total iva Super Reducido C: ",
  calcularTotalIvaSuperReducidoC(resultadoLineasTicketProducto)
);*/

// Calcular el ticket final

const calcularTicketFinal = (): TicketFinal => {
  const ticketFinal = {
    lineas: resultadoLineasTicketProducto,
    total: totalesTicket(resultadoLineasTicketProducto),
    desgloseIva: totalesIvaTicket(resultadoLineasTicketProducto),
  };
  return ticketFinal;
};

console.log("Ticket Final: ", calcularTicketFinal());

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
