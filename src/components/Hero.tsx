
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
      const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
      ).matches;

      projectsSection.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  };

  return (
      <section
          aria-labelledby="hero-title"
          className="relative isolate flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center overflow-hidden px-4 py-16 text-center sm:min-h-[80vh] sm:py-20"
      >
        {/* Decorative background effects */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl"
        />

        <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl"
        />

        <div
            className="relative z-10 animate-fade-in opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
            style={{ animationDelay: "0.2s" }}
        >
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            &lt; software engineer /&gt;
          </p>

          <h1
              id="hero-title"
              className="mb-6 text-3xl font-bold leading-tight text-slate-100 sm:text-4xl md:text-6xl"
          >
            Backend Engineer enfocado en APIs seguras y software bien diseñado.
          </h1>

          <p className="mx-auto mb-5 max-w-3xl text-lg font-semibold leading-relaxed text-slate-200 sm:text-xl">
            Desarrollo soluciones robustas, con atención al diseño, la seguridad y la calidad del código.
          </p>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Me interesa crear software fácil de entender, probar y evolucionar,
            con decisiones técnicas que faciliten su mantenimiento a largo plazo.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
                onClick={scrollToProjects}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-slate-950 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                size="lg"
                aria-label="Ver proyectos destacados"
            >
              Ver proyectos destacados
              <ArrowDown
                  className="ml-2 h-4 w-4 motion-safe:group-hover:animate-bounce"
                  aria-hidden="true"
              />
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
