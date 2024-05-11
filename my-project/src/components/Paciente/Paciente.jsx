import { useState } from "react";
import "./Paciente.css";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  // console.log(paciente)

  const {
    nombre,
    propietario,
    celular,
    direccion,
    email,
    fecha,
    costo,
    sintomas,
    id,
  } = paciente;

  // const handleEliminar = () => {
  //   const respuesta = confirm("Deseas eliminar este paciente?");

  //   if (respuesta) {
  //     eliminarPaciente(id);
  //   }
  // };
  const [modalAbierto, setModalAbierto] = useState(false);
  const [idEliminar, setIdEliminar] = useState(null);

  const handleEliminarClick = (id) => {
    setIdEliminar(id);
    setModalAbierto(true);
  };

  const handleEliminarConfirmado = () => {
    eliminarPaciente(idEliminar);
    setModalAbierto(false);
  };

  const handleCancelarEliminar = () => {
    setIdEliminar(null);
    setModalAbierto(false);
  };
  return (
    <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl mb-5 font-second">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Número de Contacto: {""}
        <span className="font-normal normal-case">{celular}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Dirección: {""}
        <span className="font-normal normal-case">{direccion}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Atención: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Costo de Atención: {""}
        <span className="font-normal normal-case">{costo}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Descripcion de Atención: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between items-center mt-10 gap-1">
        <button
          type="button"
          className="py-2 px-8 bg-cyan-500 text-black hover:bg-cyan-700 hover:text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-8 bg-red-600 hover:bg-red-700 hover:text-black text-white font-bold uppercase rounded-lg"
          onClick={() => handleEliminarClick(paciente.id)}
        >
          Eliminar
        </button>
      </div>
      {/* Modal de confirmación */}
      {modalAbierto && (
        <div className="modal">
          <div className="modal-contenido bg-white rounded-lg overflow-hidden shadow-xl w-120 ">
            <div className="modal-header bg-gray-200 py-2 px-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Eliminar Paciente
              </h2>
            </div>
            <div className="modal-body p-4">
              <p className="text-gray-700">
                ¿Estás seguro de que deseas eliminar este paciente?
              </p>
            </div>
            <div className="modal-footer bg-gray-100 py-3 px-4 flex justify-end">
              <button
                onClick={handleEliminarConfirmado}
                className="text-white bg-red-600 hover:bg-red-700 rounded-lg px-4 py-2 mr-2"
              >
                Sí
              </button>
              <button
                onClick={handleCancelarEliminar}
                className="text-gray-600 bg-gray-300 hover:bg-gray-400 rounded-lg px-4 py-2"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Paciente;
