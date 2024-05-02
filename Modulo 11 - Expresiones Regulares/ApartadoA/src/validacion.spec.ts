import { validacionFormatoIBAN } from "./validacion";

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
      expect(validacionFormatoIBAN(iban)).toBe(expected);
    }
  );
});
