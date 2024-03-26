import { Producto } from "./model";
import { calcularElIva, calcularPrecioProductoConIva } from "./ticket-helper";

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
