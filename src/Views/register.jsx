import { Link } from "react-router";

const Register = () => {
  return (
    <div className="w-full h-screen grid grid-cols-2">
      <div className="flex items-center justify-center bg-gray-200">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Crea una cuenta</h2>
          {/* form */}
          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 rounded-xl border w-full"
              type="name"
              name="name"
              placeholder="name"
            />

            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
            />

            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              Login
            </button>
          </form>

          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <a href="#">Olvide mi contraseña</a>
          </div>

          {/* REGISTRARSE */}
          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>¿No tienes una cuenta?</p>
            <Link to={"/register"}>
              <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                Registrarse
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img src="/login.jpg" className="w-full h-full object-fill" />
      </div>
    </div>
  );
};

{
  /* COLUMNA PARA FORMULARIO */
}
{
  /* form*/
}

{
  /* Iniciar sesion con google */
}

{
  /* COLUMNA PARA IMAGEN */
}
export default Register;
