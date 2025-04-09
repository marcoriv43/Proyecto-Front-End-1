import { Header } from "../components/header";
import { NewsFeed } from "../components/NewsFeed";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div>
        <h1 className="text-4xl ">Noticias</h1>
        <NewsFeed />
        </div>
        <div>
          <h1>Hola mundo</h1>
        </div>

      </div>
    </div>
  );
};

export default Home;