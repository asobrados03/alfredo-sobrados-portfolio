import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

const navigationItems = [
  { href: "#projects", label: "Proyectos" },
  { href: "#capabilities", label: "Habilidades" },
  { href: "#about", label: "Sobre mí" },
  { href: "#more-projects", label: "Más proyectos" },
  { href: "#contact", label: "Contacto" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-[#0B0F17]/90 px-4 py-4 shadow-lg shadow-slate-950/20 backdrop-blur-md md:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:flex-nowrap lg:justify-between">
        <a href="#main-content" className="shrink-0 text-xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F17] md:text-2xl">
          <span className="text-gradient">Alfredo Sobrados González</span>
        </a>

        <nav aria-label="Secciones principales" className="order-3 w-full lg:order-none lg:w-auto">
          <ul className="flex justify-center gap-x-4 gap-y-2 overflow-x-auto whitespace-nowrap pb-1 text-sm font-medium text-slate-300 md:gap-x-6">
            {navigationItems.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-sm transition-colors hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1 text-slate-300">
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
      </div>
    </header>
  );
};

export default Header;
