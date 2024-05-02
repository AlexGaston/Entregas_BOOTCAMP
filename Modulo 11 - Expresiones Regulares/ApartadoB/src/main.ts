import "./style.css";

console.log("Hello Typescript!");

let codigoHTML = "";

const obtenerCodigoHTML = (): void => {
  const textAreacodigoHTML = document.getElementById("codigo-HTML");
  if (
    textAreacodigoHTML !== null &&
    textAreacodigoHTML !== undefined &&
    textAreacodigoHTML instanceof HTMLTextAreaElement
  ) {
    codigoHTML = textAreacodigoHTML.value;
    //console.log(codigoHTML);
  }
  extraerImagenesDelCodigo(codigoHTML);
  //pintarUrlsDeImagenesEncontradas();
};

const extraerImagenesDelCodigo = (codigoHTML: string) => {
  const patron = /http:\/\/.*.[a-z]{3,4}/gim;

  let coincidencia = codigoHTML.match(patron) as string [];
  console.log(coincidencia);
  
};

const pintarUrlsDeImagenesEncontradas = () => {
  const divImagenes = document.getElementById("imagenes-encontradas");
  if (
    divImagenes !== null &&
    divImagenes !== undefined &&
    divImagenes instanceof HTMLDivElement
  ) {
    divImagenes.innerHTML = ;
  }
};

const botonExtraer = document.getElementById("extraer-imagenes");
if (
  botonExtraer !== null &&
  botonExtraer !== undefined &&
  botonExtraer instanceof HTMLButtonElement
) {
  botonExtraer.addEventListener("click", () => obtenerCodigoHTML());
}
