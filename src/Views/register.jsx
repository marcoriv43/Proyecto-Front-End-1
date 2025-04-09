import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Register = () => {


  return (
    <div className="w-full h-screen grid grid-cols-2">
      <div className="flex items-center justify-center bg-gray-200">
        <div className="px-8 text-center w-sm">
          <h2 className="font-bold text-2xl mb-4 text-[#002D74]">Crea una cuenta</h2>

            <RegisterForm  />

          <div className="flex w-full justify-between text-xs">
            <a href="#">Olvide mi contraseña</a>
            <p>¿No tienes una cuenta?</p>
          </div>
        </div>
      </div>
      <div>
        <img src="/login.jpg" className="w-full h-full object-fill" />
      </div>
    </div>
  );
};
export default Register;



const RegisterForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const inputStyles = "py-2 px-3 border-b-1 w-full outline-none focus:border-b-green-800"
  const alertStyles = "text-xs px-[5px] py-[4px] bg-red-700 rounded text-white"

  const submitHandler = (data) => {
    console.log(data)
  } 

  return (
    <>
      <form className="flex flex-col gap-4">
        <input
          className={inputStyles}
          name="name"
          placeholder="Nombre"
          {...register("name", {
            required: {
              value: true,
              message: "Coloca tu nombre"
            },
            maxLength: {
              value: 10,
              message: "No puede Tener mas de 5 caracteres "
            }
          })} />

        {errors.name && <div className={alertStyles}>{errors.name.message}</div>}

        <input
          className={inputStyles}
          type="email"
          name="email"
          placeholder="Email"

          {...register("email", {
            required: {
              value: true,
              message: "Coloca tu correo"
            },
            pattern: {
              value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
              message: "Coloca un correo valido"
            }
          })}

        />

        {errors.email && <div className={alertStyles}>{errors.email.message}</div>}

        <input
          className={inputStyles}
          type="password"
          name="password"
          placeholder="Password"
          {...register("password", {
            required: {
              value: true,
              message: "Coloca una clave"
            },
            maxLength: {
              value: 5,
              message: "Solo puede tener un maximo de 5 caracteres "
            }
          })}
        />

        {errors.password && <div className={alertStyles}>{errors.password.message}</div>}

      </form>
      <div className="flex justify-between">
        <button className="bg-green-700 rounded text-white py-2 px-3 hover:bg-green-600 duration-200 cursor-pointer"
        onClick={handleSubmit(submitHandler)}
        >
          Registrarme
        </button>
        <Link to={"/login"}>
          <button className="rounded border border-green-700 py-2 px-3 hover:bg-green-200 duration-200 cursor-pointer">
            Tengo una Cuenta
          </button>
        </Link>
      </div></>
  )

}