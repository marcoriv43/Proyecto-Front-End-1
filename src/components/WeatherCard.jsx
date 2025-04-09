import { useState, useEffect } from "react";

export const WeatherCard = ({ city = "Valera" }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "c31dc69b802e535d137396824602c364";

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
        );
        const data = await res.json();
        setWeather(data);
      } catch (error) {
        console.error("Error al obtener el clima:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <div className="p-4 text-center">Cargando...</div>;
  if (!weather || weather.cod !== 200)
    return <div className="p-4 text-center text-red-500">Ciudad no encontrada</div>;

  return (
    <div className="max-w-sm mx-auto bg-white/80 backdrop-blur p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-semibold mb-2">{weather.name}</h2>
      <img
        className="w-20 h-20 mx-auto"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p className="text-xl">{Math.round(weather.main.temp)}°C</p>
      <p className="capitalize text-gray-600">{weather.weather[0].description}</p>
    </div>
  );
};
