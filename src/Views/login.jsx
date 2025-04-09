import { Link } from "react-router";

export const Login = () => {
  return (
    <div className="w-full h-screen grid grid-cols-2">
      <div className="flex items-center justify-center bg-gray-200">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Iniciar sesion</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            Si ya eres miembro, inicia sesión fácilmente
          </p>

          {/* form */}
          {LoginForm /}

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("example"))

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

      <input className="p-2 mt-8 rounded-xl border" {...register("email", { 
        required: true, 
        pattern: 
      })} />

  
      <input className="p-2 rounded-xl border w-full" {...register("password", { required: true })} />        
      {errors.exampleRequired && <span>This field is required</span>}

      <input  className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300" type="submit" />
    </form>
    )
};
