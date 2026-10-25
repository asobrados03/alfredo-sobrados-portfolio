import { Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

const navigationItems = [
  { href: "#projects", label: "Proyectos destacados" },
  { href: "#capabilities", label: "Especialidades" },
  { href: "#about", label: "Sobre mí" },
  { href: "#more-projects", label: "Otros proyectos y prácticas" },
  { href: "#contact", label: "Contacto" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-[#0B0F17]/90 px-4 py-3 shadow-lg shadow-slate-950/20 backdrop-blur-md md:px-8">
      <div className="relative mx-auto flex w-full items-center justify-between gap-3 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <a href="#main-content" className="min-w-0 text-base font-bold leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F17] sm:text-xl lg:mr-4 lg:justify-self-start lg:whitespace-normal lg:text-2xl xl:mr-8 xl:whitespace-nowrap">
          <span className="text-gradient">Alfredo Sobrados González</span>
        </a>

        <div className="flex shrink-0 items-center gap-1 text-slate-300 lg:col-start-3 lg:justify-self-end">
          <div className="hidden items-center gap-1 lg:flex">
            <Button asChild variant="ghost" size="icon">
              <a href="https://github.com/asobrados03" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="https://www.linkedin.com/in/alfredo-sobrados-gonzalez/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="mailto:alfredo.sobrados.gonzalez@gmail.com" aria-label="Enviar correo electrónico a Alfredo Sobrados">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Secciones principales"
          className={`${isMenuOpen ? "grid" : "hidden"} absolute inset-x-0 top-[calc(100%+0.75rem)] grid-cols-2 gap-2 rounded-xl border border-slate-800 bg-[#101725]/95 p-3 shadow-xl shadow-slate-950/40 backdrop-blur-md lg:static lg:col-start-2 lg:row-start-1 lg:block lg:w-auto lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          <ul className="col-span-2 grid grid-cols-2 gap-2 text-center text-sm font-medium text-slate-300 lg:flex lg:items-center lg:gap-x-6 lg:gap-y-2 lg:text-left">
            {navigationItems.map(({ href, label }) => (
              <li key={href} className="last:col-span-2 lg:last:col-auto">
                <a
                  href={href}
                  className="block rounded-md bg-slate-800/60 px-3 py-2.5 transition-colors hover:bg-slate-800 hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 lg:bg-transparent lg:p-0 lg:hover:bg-transparent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="col-span-2 flex items-center justify-center gap-1 border-t border-slate-800 pt-2 lg:hidden">
            <Button asChild variant="ghost" size="icon">
              <a href="https://github.com/asobrados03" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="https://www.linkedin.com/in/alfredo-sobrados-gonzalez/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="mailto:alfredo.sobrados.gonzalez@gmail.com" aria-label="Enviar correo electrónico a Alfredo Sobrados">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
