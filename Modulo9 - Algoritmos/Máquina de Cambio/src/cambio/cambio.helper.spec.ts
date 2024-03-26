import { calcularEntrada } from "./cambio.helper";

describe("calcularEntrada", () => {
  it("Si el parametro de entrada es undefined devería devolver un throw error", () => {
    //Arrange or GIVEN
    const cantidad: any = undefined;
    const billeteMoneda: any = undefined;
    //Act or WHEN
    const result = () => calcularEntrada(cantidad, billeteMoneda);
    //Assert or THEN
    expect(result).toThrow("Los parámetros introducidos no son correctos");
  });

  it("Si el parametro de entrada es null devería devolver un throw error", () => {
    //Arrange or GIVEN
    const cantidad: any = null;
    const billeteMoneda: any = null;
    //Act or WHEN
    const result = () => calcularEntrada(cantidad, billeteMoneda);
    //Assert or THEN
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("Si la cantidad de entrada es 0 deberçia devolver un throw error", () => {
    //Arrange or GIVEN
    const cantidad = 0;
    const billeteMoneda = 0;
    //Act or WHEN
    const result = () => calcularEntrada(cantidad, billeteMoneda);
    //Assert or THEN
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("Si hemos de devolver 2.5, billetes 50 ---> {cuantos: 0, restoCantidad: 2.5}", () => {
    //Arrange or GIVEN
    const cantidad = 2.5;
    const billeteMoneda = 50; //Cuantos billetes de 50 Billetes de 50
    //Act or WHEN
    const result = calcularEntrada(cantidad, billeteMoneda);
    //Assert or THEN
    const expected = { cuantos: 0, restoCantidad: 2.5 };
    expect(result).toEqual(expected);
  });

  it("Si hemos de devolver 7.25, billetes 5 ---> {cuantos: 1, restoCantidad: 2.25}", () => {
    //Arrange or GIVEN
    const cantidad = 7.25;
    const billeteMoneda = 5; //Billetes de 5
    //Act or WHEN
    const result = calcularEntrada(cantidad, billeteMoneda);
    //Assert or THEN
    const expected = { cuantos: 1, restoCantidad: 2.25 };
    expect(result).toEqual(expected);
  });

  it("Si hemos de devolver 2.5, billetes 2 ---> {cuantos: 1, restoCantidad: 0.5}", () => {
    //Arrange or GIVEN
    const cantidad = 2.5;
    const billeteMoneda = 2; //Monedas de 2
    //Act or WHEN
    const result = calcularEntrada(cantidad, billeteMoneda);
    //Assert or THEN
    const expected = { cuantos: 1, restoCantidad: 0.5 };
    expect(result).toEqual(expected);
  });
});
