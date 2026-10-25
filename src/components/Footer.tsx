import { Download, Mail } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

const navigationItems = [
  { href: "#projects", label: "Proyectos" },
  { href: "#capabilities", label: "Especialidades" },
  { href: "#about", label: "Sobre mí" },
  { href: "#more-projects", label: "Proyectos y prácticas" },
  { href: "#contact", label: "Contacto" },
];

const socialLinks = [
  { href: "https://github.com/asobrados03", label: "GitHub", icon: GitHubIcon },
  {
    href: "https://www.linkedin.com/in/alfredo-sobrados-gonzalez/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 px-4 py-12 backdrop-blur-md md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-3">
          <div>
            <a
              href="#main-content"
              className="text-xl font-bold text-slate-100 transition-colors hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Alfredo Sobrados González
            </a>
            <p className="mt-3 max-w-sm leading-relaxed text-slate-400">
              Backend Engineer centrado en APIs seguras, arquitectura de software y código mantenible.
            </p>
            <a
              href="/cv-alfredo-sobrados-gonzalez.pdf"
              download="CV-Alfredo-Sobrados-Gonzalez.pdf"
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-slate-700 px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Descargar CV <Download className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Explorar
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {navigationItems.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-slate-400 transition-colors hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Contacto
            </h2>
            <a
              href="mailto:alfredo.sobrados.gonzalez@gmail.com"
              className="mt-4 flex w-fit items-center gap-2 text-sm text-slate-400 transition-colors hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Mail className="h-4 w-4 text-cyan-400" aria-hidden="true" />
              Email
            </a>
            <div className="mt-4 flex gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/60 text-slate-300 transition-colors hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-800/40 py-6 text-xs text-slate-500 md:flex-row">
          <p>© {year} Alfredo Sobrados González. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado con React, TypeScript y Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
