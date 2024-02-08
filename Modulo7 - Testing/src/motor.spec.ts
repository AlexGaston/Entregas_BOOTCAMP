import { obtenerNumeroCarta, obtenerNumeroAleatorio } from "./motor";
import { vi } from "vitest";

describe("obtenerNumeroAleatorio", () => {
  it("MathRandom lo forzamos a que nos devuelva 10, y debería de devolvernos 10", () => {
    //GIVEN o Arrange
    const numeroEsperado: number = 10;
    const spyOnMathRandom = vi
      .spyOn(global.Math, "random")
      .mockReturnValue(0.999);
    //WHEN o Act
    const resultado = obtenerNumeroAleatorio();
    //THEN o Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("MathRandom lo forzamos a que nos devuelva 1, y debería de devolvernos 1", () => {
    //GIVEN o Arrange
    const numeroEsperado: number = 1;
    const spyOnMathRandom = vi
      .spyOn(global.Math, "random")
      .mockReturnValue(0.01);
    //WHEN o Act
    const resultado = obtenerNumeroAleatorio();
    //THEN o Assert
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("obtenerNumeroCarta", () => {
  it("Cuando pido una carta y esta carta es mayor de 7 tiene que sumarle 2", () => {
    //GIVEN o Arrange
    const numeroAleatorio: number = 8;
    //WHEN o Act
    const resultado = obtenerNumeroCarta(numeroAleatorio);
    //THEN o Assert
    expect(resultado).toBe(10);
  });

  it("Cuando pido una carta y esta carta es igual a 7 no ha de sumarle dos", () => {
    //GIVEN o Arrange
    const numeroAleatorio: number = 7;
    //WHEN o Act
    const resultado = obtenerNumeroCarta(numeroAleatorio);
    //THEN o Assert
    expect(resultado).toBe(7);
  });
});
