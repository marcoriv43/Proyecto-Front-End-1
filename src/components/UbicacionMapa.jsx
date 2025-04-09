
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const UbicacionMapa = () => {
  const [posicion, setPosicion] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosicion({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error obteniendo ubicación:", error);
        }
      );
    } else {
      console.error("Geolocalización no está disponible en este navegador.");
    }
  }, []);

  return (
    <div className="w-full h-[500px] rounded-2xl shadow-lg overflow-hidden">
      {posicion ? (
        <MapContainer center={posicion} zoom={13} className="h-full w-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={posicion}>
            <Popup>¡Estás aquí!</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div className="flex justify-center items-center h-full text-gray-600">
          Obteniendo ubicación...
        </div>
      )}
    </div>
  );
};

export default UbicacionMapa;
