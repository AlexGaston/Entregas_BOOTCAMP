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
    temperatura: 39,
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

//Apartado 1:
//Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
};

console.log(
  "Pacientes asignados a pediatría: ",
  obtenPacientesAsignadosAPediatria(pacientes)
);

// Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
};

console.log(
  "Pacientes aignados a pediatría menores de 10 años: ",
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

//Apartado 2:
//Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  //let activarProctolo = false;

  return pacientes.some(
    (paciente) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );
};

console.log(
  "Activar protocolo de urgencia: ",
  activarProtocoloUrgencia(pacientes)
);

//Apartado 3: El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  pacientes.map((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      paciente.especialidad = "Medico de familia";
    }
  });
  return pacientes;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4: Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some((paciente) => paciente.especialidad === "Pediatra");
};

console.log(HayPacientesDePediatria(pacientes));

//Apartado 5: Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  return {
    medicoDeFamilia: numeroPacientePorEspecialidad(
      pacientes,
      "Medico de familia"
    ),
    pediatria: numeroPacientePorEspecialidad(pacientes, "Pediatra"),
    cardiologia: numeroPacientePorEspecialidad(pacientes, "Cardiólogo"),
  };
};

const numeroPacientePorEspecialidad = (
  pacientes: Pacientes[],
  especialidad: Especialidad
) => {
  const totalPacientePorEspecialiadad = pacientes.reduce(
    (acc: number, paciente: Pacientes) => {
      if (paciente.especialidad === especialidad) {
        return ++acc;
      } else {
        return acc;
      }
    },
    0
  );
  return totalPacientePorEspecialiadad;
};

console.log(
  "Número de Pacientes por especialidad: ",
  cuentaPacientesPorEspecialidad(pacientes)
);
