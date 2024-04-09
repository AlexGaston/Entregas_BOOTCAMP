import {
  //tieneCaracteresEspeciales,
  //tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  //tieneNombreUsuario,
  //tieneNumeros,
} from "./clave";
//import { ValidacionClave } from "./model";

describe("tieneMayusculasYMinusculas", () => {
  it("Si tenemos una clave todo en minúsculas debería de devolver --> {esValida: false, error: 'La clave debe de tener mayúsculas y minúsculas'}", () => {
    //Arrange or GIVEN
    const clave = "palabraclave";
    //Act or WHEN
    const result = tieneMayusculasYMinusculas(clave);
    //Assert or THEN
    const expected = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
    expect(result).toEqual(expected);
  });

  it("Si tenemos una clave todo en mayúsculas debería de devolver --> {esValida: false, error: 'La clave debe de tener mayúsculas y minúsculas'}", () => {
    //Arrange or GIVEN
    const clave = "PALABRACLAVE";
    //Act or WHEN
    const result = tieneMayusculasYMinusculas(clave);
    //Assert or THEN
    const expected = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
    expect(result).toEqual(expected);
  });

  it("Si tenemos una clave con minúsculas y mayúsculas debería de devolver --> {esValida: true}", () => {
    //Arrange or GIVEN
    const clave = "PalabraClave";
    //Act or WHEN
    const result = tieneMayusculasYMinusculas(clave);
    //Assert or THEN
    const expected = { esValida: true };

    expect(result).toEqual(expected);
  });
});

/*
describe("tieneNumeros", () => {
  //REPASAR EL TEST
  it("Si tenemos una clave con un número debería de devolver --> {esValida: true}", () => {
    //Arrange or GIVEN
    const clave = "palabraclave1";
    //Act or WHEN
    const result = tieneNumeros(clave);
    //Assert or THEN
    const expected = { esValida: true };

    expect(result).toEqual(expected);
  });
  it("Si tenemos una clave sin un número debería de devolver --> {esValida: false, error: 'La clave debe de tener números'}", () => {
    //Arrange or GIVEN
    const clave = "palabraclave";
    //Act or WHEN
    const result = tieneNumeros(clave);
    //Assert or THEN
    const expected = {
      esValida: false,
      error: "La clave debe de tener números",
    };

    expect(result).toEqual(expected);
  });
});*/
/*
describe("tieneCaracteresEspeciales", () => {
   
  it("Si tenemos una clave con un carácter especial devería de devolver --> {esValida: true}", () => {
    //Arrange or GIVEN
    const clave = "palabraClave!";
    //Act or WHEN
    const result = tieneCaracteresEspeciales(clave);
    //Assert or THEN
    const expected = { esValida: true };

    expect(result).toEqual(expected);
  });

  it("Si tenemos una clave sin ningún carácter especial devería de devolver --> {esValida: false, error: 'La clave debe de tener caracteres especiales'}", () => {
    //Arrange or GIVEN
    const clave = "palabraClave";
    //Act or WHEN
    const result = tieneCaracteresEspeciales(clave);
    //Assert or THEN
    const expected = {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };

    expect(result).toEqual(expected);
  });
});*/
/*
describe("tieneLongitudMinima", () => {
  it("Si tenemos una clave con una longitud Mínima de 8 carácteres devería devolver --> {esValida: true}", () => {
    //Arrange or GIVEN
    const clave = "palabraclave";
    //Act or WHEN
    const result = tieneLongitudMinima(clave);
    //Assert or THEN
    const expected = { esValida: true };

    expect(result).toEqual(expected);
  });

  it("Si tenemos una clave con una longitud Mínima de menos de 8 carácteres devería devolver --> {esValida: false, error: 'La clave debe de tener una longitud mínima de 8 caracteres'}", () => {
    //Arrange or GIVEN
    const clave = "clave";
    //Act or WHEN
    const result = tieneLongitudMinima(clave);
    //Assert or THEN
    const expected = {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };

    expect(result).toEqual(expected);
  });
});
*/
/*
describe("tieneNombreUsuario", () => {
  it("Si tenemos una clave que contiene el nombre de usuario debería devolver --> {esValida: false, error: 'La clave no debe tener el nombre del usuario'}", () => {
    //Arrange or GIVEN
    const nombreUsuario = "palabra";
    const clave = "palabraclave";
    //Act or WHEN
    const result = tieneNombreUsuario(nombreUsuario, clave);
    //Assert or THEN
    const expected = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };

    expect(result).toEqual(expected);
  });

  it("Si tenemos una clave que  no contiene el nombre de usuario debería devolver --> {esValida: true}", () => {
    //Arrange or GIVEN
    const nombreUsuario = "palabra";
    const clave = "palabraclave";
    //Act or WHEN
    const result = tieneNombreUsuario(nombreUsuario, clave);
    //Assert or THEN
    const expected = { esValida: true };

    expect(result).toEqual(expected);
  });
});*/
