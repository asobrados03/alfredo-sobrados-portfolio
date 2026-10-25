import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

const Contact = () => (
  <section id="contact" className="section-divider px-4 py-20 md:px-8" aria-labelledby="contact-title">
    <div className="relative isolate mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 px-6 py-12 text-center text-white shadow-lg shadow-indigo-950/20 backdrop-blur-md md:px-12">
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-blue-500/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-violet-500/25 blur-3xl" />
      <div className="relative z-10">
      <h2 id="contact-title" className="text-3xl font-bold text-white md:text-4xl">
        ¿Hablamos?
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-slate-200">
        Si buscas un perfil backend con experiencia en APIs, seguridad y arquitectura de software, puedes explorar mis proyectos para conocer cómo trabajo.
      </p>
      <p className="mx-auto mt-3 max-w-2xl text-slate-200">
        Si crees que mi perfil encaja con tu equipo, estaré encantado de hablar contigo.
      </p>
      <a
        href="mailto:alfredo.sobrados.gonzalez@gmail.com"
        className="mt-6 inline-block break-all text-lg font-semibold text-white underline decoration-teal-400 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        alfredo.sobrados.gonzalez@gmail.com
      </a>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button asChild variant="secondary">
          <a href="https://www.linkedin.com/in/alfredo-sobrados-gonzalez/" target="_blank" rel="noopener noreferrer">
            Ver LinkedIn <LinkedInIcon className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
        <Button asChild variant="secondary">
          <a href="https://github.com/asobrados03" target="_blank" rel="noopener noreferrer">
            Ver GitHub <GitHubIcon className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
        <Button asChild variant="outline" className="border-slate-300 bg-transparent text-white hover:bg-white hover:text-slate-900">
          <a href="/cv-alfredo-sobrados-gonzalez.pdf" download="CV-Alfredo-Sobrados-Gonzalez.pdf">
            Descargar CV <Download className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      </div>
      </div>
    </div>
  </section>
);

export default Contact;
