import { Header } from "../components/header";
import { NewsFeed } from "../components/NewsFeed";
import { WeatherCard } from "../components/WeatherCard";
import UbicacionMapa from "../components/UbicacionMapa";
import { useOutletContext,Link } from "react-router";
const Home = () => {

  const { user } = useOutletContext();

  if (!user) {
    return (
      <div>
        <h1>Inicia Sesión</h1>
        <p>Por favor inicia sesión para ver las noticias.</p>
        <div>
          <div className="flex justify-between">
            <Link to={"/login"}>
              <button className="rounded border border-green-700 py-2 px-3 hover:bg-green-200 duration-200 cursor-pointer">
                Tengo una Cuenta
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="rounded border border-green-700 py-2 px-3 hover:bg-green-200 duration-200 cursor-pointer">
                Crear una Cuenta
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex flex-row">
        <div className="w-3/4 p-4">
          <h1 className="text-6xl text-center">Noticias</h1>
          <br />
          <NewsFeed />
        </div >
        <div className="w-1/4 p-4">
          <div className="p-4 ">
            <WeatherCard />
          </div>
          <div className="p-4 flex flex-col">
            <h1 className="text-2xl font-bold mb-4">Mi ubicación actual</h1>
            <UbicacionMapa />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;