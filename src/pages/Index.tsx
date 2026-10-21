
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only absolute left-4 top-4 z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Hero />
        <Projects
          id="projects"
          title="Proyectos destacados"
          description="Tres proyectos que condensan mi experiencia en producto real, backend y desarrollo full-stack."
          variant="featured"
        />
        <Capabilities />
        <About />
        <Projects
          id="more-projects"
          title="Más proyectos y prácticas"
          description="Otros proyectos académicos y personales que muestran mi base en Java, desarrollo web y fundamentos de ingeniería del software."
          variant="more"
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
