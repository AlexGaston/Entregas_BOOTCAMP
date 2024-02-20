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

//APARTADO 1:
//Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
const listaPacientesPediatria: Pacientes[] = [];
const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]) => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      //console.log(pacientes[i]);
      muestraPaciente(pacientes[i]);
      listaPacientesPediatria.push(pacientes[i]);
    }
  }
};

console.log("Lista pacientes Pediatría: ", listaPacientesPediatria);

//Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const listaPacientesPediatriaMenores10Años: Pacientes[] = [];
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
) => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      muestraPaciente(pacientes[i]);
      listaPacientesPediatriaMenores10Años.push(pacientes[i]);
    }
  }
};

console.log(
  "Lista pacientes pediatrñia menores de 10 años: ",
  listaPacientesPediatriaMenores10Años
);

document.addEventListener("DOMContentLoaded", () =>
  obtenPacientesAsignadosAPediatria(pacientes)
);

document.addEventListener("DOMContentLoaded", () =>
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

//APARTADO 2:
//Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
    }
  }
  return activarProctolo;
};

console.log("Protocolo de urgencia: ", activarProtocoloUrgencia(pacientes));

//APARTADO 3:
//El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const resultadosPacientes: Pacientes[] = [...pacientes];

  for (let i = 1; i < resultadosPacientes.length; i++) {
    if (resultadosPacientes[i].especialidad === "Pediatra") {
      resultadosPacientes[i].especialidad = "Medico de familia";
    }
  }
  return resultadosPacientes;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

//APARTADO 4:
//Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      return true;
    }
  }
  return false;
};

console.log(
  "Hay algún paciente de Pediatría: ",
  HayPacientesDePediatria(pacientes)
);

//APARTADO 5:
//Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

let pacientesPorEspecialidad: NumeroPacientesPorEspecialidad = {
  medicoDeFamilia: 0,
  pediatria: 0,
  cardiologia: 0,
};

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      pacientesPorEspecialidad.medicoDeFamilia =
        pacientesPorEspecialidad.medicoDeFamilia + 1;
    }
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesPorEspecialidad.pediatria =
        pacientesPorEspecialidad.pediatria + 1;
    }
    if (pacientes[i].especialidad === "Cardiólogo") {
      pacientesPorEspecialidad.cardiologia =
        pacientesPorEspecialidad.cardiologia + 1;
    }
  }
  return pacientesPorEspecialidad;
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
