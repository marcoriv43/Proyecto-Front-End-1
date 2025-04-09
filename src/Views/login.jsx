import { useForm } from "react-hook-form";
import { Form, Link } from "react-router";

export const Login = () => {
  return (
    <div className="w-full h-screen grid grid-cols-2">
      <div className="flex items-center justify-center bg-gray-200">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Iniciar sesion</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            Si ya eres miembro, inicia sesión fácilmente
          </p>

          <LoginForm />
        </div>
      </div>
      <div>
        <img src="/login.jpg" className="w-full h-full object-fill" />
      </div>
    </div>
  );
};

export const Registro = () => {
  return (
    <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
      <p>Don't have an account?</p>
      <Link to={"/register"}>
        <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
          Register
        </button>
      </Link>
    </div>
  );
};

export default Login;

const LoginForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm()

    const inputStyles = "py-2 px-3 border-b-1 w-full outline-none focus:border-b-green-800"
    const alertStyles = "text-xs px-[5px] py-[4px] bg-red-700 rounded text-white"

    const submitHandler = (data) => {
      console.log(data)
    } 

  return (
    <>
      <form>
        <input className={inputStyles} type="email" {...register("email", {
          required: {
            value: true,
            message: "Coloca un correo"
          },
          pattern: {
            value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
            message: "Coloca un correo valido"
          }
        })}/>

        { errors.email && <div className= {alertStyles}>{errors.email.message}</div> }  

        <input className={inputStyles} type="password" {...register("password", {
          required: {
            value: true,
            message: "Coloca tu contraseña"
          },
          maxLength: {
            value: 5,
            message: "No puede tener mas de 5 caracteres"
          }
          
        })}/>

    { errors.password && <div className= {alertStyles}>{errors.password.message}</div> }

      </form>

      <div>
        <button className="bg-green-700 rounded text-white py-2 px-3 hover:bg-green-600 duration-200 cursor-pointer"
        onClick={handleSubmit(submitHandler)}
        >
          Iniciar Sesión
          </button>
        <Link to={"/register"}>
          <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
            Registrarme
          </button>
        </Link>
      </div>

      <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
        <a href="#">Olvide mi contraseña</a>
      </div>
    </>
  )
};
