import { EstadoPartida, partida } from "./model";
import {
  obtenerNumeroCarta,
  obtenerNumeroAleatorio,
  obtenerPuntosDeLaCarta,
  obtenerEstadoPartida,
} from "./motor";
import { vi } from "vitest";

describe("obtenerNumeroAleatorio", () => {
  it("MathRandom lo forzamos a que nos devuelva 10, y debería de devolvernos 10", () => {
    //GIVEN o Arrange
    const numeroEsperado: number = 10;
    const spyOnMathRandom = vi
      .spyOn(global.Math, "random")
      .mockReturnValue(0.99);
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

describe("obtenerPuntosDeLaCarta", () => {
  it("Cuando la carta es una sota de copas el valor de la carta tiene que ser 0.5", () => {
    //GIVEN o Arrange
    const cartaSotaDeCopas: number = 10;

    //WHEN o Act
    const resultado = obtenerPuntosDeLaCarta(cartaSotaDeCopas);

    //THEN o Assert
    expect(resultado).toBe(0.5);
  });

  it("Cuando la carta es igual o menor de 7 el valor que nos tiene que devolver es el mismo valor que la carta recibida", () => {
    //GIVEN o Arrange
    const cartaSieteDeCopas: number = 7;

    //WHEN o Act
    const resultado = obtenerPuntosDeLaCarta(cartaSieteDeCopas);

    //THEN o Assert
    expect(resultado).toBe(7);
  });
});

describe("obtenerEstadoPartida", () => {
  it("Debería de devolver POR_DEBAJO_MAXIMO, cuando puntacionJugador es MENOR a 7.5", () => {
    //Arrange
    const estadoESperado: EstadoPartida = "POR_DEBAJO_MAXIMO";
    vi.spyOn(partida, "puntacionJugador", "get").mockReturnValue(4);

    //Act
    const resultado = obtenerEstadoPartida();

    //Assert
    expect(resultado).toBe(estadoESperado);
  });

  it("Debería de devolver JUSTO_MAXIMA, cuando puntacionJugador es IGUAL a 7.5", () => {
    //Arrange
    const estadoESperado: EstadoPartida = "JUSTO_MAXIMA";
    vi.spyOn(partida, "puntacionJugador", "get").mockReturnValue(7.5);

    //Act
    const resultado = obtenerEstadoPartida();

    //Assert
    expect(resultado).toBe(estadoESperado);
  });

  it("Debería de devolver TE_HAS_PASADO, cuando puntacionJugador es MAYOR a 7.5", () => {
    //Arrange
    const estadoESperado: EstadoPartida = "TE_HAS_PASADO";
    vi.spyOn(partida, "puntacionJugador", "get").mockReturnValue(10);

    //Act
    const resultado = obtenerEstadoPartida();

    //Assert
    expect(resultado).toBe(estadoESperado);
  });
});
