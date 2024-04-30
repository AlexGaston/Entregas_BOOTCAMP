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
};

const extraerImagenesDelCodigo = (codigoHTML: string) => {
  const patron = /<img.*?src="(?<imagen>(.*))"/gi;

  const coincidencia = patron.exec(codigoHTML);
  const imagenesEncontradas = [];

  if (coincidencia) {
    const { imagen } = coincidencia.groups as any;

    console.log("Imagenes: ", imagen);
    return true;
  } else {
    console.log("No se ha encontrado ninguna imagen en el código");
    return false;
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
