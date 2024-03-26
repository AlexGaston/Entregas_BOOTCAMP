import { calcularCambio } from "./cambio";
import { Cambio } from "./model";

describe("calcularCambio", () => {
  it("Si los parámetros de entrada son undefined nos devería devolver un trhow error", () => {
    //Arrange or GIVEN
    const compra: any = undefined;
    const pago: any = undefined;

    //Act or WHEN
    const result = () => calcularCambio(compra, pago);
    //Assert or THEN
    expect(result).toThrow("Los parametros introducidos no son correctos");
  });

  it("Si los parámetros de entrada son null nos devería devolver un trhow error", () => {
    //Arrange or GIVEN
    const compra: any = null;
    const pago: any = null;

    //Act or WHEN
    const result = () => calcularCambio(compra, pago);
    //Assert or THEN
    expect(result).toThrow("Los parametros introducidos no son correctos");
  });

  it("Si los parámetros de entrada son null nos devería devolver un trhow error", () => {
    //Arrange or GIVEN
    const compra: any = null;
    const pago: any = null;

    //Act or WHEN
    const result = () => calcularCambio(compra, pago);
    //Assert or THEN
    expect(result).toThrow("Los parametros introducidos no son correctos");
  });

  it("Si la compra de 2.5€, el usuario paga 50€ ---> devolución [2 de 20, 1 de 5, 2 de 1, 1 de 0.5]", () => {
    //Arrange or GIVEN
    const compra = 2.5;
    const pago = 50;

    //Act or WHEN
    const result = calcularCambio(compra, pago);

    //Assert or THEN
    const objetoEsperado: Cambio[] = [
      { moneda: 20, cuantos: 2 },
      { moneda: 5, cuantos: 1 },
      { moneda: 2, cuantos: 1 },
      { moneda: 0.5, cuantos: 1 },
    ];
    expect(result).toEqual(objetoEsperado);
  });

  it("Si la compra es de 4.82, el usuario paga 5.32 ---> la devolución es [1 de 0.5]", () => {
    //Arrange or GIVEN
    const compra = 4.82;
    const pago = 5.32;

    //Act or WHEN
    const result = calcularCambio(compra, pago);

    //Assert or THEN
    const objetoEsperado: Cambio[] = [{ moneda: 0.5, cuantos: 1 }];
    expect(result).toEqual(objetoEsperado);
  });

  it("Si la compra es de 2 €, el usuario paga 6 € ---> la devolución es de [2 de 2]", () => {
    //Arrange or GIVEN
    const compra = 2;
    const pago = 6;

    //Act or WHEN
    const result = calcularCambio(compra, pago);

    //Assert or THEN
    const objetoEsperado = [{ moneda: 2, cuantos: 2 }];
    expect(result).toEqual(objetoEsperado);
  });
});
