import "./style.css";

/*
Aquí va la definición del algoritmo:

1. Partimos de que tenemos un número de 8 cifras y una letra.
2. Nos quedamos con la parte numérica.
3. La dividimos entre 23.
4. Nos quedamos con el resto de la división.
5. Buscamos en una tabla la letra que corresponde al resto de la división.
6. Comparamos si la letra de la tabla coincide con la que el usuario ha introducido.

Sobre la tabla de equivalencia de letras:
Resto Letra
0 T
1 R
2 W
3 A
4 G
5 M
6 Y
7 F
8 P
9 D
10 X
11 B
12 N
13 J
14 Z
15 S
16 Q
17 V
18 H
19 L
20 C
21 K
22 E

*/
//1. Partimos de que tenemos un número de 8 cifras y una letra.
let miDNI = "46742390L";
console.log("Mi DNI es: ", miDNI);
//2. Nos quedamos con la parte numérica.

let parteNumericaDNI = miDNI.substring(0, miDNI.length - 1);

console.log("Parte numérica DNI: ", parteNumericaDNI);

//3. La dividimos entre 23.
//4. Nos quedamos con el resto de la división.

let restoDivisionDNI = parteNumericaDNI % 23;

console.log("RestoDivisionDNI entre 23: ", restoDivisionDNI);

//5. Buscamos en una tabla la letra que corresponde al resto de la división.
// Hacemos un string con la columna de las letras y solo tendremos que relacionar el resto de la división con la posición del string
const __LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";
/*
const tablaEquivalencia = [
  {
    resto: 0,
    letra: "L",
  },
  {
    resto: 1,
    letra: "R",
  },
  {
    resto: 2,
    letra: "W",
  },
  {
    resto: 3,
    letra: "A",
  },
  {
    resto: 4,
    letra: "G",
  },
  {
    resto: 5,
    letra: "M",
  },
  {
    resto: 6,
    letra: "Y",
  },
  {
    resto: 7,
    letra: "F",
  },
  {
    resto: 8,
    letra: "P",
  },
  {
    resto: 9,
    letra: "D",
  },
  {
    resto: 10,
    letra: "X",
  },
  {
    resto: 11,
    letra: "B",
  },
  {
    resto: 12,
    letra: "N",
  },
  {
    resto: 13,
    letra: "J",
  },
  {
    resto: 14,
    letra: "Z",
  },
  {
    resto: 15,
    letra: "S",
  },
  {
    resto: 16,
    letra: "Q",
  },
  {
    resto: 17,
    letra: "V",
  },
  {
    resto: 18,
    letra: "H",
  },
  {
    resto: 19,
    letra: "L",
  },
  {
    resto: 20,
    letra: "C",
  },
  {
    resto: 21,
    letra: "K",
  },
  {
    resto: 22,
    letra: "E",
  },
];*/

//let letraDNI = tablaEquivalencia[restoDivisionDNI].letra;
let letraDNI = __LETRAS[restoDivisionDNI];

console.log("Que letra corresponde al resto de la division: ", letraDNI);

//6. Comparamos si la letra de la tabla coincide con la que el usuario ha introducido.

const verificarLetraDNI = (miDNI) => {
  let letraMiDNI = miDNI.slice(miDNI.length - 1);
  if (letraDNI === letraMiDNI) {
    return console.log("tu DNI es verdadero");
  }
  return console.log("Tu DNI es FALSO!!!");
};

console.log(verificarLetraDNI(miDNI));

/*----------------------------------------------------------------------------- */

export function comprobarNIF() {
  const miNIF = document.getElementById("NIF").value;
  const parteNumericaNIF = miNIF.substring(0, miNIF.length - 1);
  const letraDeMiNIF = miNIF.slice(miNIF.length - 1);
  const restoDivisionNIF = parteNumericaNIF % 23;
  //const letraEsperadaNIF = tablaEquivalencia[restoDivisionNIF].letra;
  const letraEsperadaNIF = __LETRAS[restoDivisionDNI];
  if (letraDeMiNIF === letraEsperadaNIF) {
    document.getElementById("resultado").innerHTML = "Tu NIF es verdadero!!!";
  } else {
    document.getElementById("resultado").innerHTML =
      "Tu NIF es SUPER FALSO, eres un impostor!!!";
  }
}

const botonDNI = document.getElementById("comprobar");
botonDNI.addEventListener("click", comprobarNIF);
