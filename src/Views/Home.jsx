import { Header } from "../components/header";
import { NewsFeed } from "../components/NewsFeed";
import { WeatherCard } from "../components/WeatherCard";
import UbicacionMapa from "../components/UbicacionMapa";
import Footer from "../components/Footer";


const Home = () => {
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
      <Footer /> 

    </div>
  );
};

export default Home;