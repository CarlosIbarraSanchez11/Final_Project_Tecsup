import profile from "../../assets/profile.jpg";
import login from "../../assets/login.jpg";
import { useState } from "react";

import appFirebase from "../../credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(appFirebase);
const Login = () => {
  const [registrando, setRegistrando] = useState(false);
  const functAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    // console.log(correo); capturando correctamente
    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña);
      } catch (error) {
        alert("Asegurese que la contraseña tenga mas de 8 caracteres");
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña);
      } catch (error) {
        alert("El Correo o la contraseña son incorrectos");
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* Columna para el formulario */}
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow">
              <img src={profile} className="estilo-profile" />
              <form onSubmit={functAutenticacion}>
                <input
                  type="text"
                  placeholder="Ingresar Email"
                  className="caja-texto"
                  id="email"
                />
                <input
                  type="password"
                  placeholder="Ingresar Password"
                  className="caja-texto"
                  id="password"
                />
                <button className="btn-form">
                  {registrando ? "Registrate" : "Inicia Sesión"}
                </button>
              </form>
              <h4 className="texto">
                {registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}
                <button
                  onClick={() => setRegistrando(!registrando)}
                  className="btnswitch"
                >
                  {registrando ? "Inicia Sesión" : "Registrate"}
                </button>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <img src={login} alt="" className="tamaño-imagen" />
        </div>
      </div>
    </div>
  );
};

export default Login;
