import {
  obtenerPersonajes,
  filtrarPersonajesPorNombre,
} from "./personajes-listado.api";
import { Personaje } from "./personajes-listado.model";

const crearElementoImagen = (
  dibujo: string,
  nombre: string
): HTMLImageElement => {
  const imagen = document.createElement("img");
  imagen.src = `http://localhost:3000/${dibujo}`;
  imagen.alt = nombre;

  return imagen;
};

const crearElementoParrafo = (
  texto: string,
  titulo: string
): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  const elementoStrong = document.createElement("strong");
  const elementoSpan = document.createElement("span");
  elementoStrong.textContent = titulo;
  elementoSpan.textContent = texto;
  parrafo.appendChild(elementoStrong);
  parrafo.appendChild(elementoSpan);

  return parrafo;
};

const crearContenidoPersonaje = (personaje: any): HTMLDivElement => {
  const elementoPersonaje = document.createElement("div");
  elementoPersonaje.classList.add("personaje-contenedor");

  const imagen = crearElementoImagen(personaje.imagen, personaje.nombre);
  elementoPersonaje.appendChild(imagen);

  const nombre = crearElementoParrafo(personaje.nombre, "Nombre: ");
  elementoPersonaje.appendChild(nombre);

  const especialidad = crearElementoParrafo(
    personaje.especialidad,
    "Expecialidad: "
  );
  elementoPersonaje.appendChild(especialidad);

  const habilidades = crearElementoParrafo(
    personaje.habilidades,
    "Habilidades: "
  );
  elementoPersonaje.appendChild(habilidades);

  return elementoPersonaje;
};

/*const pintarPersonajes = async () => {
  const personajes = await obtenerPersonajes();
  const listado = document.querySelector("#listado-personajes");

  if (listado && listado instanceof HTMLDivElement) {
    personajes.forEach((personaje) => {
      const contenedorPersonaje = crearContenidoPersonaje(personaje);
      listado.appendChild(contenedorPersonaje);
    });
  } else {
    throw new Error("No se ha encontrado ningún listado");
  }
};*/

document.addEventListener("DOMContentLoaded", async () => {
  const personajes = await obtenerPersonajes();
  const formulario = document.getElementById("formulario");
  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", filtrarPersonaje);
  } else {
    throw new Error("No se ha encontrado el formulario");
  }
  pintarListadoPersonajes(personajes);
});

const pintarListadoPersonajes = (listadopersonajes: Personaje[]) => {
  const listado = document.querySelector("#listado-personajes");

  if (listado && listado instanceof HTMLDivElement) {
    listado.innerHTML = "";
    listadopersonajes.forEach((personaje) => {
      const contenedorPersonaje = crearContenidoPersonaje(personaje);
      listado.appendChild(contenedorPersonaje);
    });
  } else {
    throw new Error("No se ha encontrado ningún listado");
  }
};

const filtrarPersonaje = async (evento: Event) => {
  evento.preventDefault();
  const nombreDelPersonaje = obtenerValorCampo();
  try {
    const personajesFiltrados = await filtrarPersonajesPorNombre(
      nombreDelPersonaje
    );
    pintarListadoPersonajes(personajesFiltrados);
  } catch (error) {
    alert("Error al filtrar");
  }
};

const obtenerValorCampo = (): string => {
  const elementoInput = document.getElementById("filtraPersonaje");
  if (elementoInput && elementoInput instanceof HTMLInputElement) {
    return elementoInput.value;
  } else {
    throw new Error("No se ha encontrado el input");
  }
};
