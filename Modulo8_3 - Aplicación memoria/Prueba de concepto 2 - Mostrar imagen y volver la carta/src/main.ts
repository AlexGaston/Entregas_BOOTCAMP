import "./style.css";
const imagenCarta = document.getElementById("imagenCarta");
const urlCarta1 = "./src/img/1.png";

const girarCarta = (src: string) => {
  if (
    imagenCarta !== null &&
    imagenCarta !== undefined &&
    imagenCarta instanceof HTMLImageElement
  ) {
    imagenCarta.src = src;
  }
};

if (imagenCarta !== null && imagenCarta !== undefined) {
  imagenCarta.addEventListener("click", () => girarCarta(urlCarta1));
}
