import "./style.css";

interface InfoCarta {
  idFoto: number;
  imagen: string;
}

const barajaCartas: InfoCarta[] = [
  {
    idFoto: 1,
    imagen: "./src/img/1.png",
  },
  {
    idFoto: 2,
    imagen: "./src/img/2.png",
  },
  {
    idFoto: 3,
    imagen: "./src/img/2.png",
  },
  {
    idFoto: 4,
    imagen: "./src/img/2.png",
  },
];

const imagenCarta1 = document.getElementById("carta1");
const imagenCarta2 = document.getElementById("carta2");
const urlCarta1 = "./src/img/1.png";
const urlCarta2 = "./src/img/2.png";

const girarCarta = (indice: number) => {
  const dataIndiceId = `[data-indice-id="carta${indice}"]`;
  const elementoImg = document.querySelector(`img${dataIndiceId}`);

  if (
    elementoImg !== null &&
    elementoImg !== undefined &&
    elementoImg instanceof HTMLImageElement
  ) {
    elementoImg.src = barajaCartas[indice].imagen;
  }
};

const dataIndiceId0 = `[data-indice-id="carta${0}"]`;
const elementoDiv0 = document.querySelector(`div${dataIndiceId0}`);

console.log(elementoDiv0);
if (elementoDiv0 !== null && elementoDiv0 !== undefined) {
  elementoDiv0.addEventListener("click", () => girarCarta(0));
}

const dataIndiceId1 = `[data-indice-id="carta${1}"]`;
const elementoDiv1 = document.querySelector(`div${dataIndiceId1}`);

if (elementoDiv1 !== null && elementoDiv1 !== undefined) {
  elementoDiv1.addEventListener("click", () => girarCarta(1));
}
