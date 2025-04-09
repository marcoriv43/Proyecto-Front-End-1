
import { Link, NavLink } from "react-router";



export const Header = () => {

    return (
      <header className="flex justify-between items-center bg-amber-900 text-[white] sticky top-0;">
        <Link to="/" className="title">
          <h1 className="font-bold">VerdeAprende</h1>
        </Link>
        <div>

        </div>
        <ul className= "flex">
          <li>
            <NavLink to="/login">
            <button class="py-2 px-5 bg-green-600 border rounded-xl hover:scale-110 duration-300">
                Iniciar sesion
            </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/register">
            <button class="py-2 px-5 bg-green-600 border rounded-xl hover:scale-110 duration-300">
                Registrarme
            </button>
            </NavLink>
          </li>
        </ul>
      </header>
    );
  };