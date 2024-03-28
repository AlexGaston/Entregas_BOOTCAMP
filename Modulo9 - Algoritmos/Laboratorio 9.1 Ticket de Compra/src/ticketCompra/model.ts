//Cada producto va a tener esta interfaz:
export type TipoIva =
  | "general"
  | "reducido"
  | "superreducidoA"
  | "superreducidoB"
  | "superreducidoC"
  | "sinIva";

export const IVAgeneral = 0.21;
export const IVAreducido = 0.1;
export const IVAsuperreducidoA = 0.05;
export const IVAsuperreducidoB = 0.04;
export const IVAsuperreducidoC = 0.04;
export const sinIva = 0;

export interface Producto {
  nombre: string;
  precio: number;
  tipoIva: TipoIva;
}

//cada línea del ticket estará compuesta por un producto y una cantidad
export interface LineaTicket {
  producto: Producto;
  cantidad: number;
}

export interface ResultadoLineaTicket {
  nombre: string;
  cantidad: number;
  precioSinIva: number;
  tipoIva: TipoIva;
  precioConIva: number;
}

export interface ResultadoTotalTicket {
  totalSinIva: number;
  totalConIva: number;
  totalIva: number;
}

export interface TotalPorTipoIva {
  tipoIva: TipoIva;
  cuantia: number;
}

export let ivaGeneralTotal: TotalPorTipoIva = {
  tipoIva: "general",
  cuantia: 0,
};

export let ivasuperreducidoATotal: TotalPorTipoIva = {
  tipoIva: "superreducidoA",
  cuantia: 0,
};

export let ivasuperreducidoBTotal: TotalPorTipoIva = {
  tipoIva: "superreducidoB",
  cuantia: 0,
};

export let ivasuperreducidoCTotal: TotalPorTipoIva = {
  tipoIva: "superreducidoC",
  cuantia: 0,
};

export interface TicketFinal {
  lineas: ResultadoLineaTicket[];
  total: ResultadoTotalTicket;
  desgloseIva: TotalPorTipoIva[];
}
