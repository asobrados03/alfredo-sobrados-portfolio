
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B0F17] text-slate-100 selection:bg-cyan-400 selection:text-slate-950">
      <div aria-hidden="true" className="cyber-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-56 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-500/20 to-violet-600/20 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute top-[38%] -right-48 h-[30rem] w-[30rem] rounded-full bg-violet-600/10 blur-[100px]" />
      <div className="relative z-10 flex min-h-screen flex-col">
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
    </div>
  );
};

export default Index;
