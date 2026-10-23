import {ArrowRight, Bot, Code, ShieldCheck, Smartphone} from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
      <section id="about" className="section-divider px-4 py-20 md:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="mb-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.24em] text-violet-400">&lt; profile /&gt;</p>
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
            Perfil &amp; Trayectoria
          </h2>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <p className="mb-6 text-lg leading-relaxed text-slate-300">
                  Ingeniero Informático especializado en backend y diseño de APIs. Construyo servicios con Java, Kotlin
                  y Spring Boot, con arquitectura hexagonal, autenticación JWT y pruebas automatizadas. Tengo
                  experiencia full-stack: he llevado un producto de extremo a extremo, con app móvil multiplataforma
                  (más del 70 % de código compartido entre Android e iOS) y su API REST, en un proyecto real. Trabajo
                  con herramientas de IA para acelerar el desarrollo, y reviso y valido cada cambio con pruebas y
                  criterio de arquitectura.
                </p>
                <h3 className="mb-4 text-lg font-mono uppercase tracking-wider text-violet-400">&gt; Áreas de enfoque</h3>
                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-800/60 bg-slate-950/40 p-3.5">
                    <Code className="h-5 w-5 text-cyan-400 shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium text-slate-200">Backend y APIs REST</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-800/60 bg-slate-950/40 p-3.5">
                    <Smartphone className="h-5 w-5 text-cyan-400 shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium text-slate-200">Móvil multiplataforma (KMP)</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-800/60 bg-slate-950/40 p-3.5">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-cyan-400" aria-hidden="true" />
                    <span className="text-sm font-medium text-slate-200">Arquitectura limpia y testing</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-800/60 bg-slate-950/40 p-3.5">
                    <Bot className="h-5 w-5 shrink-0 text-cyan-400" aria-hidden="true" />
                    <span className="text-sm font-medium text-slate-200">Ingeniería asistida por IA</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button asChild className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white font-medium">
                    <a href="https://www.linkedin.com/in/alfredo-sobrados-gonzalez/" target="_blank" rel="noopener noreferrer">
                      Ver LinkedIn <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto border-slate-700 bg-slate-900/50 text-slate-200 hover:bg-slate-800 hover:text-white">
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
