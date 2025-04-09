
import { Link, NavLink } from "react-router";



export const Header = () => {

    return (
      <header className=" bg-blue-500 items-center text-[white] sticky top-0 h-20 place-content-center">
        <div className="container mx-auto flex justify-between">

          <span className="font-semibold text-5xl">
            VerdeAprende
          </span>

          <ul className= "flex">
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
        </div>
      </header>
    );
  };