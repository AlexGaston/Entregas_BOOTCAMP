import { crearParrafo } from "./ui";

export const extraerImagenesDelCodigo = (codigoHTML: string) => {
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
