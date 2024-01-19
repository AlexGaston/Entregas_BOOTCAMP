import "./style.css";

/*
Módulo 3 - Variables - Laboratorio:

Grupos musicales
Queremos mostrar información acerca de grupos musicales.

Si estás trabajando con TypeScript habría que crear un interfaz para representar a un grupo musical.

La información de los grupos que queremos mostrar:

Nombre del grupo / cantante / compositor (string).
Año de fundación: cuando se formó el grupo (numero).
Si está en activo (booleano).
Género musical (string).
Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock
*/

//Creamos las diferentes variables de genero de música

const estiloTitulo = "color:green; font-size:18px; font-weight:bold;";
const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

// Creamos la interface banda para definir como va a ser el objeto

interface banda {
  nombre: string;
  año: number;
  enActivo: boolean;
  genero: string;
}

//Creamos los objetos con su interface con las diferentes bandas

const banda1: banda = {
  nombre: "The Beatles",
  año: 1960,
  enActivo: true,
  genero: popRock,
};
console.log(`%c ${banda1.nombre}`, estiloTitulo);
console.log(
  ` ${banda1.año} / En activo: ${banda1.enActivo} / ${banda1.genero}`
);

const banda2: banda = {
  nombre: "Queen",
  año: 1970,
  enActivo: false,
  genero: rock,
};

console.log(`%c ${banda2.nombre}`, estiloTitulo);
console.log(
  ` ${banda2.año} / En activo: ${banda2.enActivo} / ${banda2.genero}`
);

const banda3: banda = {
  nombre: "AC DC",
  año: 1973,
  enActivo: true,
  genero: hardRock,
};

console.log(`%c ${banda3.nombre}`, estiloTitulo);
console.log(
  ` ${banda3.año} / En activo: ${banda3.enActivo} / ${banda3.genero}`
);

const banda4: banda = {
  nombre: "Ludwig van Beethoven",
  año: 1770,
  enActivo: false,
  genero: clasica,
};

console.log(`%c ${banda4.nombre}`, estiloTitulo);
console.log(
  ` ${banda4.año} / En activo: ${banda4.enActivo} / ${banda4.genero}`
);

const banda5: banda = {
  nombre: "The Rolling Stones",
  año: 1962,
  enActivo: true,
  genero: rock,
};

console.log(`%c ${banda5.nombre}`, estiloTitulo);
console.log(
  ` ${banda5.año} / En activo: ${banda5.enActivo} / ${banda5.genero}`
);
