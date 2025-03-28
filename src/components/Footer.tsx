
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Alfredo Sobrados</h2>
            <p className="text-gray-400 mt-2">Desarrollador de Software</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-2">Enlaces</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                    Proyectos
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    Sobre mí
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Contacto</h3>
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <a
                    href="mailto:alfredo.sobrados.gonzalez@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Github className="h-4 w-4 text-gray-400" />
                  <a
                    href="https://github.com/asobrados03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-gray-400" />
                  <a
                    href="https://www.linkedin.com/in/alfredo-sobrados-gonzalez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left">
          <p className="text-gray-500">
            &copy; {year} Alfredo Sobrados. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
