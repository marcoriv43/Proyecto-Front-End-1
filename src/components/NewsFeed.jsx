import { useEffect, useState } from "react";
import axios from "axios";

export const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = '15e32e02f16c4f7da2633a3b340eaef1';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/everything?sources=cnn&sortBy=popularity&apiKey=${API_KEY}&q=technology`
        );
        setArticles(res.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-500">Cargando noticias...</p>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" >
      {articles.map((article, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
          )}
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
            <p className="text-sm text-gray-600">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-500 hover:underline text-sm"
            >
              Leer más
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};



