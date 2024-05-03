import "./style.css";

let codigoHTML = "";
//let imagenesEncontradas = [];

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

  const coincidencia = codigoHTML.match(patron);
  console.log(coincidencia);

  if (coincidencia) {
    const { imagenUrl } = coincidencia.groups as any;
    let imagenesEncontradas = imagenUrl;
    console.log("Imagenes Encontradas: ", imagenesEncontradas);
    return imagenesEncontradas;
  } else {
    alert("No se han encontrado imagenes");
  }

  //imagenesEncontradas = coincidencia;
};

/*const pintarUrlsDeImagenesEncontradas = () => {
  const divImagenes = document.getElementById("imagenes-encontradas");
  if (
    divImagenes !== null &&
    divImagenes !== undefined &&
    divImagenes instanceof HTMLDivElement
  ) {
    divImagenes.innerHTML = imagenesEncontradas;
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
