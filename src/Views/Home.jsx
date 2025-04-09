import { Link } from "react-router"


const Home = () => {
  return (
    <>
    <h1 className="">Home</h1>
    <Link to={"/login"}>
    <button>Login</button>
    </Link>
    <br />
    <Link to={"/register"}>
    <button>Registrarse</button>
    </Link>
    </>
  )
}

export default Home