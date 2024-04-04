import "./style.css";

import { calculaTicket, totalesTicket } from "./ticketCompra/ticket";

import { totalesIvaTicket } from "./ticketCompra/ticket-helper";

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
