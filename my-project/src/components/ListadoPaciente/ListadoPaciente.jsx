import Paciente from "../Paciente/Paciente";
// import {useEffect} from 'react';

const ListadoPaciente = ({ pacientes, setPaciente, eliminarPaciente }) => {
  // console.log(pacientes)
  //Comprobar si el arreglo tiene algo
  //console.log(pacientes.length === 0)//True

  //Reto de mostrar cada vez que agregue un paciente
  // useEffect (()=>{
  //   if(pacientes.length > 0){
  //     console.log("Se agrego un nuevo Paciente")
  //   }
  // }, [pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Información de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando Pacientes {""}
            <span className="text-indigo-600 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPaciente;
