
import { ArrowRight, Code, Book, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">🌱 Sobre mí</h2>
        <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-lg leading-relaxed mb-6">
                Ingeniero Informático orientado a backend, mobile y full-stack. Me interesa transformar necesidades de
                producto en software mantenible, con una base sólida de arquitectura, calidad y experiencia de usuario.
              </p>
              <h3 className="text-xl font-bold mb-4">Intereses</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Code className="text-secondary h-5 w-5" aria-hidden="true" />
                  <span>Web &amp; Backend</span>
                </div>
                <div className="flex items-center gap-2">
                  <Laptop className="text-secondary h-5 w-5" aria-hidden="true" />
                  <span>Mobile multiplataforma</span>
                </div>
                <div className="flex items-center gap-2">
                  <Book className="text-secondary h-5 w-5" aria-hidden="true" />
                  <span>IA, ciberseguridad &amp; blockchain</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button asChild className="w-full sm:w-auto">
                  <a href="https://www.linkedin.com/in/alfredo-sobrados-gonzalez/" target="_blank" rel="noopener noreferrer">
                    Ver LinkedIn <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href="mailto:alfredo.sobrados.gonzalez@gmail.com">
                    Contactar por Email <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
