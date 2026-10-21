import { Mail } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/60 px-4 py-12 text-white backdrop-blur-md md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Alfredo Sobrados</h2>
            <p className="mt-2 text-slate-300">Desarrollador de Software</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-2">Enlaces</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#projects" className="text-slate-300 transition-colors hover:text-white">
                    Proyectos
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-slate-300 transition-colors hover:text-white">
                    Sobre mí
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-300 transition-colors hover:text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Contacto</h3>
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-300" aria-hidden="true" />
                  <a
                    href="mailto:alfredo.sobrados.gonzalez@gmail.com"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Email
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <GitHubIcon className="h-4 w-4 text-slate-300" aria-hidden="true" />
                  <a
                    href="https://github.com/asobrados03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <LinkedInIcon className="h-4 w-4 text-slate-300" aria-hidden="true" />
                  <a
                    href="https://www.linkedin.com/in/alfredo-sobrados-gonzalez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center md:text-left">
          <p className="text-slate-300">
            &copy; {year} Alfredo Sobrados. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
