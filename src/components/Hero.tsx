import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 py-20">
      <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          ¡Hola! 👋 Soy <span className="text-gradient">Alfredo Sobrados</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Desarrollador full-stack con experiencia en mobile, backend y web. Construyo software bien estructurado: desde APIs REST con arquitectura hexagonal hasta apps multiplataforma con Kotlin Multiplatform. 🚀
        </p>
        <Button 
          onClick={scrollToProjects} 
          className="mt-8 group"
          size="lg"
        >
          Ver Proyectos 
          <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
