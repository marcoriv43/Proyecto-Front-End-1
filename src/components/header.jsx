import { Link, NavLink } from "react-router";
import { useOutletContext } from "react-router";
import {signOut } from "firebase/auth";
import { auth } from "../functions/firebase"

export const Header = () => {

<<<<<<< HEAD
=======
    return (
      <header className=" bg-green-900 items-center text-[white] sticky top-0 h-20 place-content-center">
        <div className="container mx-auto flex justify-between">
>>>>>>> b21931a750dd79cda873502a7f5d2ea497e7114f

  const { user } = useOutletContext();

  return (
    <header className=" bg-green-800 items-center text-[white] sticky top-0 h-20 place-content-center">
      <div className="container mx-auto flex justify-between">

        <span className="font-semibold text-5xl">
          VerdeAprende
        </span>


        {
          user
            ? <span>{user.email} <button onClick={() => signOut(auth)}>Salir de la Sesión</button></span>
            : <ul className="flex">
              <li>
                <NavLink to="/login">
                  <button class="py-2 px-5 bg-green-600 border rounded-xl hover:scale-110 duration-300">
                    Iniciar sesion
                  </button>
                </NavLink>
              </li>
              <br />
              <li className="justify-between">
                <NavLink to="/register">
                  <button class="py-2 px-5 bg-green-600 border rounded-xl hover:scale-110 duration-300">
                    Registrarme
                  </button>
                </NavLink>
              </li>

            </ul>
        }

      </div>
    </header>
  );
};