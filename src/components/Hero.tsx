import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      projectsSection.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 text-center"
    >
      <div className="animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100 opacity-0" style={{ animationDelay: "0.2s" }}>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
          Alfredo Sobrados González
        </p>
        <h1 id="hero-title" className="mb-4 text-4xl font-bold md:text-6xl">
          Ingeniero Informático · <span className="text-gradient">Backend, Mobile y Full-stack</span>
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl opacity-90 md:text-2xl">
          Diseño APIs robustas con Java/Spring y Node.js, y aplicaciones multiplataforma con Kotlin
          Multiplatform. Busco aportar en equipos de producto con foco en calidad, arquitectura y
          experiencia de usuario.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button onClick={scrollToProjects} className="group" size="lg" aria-label="Ver proyectos destacados">
            Ver proyectos destacados
            <ArrowDown className="ml-2 h-4 w-4 motion-safe:group-hover:animate-bounce" aria-hidden="true" />
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="mailto:alfredo.sobrados.gonzalez@gmail.com"
              aria-label="Contactar con Alfredo Sobrados por correo electrónico"
            >
              Contactar
              <Mail className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
