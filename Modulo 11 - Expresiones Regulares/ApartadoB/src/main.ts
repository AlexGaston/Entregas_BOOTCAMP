import "./style.css";

let codigoHTML = "";
let urlImagenes = [];

const obtenerCodigoHTML = (): void => {
  const textAreacodigoHTML = document.getElementById("codigo-HTML");
  if (
    textAreacodigoHTML !== null &&
    textAreacodigoHTML !== undefined &&
    textAreacodigoHTML instanceof HTMLTextAreaElement
  ) {
    codigoHTML = textAreacodigoHTML.value;
  }
  extraerImagenesDelCodigo(codigoHTML);
  //pintarUrlsDeImagenesEncontradas();
};

const extraerImagenesDelCodigo = (codigoHTML: string) => {
  const patron = /<img .*?src="(?<imagenUrl>.*?[a-z]{3,4})"/gim;

  const imagenesEncontradas = codigoHTML.match(patron);
  console.log(imagenesEncontradas);
  if (imagenesEncontradas !== null && imagenesEncontradas !== undefined) {
    const { imagenUrl } = imagenesEncontradas.groups as any;

    console.log("URLs: ", imagenUrl);
    urlImagenes = imagenUrl;
  }
};

/*const pintarUrlsDeImagenesEncontradas = () => {
  const divImagenes = document.getElementById("imagenes-encontradas");
  if (
    divImagenes !== null &&
    divImagenes !== undefined &&
    divImagenes instanceof HTMLDivElement
  ) {
    divImagenes.innerHTML = urlImagenes;
  }
};*/

const botonExtraer = document.getElementById("extraer-imagenes");
if (
  botonExtraer !== null &&
  botonExtraer !== undefined &&
  botonExtraer instanceof HTMLButtonElement
) {
  botonExtraer.addEventListener("click", () => obtenerCodigoHTML());
}
