// Hooks
import { useState, useEffect } from "react";
import Error from "../Error/Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  //Aca declarar nuestros states
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [celular, setCelular] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [costo, setCosto] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  //Agrega en el formulario al darle clic en editar
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setCelular(paciente.celular);
      setDireccion(paciente.direccion);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setCosto(paciente.costo);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion de formulario
    if ([nombre, propietario, direccion, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    //Objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      celular,
      direccion, // Nuevo campo añadido
      email,
      fecha,
      costo,
      sintomas,
    };

    if (paciente.id) {
      //Editando registro
      objetoPaciente.id = paciente.id;
      // console.log(objetoPaciente)
      // console.log(paciente)

      const pacientesActualizados = pacientes.map((pacineteState) =>
        pacineteState.id === paciente.id ? objetoPaciente : pacineteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //Nuevo Registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }
    // if(paciente.id){
    //
    //     objetoPaciente.id = paciente.id
    //     // console.log(objetoPaciente);
    //     // console.log(paciente);

    //     const pacientesActualizados = paciente.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

    //     setPacientes(pacientesActualizados);

    // }else{
    //     // console.log(objetoPaciente);
    //     objetoPaciente.id = generarId();
    //     setPacientes ([...pacientes, objetoPaciente]);
    //     // setPacientes(nombre)
    // }

    //reiniciar form
    setNombre("");
    setPropietario("");
    setCelular("");
    setDireccion("");
    setEmail("");
    setFecha("");
    setCosto("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 font-second">
      <main>
        <h2 className="font-black text-2xl underline text-center">
          Formulario Pacientes y Dueños
        </h2>
        <p className="text-lg mt-5 text-center mb-10 font-semibold">
          Añade un paciente y
          <span className="text-cyan-400 font-bold "> administralo</span>
        </p>
      </main>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {/* {error ? 'Si hay un error' : 'No hay error'} */}
        {error && <Error mensaje="Todos los campos son obligatorios" />}{" "}
        {/*Si error es true, entonces imprimir 'Si hay error'*/}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>

          <input
            type="text"
            id="mascota"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-cyan-400"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-cyan-400"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="celular"
            className="block text-gray-700 uppercase font-bold"
          >
            Número de contacto
          </label>
          <input
            type="text"
            id="celular"
            placeholder="Número de contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-cyan-400"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="direccion"
            className="block text-gray-700 uppercase font-bold"
          >
            Dirección Propietario
          </label>
          <input
            type="text"
            id="direccion"
            placeholder="Dirección del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-cyan-400"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            placeholder="Email del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-cyan-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de atención
          </label>

          <input
            type="date"
            id="atencion"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-cyan-400"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="costo"
            className="block text-gray-700 uppercase font-bold"
          >
            Costo de Atención
          </label>

          <div className="flex items-center">
            <span className="mr-2">S/.</span>
            <input
              type="number"
              id="costo"
              placeholder="0.00"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-cyan-400"
              value={costo}
              onChange={(e) => setCosto(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Descripción de Atención
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-cyan-400"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-cyan-400 w-full p-3 text-black uppercase font-bold hover:bg-cyan-700 hover:text-white cursor-pointer transition-all"
          value={paciente.id ? "Editar Información" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
