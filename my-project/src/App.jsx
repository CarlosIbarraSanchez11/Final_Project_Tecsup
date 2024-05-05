import "./App.css";
// Importar bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";

// Importando los modulos de firebase
import appFirebase from "../src/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);

// Importar nuestros componentes
import Login from "../src/components/Login/Login";
import Home from "../src/components/Home/Home";
import { useState } from "react";

function App() {
  const [usuario, setUsuario] = useState(null);
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });
  return (
    <div>{usuario ? <Home correoUsurio={usuario.email} /> : <Login />}</div>
  );
}

export default App;
