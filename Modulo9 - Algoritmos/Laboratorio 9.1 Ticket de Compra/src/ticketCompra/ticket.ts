import {
  LineaTicket,
  ResultadoLineaTicket,
  ResultadoTotalTicket,
} from "./model";
import {
  calcularPrecioProductoConIva,
  calcularPrecioTotalSinIVA,
  calcularPrecioTotalConIva,
  calcularTotalIva,
} from "./ticket-helper";

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

export const calculaTicket = (
  productos: LineaTicket[]
): ResultadoLineaTicket[] => {
  let resultadoLineasTicketProducto: ResultadoLineaTicket[] = [];

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
  return resultadoLineasTicketProducto;
};

export const totalesTicket = (
  resultadoLineasTicketProducto: ResultadoLineaTicket[]
): ResultadoTotalTicket => {
  const resultadosTotalesTicket = {
    totalSinIva: calcularPrecioTotalSinIVA(resultadoLineasTicketProducto),
    totalConIva: calcularPrecioTotalConIva(resultadoLineasTicketProducto),
    totalIva: Number(calcularTotalIva(resultadoLineasTicketProducto)),
  };
  return resultadosTotalesTicket;
};
