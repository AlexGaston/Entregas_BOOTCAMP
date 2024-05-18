import "./style.css";
import { extraerImagenesDelCodigo } from "./validacion";

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

const botonExtraer = document.getElementById("extraer-imagenes");
if (
  botonExtraer !== null &&
  botonExtraer !== undefined &&
  botonExtraer instanceof HTMLButtonElement
) {
  botonExtraer.addEventListener("click", () => obtenerCodigoHTML());
}
