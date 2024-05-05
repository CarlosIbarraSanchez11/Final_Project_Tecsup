import appFirebase from "../../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

const Home = ({ correoUsurio }) => {
  return (
    <div className="container">
      <h2 className="">
        Bienvenido usuario: {correoUsurio}{" "}
        <buton className=" btn btn-primary" onClick={() => signOut(auth)}>
          Logout
        </buton>{" "}
      </h2>
    </div>
  );
};

export default Home;
