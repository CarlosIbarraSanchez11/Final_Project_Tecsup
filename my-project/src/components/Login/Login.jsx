import profile from "../../assets/profile.jpg";
// import login from "../../assets/login.jpg";
import login2 from "../../assets/login2.jpg";
import { useState } from "react";
import "./login.css";

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
    <section className="h-screen flex justify-center items-center">
      {/* Columna para el formulario */}
      <div className="flex flex-wrap items-center justify-center lg:justify-between w-full lg:w-3/4 xl:w-1/2">
        <div className="w-full lg:w-3/6">
          <img src={login2} alt="Login" className="w-full" />
        </div>
        {/* Formulario */}
        <div className="w-full lg:w-2/6">
          <div className="text-center mb-8">
            <img
              src={profile}
              alt="Profile"
              className="mx-auto estilo-profile"
            />
          </div>
          <form onSubmit={functAutenticacion} className="px-4 lg:px-0">
            <div className="mb-6">
              <input
                type="text"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                placeholder="Ingresar Email"
                id="email"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                id="password"
                placeholder="Password"
              />
            </div>

            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="w-full bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                {registrando ? "Registrate" : "Inicia Sesión"}
              </button>
              {/* <button className="">
                {registrando ? "Registrate" : "Inicia Sesión"}
              </button> */}
            </div>
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
    </section>
  );
};

export default Login;
