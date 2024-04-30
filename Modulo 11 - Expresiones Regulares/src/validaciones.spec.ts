import { validacionIBAN } from "./validaciones";

describe("validacionIBAN", () => {
  test.each([
    ["ES21 1465 0100 72 2030876293", true],
    ["ES2114650100722030876293", true],
    ["ES21-1465-0100-72-2030876293", true],
    ["ES6621000418401234567891", true],
    ["es6621000418401234567891", true],
    ["6621000418401234567891", false],
    ["ES 21-1465-0100-72-2030876293", true],
  ])(
    "debería devolver para el IBAN %p el valor %p",
    (iban: string, expected: boolean) => {
      expect(validacionIBAN(iban)).toBe(expected);
    }
  );
});

/*
Formato IBAN:

WW: código de país (2 letras)
00: dígito de control (2 dígitos)
0000: código de banco (4 dígitos)
0000: código de sucursal (4 dígitos)
00: dígito de control (2 dígitos)
0000000000: número de cuenta (10 dígitos)

WW 0000 0000 00 0000000000:

ES21 1465 0100 72 2030876293
ES2114650100722030876293
ES21-1465-0100-72-2030876293
ES6621000418401234567891

*/
