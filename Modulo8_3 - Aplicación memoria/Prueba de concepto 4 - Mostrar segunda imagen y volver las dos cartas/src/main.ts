import "./style.css";

/*interface InfoCarta {
    idFoto: number;
    imagen: string;
  }

 const barajaCartas: InfoCarta[] = [
    {
        idFoto:0,
        imagen: "./src/img/1.png",
    },
    {
        idFoto:1,
        imagen: "./src/img/2.png",
    }

 ]*/

const imagenCarta1 = document.getElementById("carta1");
const imagenCarta2 = document.getElementById("carta2");
const urlCarta1 = "./src/img/1.png";
const urlCarta2 = "./src/img/2.png";

const girarCarta = (carta: any, src: string) => {
  if (
    imagenCarta1 !== null &&
    imagenCarta1 !== undefined &&
    imagenCarta1 instanceof HTMLImageElement
  ) {
    carta.src = src;
  }
};

if (imagenCarta1 !== null && imagenCarta1 !== undefined) {
  imagenCarta1.addEventListener("click", () =>
    girarCarta(imagenCarta1, urlCarta1)
  );
}

if (imagenCarta2 !== null && imagenCarta2 !== undefined) {
  imagenCarta2.addEventListener("click", () =>
    girarCarta(imagenCarta2, urlCarta2)
  );
}
