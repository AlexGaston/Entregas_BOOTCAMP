import "./style.css";

let codigoHTML = "";

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
};

const extraerImagenesDelCodigo = (codigoHTML: string) => {
  const patron = /(http|https):\/\/.{1,}(webp|jpg|png|svg)"/gim;

  const imagenesEncontradas = codigoHTML.match(patron);
  console.log(imagenesEncontradas);

  if (imagenesEncontradas !== null) {
    const listado = document.querySelector("#imagenes-encontradas");
    for (let i = 0; i < imagenesEncontradas.length; i++) {
      const urlimagen = crearParrafo(imagenesEncontradas[i]);
      if (
        listado !== null &&
        listado !== undefined &&
        listado instanceof HTMLDivElement
      ) {
        listado.appendChild(urlimagen);
      }
    }
  }
};

const crearParrafo = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;

  return parrafo;
};

const botonExtraer = document.getElementById("extraer-imagenes");
if (
  botonExtraer !== null &&
  botonExtraer !== undefined &&
  botonExtraer instanceof HTMLButtonElement
) {
  botonExtraer.addEventListener("click", () => obtenerCodigoHTML());
}
