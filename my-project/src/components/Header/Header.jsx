import appFirebase from "../../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

function Header() {
  return (
    <>
      <nav className="bg-white  p-3 xl:p-5 ">
        <ul className="flex justify-between items-center">
          <li className="text-indigo-600 font-bold">
            Veterinaria Ibarra & Rojas
          </li>
          <buton
            className="bg-red-200 p-2 rounded-md hover:bg-red-600 hover:text-white"
            onClick={() => signOut(auth)}
          >
            Cerrar sesión
          </buton>
        </ul>
      </nav>
      <h1 className="text-4xl font-semibold uppercase text-center mx-auto mt-4 xl:font-bold xl:text-5xl">
        Listado de Pacientes de la {""}
        <span className="text-indigo-600">Veterinaria</span>
      </h1>{" "}
    </>
  );
}

export default Header;
