import { Blocks, ShieldCheck, Smartphone } from "lucide-react";

const capabilities = [
  {
    title: "Backend",
    description: "APIs REST seguras, modelado de datos y lógica de negocio mantenible.",
    technologies: "Java · Spring Boot · Node.js",
    icon: Blocks,
  },
  {
    title: "Mobile",
    description: "Experiencias multiplataforma con lógica compartida y UI nativa.",
    technologies: "Kotlin Multiplatform · Jetpack Compose",
    icon: Smartphone,
  },
  {
    title: "Calidad",
    description: "Software preparado para evolucionar, probar y desplegar con confianza.",
    technologies: "Arquitectura Hexagonal · Tests",
    icon: ShieldCheck,
  },
];

const Capabilities = () => (
  <section id="capabilities" className="section-divider px-4 py-20 md:px-8" aria-labelledby="capabilities-title">
    <div className="mx-auto max-w-7xl">
      <p className="mb-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.24em] text-violet-400">&lt; expertise /&gt;</p>
      <h2 id="capabilities-title" className="mb-2 text-center text-3xl font-bold text-slate-100 md:text-4xl">
        Qué aporto
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
        Capacidades técnicas orientadas a construir producto fiable, mantenible y centrado en las personas.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {capabilities.map(({ title, description, technologies, icon: Icon }) => (
          <article key={title} className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]">
            <Icon className="mb-5 h-8 w-8 text-cyan-400" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
            <p className="mt-2 text-slate-400">{description}</p>
            <p className="mt-4 font-mono text-sm font-medium text-slate-300">{technologies}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Capabilities;
