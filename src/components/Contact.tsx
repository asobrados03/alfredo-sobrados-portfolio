import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <section id="contact" className="bg-gray-50 px-4 py-20 md:px-8" aria-labelledby="contact-title">
    <div className="mx-auto max-w-3xl rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground shadow-lg md:px-12">
      <h2 id="contact-title" className="text-3xl font-bold md:text-4xl">
        Hablemos
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
        ¿Buscas un perfil backend, mobile o full-stack? Estoy disponible para conversar sobre nuevas oportunidades.
      </p>
      <a
        href="mailto:alfredo.sobrados.gonzalez@gmail.com"
        className="mt-6 inline-block break-all text-lg font-semibold underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
      >
        alfredo.sobrados.gonzalez@gmail.com
      </a>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button asChild variant="secondary">
          <a href="https://www.linkedin.com/in/alfredo-sobrados-gonzalez/" target="_blank" rel="noopener noreferrer">
            LinkedIn <Linkedin className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
        <Button asChild variant="secondary">
          <a href="https://github.com/asobrados03" target="_blank" rel="noopener noreferrer">
            GitHub <Github className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
        <Button asChild variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
          <a href="mailto:alfredo.sobrados.gonzalez@gmail.com?subject=Solicitud%20de%20CV%20-%20Alfredo%20Sobrados">
            Solicitar CV <Download className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default Contact;
