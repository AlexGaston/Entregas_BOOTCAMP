import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

const muestraPaciente = (paciente: Pacientes) => {
  const div = document.getElementById("listaPacientesPediatra");
  const idPaciente = document.createElement("p");
  const nombrePaciente = document.createElement("p");
  const apellidosPaciente = document.createElement("p");
  const especialidadPaciente = document.createElement("p");
  const edadPaciente = document.createElement("p");
  const separador = document.createElement("hr");

  idPaciente.textContent = `Id Paciente: ${paciente.id}`;
  nombrePaciente.textContent =
    "Nombre completo: " + paciente.nombre + " " + paciente.apellidos;
  //apellidosPaciente.textContent = paciente.apellidos;
  especialidadPaciente.textContent = "Especialidad: " + paciente.especialidad;
  edadPaciente.textContent = `Edad Paciente: ${paciente.edad}`;

  div?.appendChild(idPaciente);
  div?.appendChild(nombrePaciente);
  div?.appendChild(apellidosPaciente);
  div?.appendChild(especialidadPaciente);
  div?.appendChild(edadPaciente);
  div?.appendChild(separador);
};

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]) => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      console.log(pacientes[i]);
      muestraPaciente(pacientes[i]);
    }
  }
};

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
) => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      muestraPaciente(pacientes[i]);
    }
  }
};

document.addEventListener("DOMContentLoaded", () =>
  obtenPacientesAsignadosAPediatria(pacientes)
);

document.addEventListener("DOMContentLoaded", () =>
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);
