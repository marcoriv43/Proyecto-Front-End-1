import { Link } from "react-router"


const Home = () => {
  return (
    <>
    <h1>Home</h1>
    <Link to={"/login"}>
    <button>Login</button>
    </Link>
    </>
  )
}

export default Home