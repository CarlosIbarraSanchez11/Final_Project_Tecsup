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
    <section className="h-screen flex flex-col items-center lg:justify-center lg:flex-row">
      {/* Lado izquierdo */}
      <div className=" px-2 py-6 w-full lg:w-[700px] lg:h-[750px] lg:flex lg:justify-between max-h-120">
        <img
          src={login2}
          alt="Login"
          className="w-full h-auto lg:h-full rounded-lg"
        />
      </div>
      {/* Lado derecho */}
      <div className="flex  justify-center items-center p-2  lg:justify-center w-full lg:w-[800px] lg:h-[750px] ">
        <div className="w-full lg:h-[700px] lg:w-[400px] lg:py-3 lg:px-4  p-2">
          <div className="text-center mb-8">
            <img
              src={profile}
              alt="Profile"
              className="mx-auto estilo-profile"
            />
          </div>
          <p className="mb-5 text-center font-bold uppercase text-xl">Login </p>
          <form onSubmit={functAutenticacion} className="px-4 lg:px-0">
            <div className="mb-6">
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md  border-2 border-gray-300 focus:outline-none focus:border-green-400"
                placeholder="Ingresar Email"
                id="email"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                className="w-full px-3 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-green-400"
                id="password"
                placeholder="********"
              />
            </div>

            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold px-4 py-2 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                {registrando ? "Registrate" : "Inicia Sesión"}
              </button>
            </div>
          </form>
          <div className="texto-login flex items-center gap-3 justify-center mt-2">
            {registrando ? "Si ya tienes cuenta " : "No tienes cuenta"}
            <button
              onClick={() => setRegistrando(!registrando)}
              className="btnswitch"
            >
              {registrando ? "Inicia Sesión" : "Registrate"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
