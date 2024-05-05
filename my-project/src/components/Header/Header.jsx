import appFirebase from "../../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

function Header() {
  return (
    <>
      <h1 className="text-5xl font-black uppercase text-center md:w-2/3 mx-auto">
        Seguimiento Pacientes {""} con GitHub {""}
        <span className="text-indigo-600">Veterinaria</span>
      </h1>
      <buton className=" btn btn-primary" onClick={() => signOut(auth)}>
        Logout
      </buton>{" "}
    </>
  );
}

export default Header;
