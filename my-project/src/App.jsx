import "./App.css";
import { useState, useEffect } from "react";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import ListadoPaciente from "./components/ListadoPaciente/ListadoPaciente";

// Importando los modulos de firebase
import appFirebase from "../src/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);

// Importar nuestros componentes
import Login from "../src/components/Login/Login";
// import Home from "../src/components/Home/Home";

function App() {
  // Pacientes
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? []
  );
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    //Aca se va a mantener el localStorage
    // console.log('Componente listo o cambio pacientes')
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    // console.log('Eliminando paciente', id);
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  const [usuario, setUsuario] = useState(null);
  const [recargado, setRecargado] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }

      // Si la página aún no ha sido recargada después de un cambio en la autenticación, recargarla
      if (!recargado) {
        setRecargado(true);
      }
    });

    return () => unsubscribe(); // Desuscribirse al desmontar el componente
  }, []);

  return (
    <div>
      {usuario ? (
        <>
        <Header />
        <div className="container mx-auto mt-20">
          
          <div className="mt-12 md:flex">
            <Formulario
              pacientes={pacientes}
              setPacientes={setPacientes}
              paciente={paciente}
              setPaciente={setPaciente}
            />
            <ListadoPaciente
              pacientes={pacientes}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          </div>
        </div>
        </>
        
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
