
import { Link, NavLink } from "react-router";

 const Footer = () => {
    return  (
      <footer className="bg-green-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">VerdeAprende</h3>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>
  
          <div>
            <h4 className="text-lg font-semibold mb-2">Enlaces</h4>
            <ul className="text-sm space-y-1">
              <li><a href="/" className="hover:underline">Inicio</a></li>
              <li><a href="/acerca" className="hover:underline">Acerca de</a></li>
              <li><a href="/contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;