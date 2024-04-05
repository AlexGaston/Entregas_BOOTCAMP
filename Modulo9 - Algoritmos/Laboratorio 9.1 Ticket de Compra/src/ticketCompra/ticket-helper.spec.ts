import { Producto, ResultadoLineaTicket } from "./model";
import {
  calcularElIva,
  calcularPrecioProductoConIva,
  calcularPrecioTotalConIva,
  calcularPrecioTotalSinIVA,
  calcularTotalIva,
  totalesIvaTicket,
} from "./ticket-helper";

describe("calcularElIva", () => {
  it("Producto con precio de 2 y un IVA general ---> Debería devolver un iva de 0.42", () => {
    //Arrange or GIVEN
    const producto: Producto = {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    };
    //Act ore WHEN
    const result = calcularElIva(producto);

    //Assert or THEN
    expect(result).toBe(0.42);
  });

  it("Producto con precio de 5 y un IVA superreducidoA ---> Debería devolver un iva de 0.25", () => {
    //Arrange or GIVEN
    const producto: Producto = {
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superreducidoA",
    };
    //Act ore WHEN
    const result = calcularElIva(producto);

    //Assert or THEN
    expect(result).toBe(0.25);
  });

  it("Producto con precio de 1 y un IVA superreducidoA ---> Debería devolver un iva de 0", () => {
    //Arrange or GIVEN
    const producto: Producto = {
      nombre: "Leche",
      precio: 1,
      tipoIva: "superreducidoC",
    };
    //Act ore WHEN
    const result = calcularElIva(producto);

    //Assert or THEN
    expect(result).toBe(0);
  });
});

describe("calcularPrecioProductoConIva", () => {
  it("Si tenemos un producto con un precio de 2 y un IVA general ---> Nos devería devilver un precio de 2.42", () => {
    //Arrange or GIVEN
    const producto: Producto = {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    };
    //Act or WHEN
    const result = calcularPrecioProductoConIva(producto);

    //Assert or THEN
    expect(result).toBe(2.42);
  });

  it("Si tenemos un producto con un precio de 1 y un IVA superreducidoC ---> Nos devería devilver un precio de 1", () => {
    //Arrange or GIVEN
    const producto: Producto = {
      nombre: "Leche",
      precio: 1,
      tipoIva: "superreducidoC",
    };
    //Act or WHEN
    const result = calcularPrecioProductoConIva(producto);

    //Assert or THEN
    expect(result).toBe(1);
  });

  it("Si tenemos un producto con un precio de 5 y un IVA superreducidoA ---> Nos devería devilver un precio de 5.25", () => {
    //Arrange or GIVEN
    const producto: Producto = {
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superreducidoA",
    };
    //Act or WHEN
    const result = calcularPrecioProductoConIva(producto);

    //Assert or THEN
    expect(result).toBe(5.25);
  });
});

describe("calcularPrecioTotalSinIVA", () => {
  it("Teniendo una linea de productos donde los precios sin Iva son: 4, 60 y 6 --> el Precio total sin Iva debería ser 70", () => {
    //Arrange or GIVEN
    const lineasProducto: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precioSinIva: 4,
        tipoIva: "general",
        precioConIva: 4.84,
      },
      {
        nombre: "Perfume",
        cantidad: 3,
        precioSinIva: 60,
        tipoIva: "general",
        precioConIva: 72.6,
      },
      {
        nombre: "Leche",
        cantidad: 6,
        precioSinIva: 6,
        tipoIva: "superreducidoC",
        precioConIva: 6,
      },
    ];
    //Act or WHEN
    const result = calcularPrecioTotalSinIVA(lineasProducto);
    //Assert or THEN
    expect(result).toEqual(70);
  });
});

describe("calcularPrecioTotalConIva", () => {
  it("Teniendo una linea de productos donde los precios con Iva son: 4.84, 72.6 y 6 --> el Precio total con Iva debería ser 83.44", () => {
    //Arrange or GIVEN
    const lineasProducto: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precioSinIva: 4,
        tipoIva: "general",
        precioConIva: 4.84,
      },
      {
        nombre: "Perfume",
        cantidad: 3,
        precioSinIva: 60,
        tipoIva: "general",
        precioConIva: 72.6,
      },
      {
        nombre: "Leche",
        cantidad: 6,
        precioSinIva: 6,
        tipoIva: "superreducidoC",
        precioConIva: 6,
      },
    ];
    //Act or WHEN
    const result = calcularPrecioTotalConIva(lineasProducto);
    //Assert or THEN
    expect(result).toEqual(83.44);
  });
});

describe("calcularTotalIva", () => {
  it("Teniendo un linea de producto donde el PrecioTotalConIva: 83.44 y el PrecioTotalSinIva: 70 --> El Total de iva debería ser 13.44", () => {
    //Arrange or GIVEN
    const lineasProducto: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precioSinIva: 4,
        tipoIva: "general",
        precioConIva: 4.84,
      },
      {
        nombre: "Perfume",
        cantidad: 3,
        precioSinIva: 60,
        tipoIva: "general",
        precioConIva: 72.6,
      },
      {
        nombre: "Leche",
        cantidad: 6,
        precioSinIva: 6,
        tipoIva: "superreducidoC",
        precioConIva: 6,
      },
    ];
    //Act or WHEN
    const result = calcularTotalIva(lineasProducto);
    //Arrange or THEN
    expect(result).toEqual(13.44);
  });
});

describe("totalesIvaTicket", () => {
  it("Teniendo una linea de producto con un IVA general 13,44 y un IVA Super Reducido A de 0.25 --> Deberia devolver [{tipoIva: 'general', cuantia: 13.44}, {tipoIva: 'superreducidoA', cuantia: 0.25}]", () => {
    //Arrange or GIVEN
    const lineasProducto: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precioSinIva: 4,
        tipoIva: "general",
        precioConIva: 4.84,
      },
      {
        nombre: "Perfume",
        cantidad: 3,
        precioSinIva: 60,
        tipoIva: "general",
        precioConIva: 72.6,
      },
      {
        nombre: "Lasaña",
        cantidad: 1,
        precioSinIva: 5,
        tipoIva: "superreducidoA",
        precioConIva: 5.25,
      },
    ];
    //Act or WHEN
    const result = totalesIvaTicket(lineasProducto);
    //Assert or THEN
    const expected = [
      { tipoIva: "general", cuantia: 13.44 },
      { tipoIva: "superreducidoA", cuantia: 0.25 },
    ];
    expect(result).toEqual(expected);
  });
});
