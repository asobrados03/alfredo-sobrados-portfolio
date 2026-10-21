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
  <section id="capabilities" className="px-4 py-20 md:px-8" aria-labelledby="capabilities-title">
    <div className="mx-auto max-w-7xl">
      <h2 id="capabilities-title" className="mb-2 text-center text-3xl font-bold md:text-4xl">
        Qué aporto
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
        Capacidades técnicas orientadas a construir producto fiable, mantenible y centrado en las personas.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {capabilities.map(({ title, description, technologies, icon: Icon }) => (
          <article key={title} className="rounded-xl border bg-card p-6 shadow-sm">
            <Icon className="mb-5 h-8 w-8 text-secondary" aria-hidden="true" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-muted-foreground">{description}</p>
            <p className="mt-4 text-sm font-medium text-foreground">{technologies}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Capabilities;
