import { Blocks, BrainCircuit, ShieldCheck, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";

const Capabilities = () => {
  const { t } = useTranslation();

  const capabilities = [
    {
      title: t("capabilities.items.backend.title"),
      description: t("capabilities.items.backend.description"),
      technologies: t("capabilities.items.backend.technologies"),
      icon: Blocks,
    },
    {
      title: t("capabilities.items.crossPlatform.title"),
      description: t("capabilities.items.crossPlatform.description"),
      technologies: t("capabilities.items.crossPlatform.technologies"),
      icon: Smartphone,
    },
    {
      title: t("capabilities.items.quality.title"),
      description: t("capabilities.items.quality.description"),
      technologies: t("capabilities.items.quality.technologies"),
      icon: ShieldCheck,
    },
    {
      title: t("capabilities.items.ai.title"),
      description: t("capabilities.items.ai.description"),
      technologies: t("capabilities.items.ai.technologies"),
      icon: BrainCircuit,
    },
  ];

  return (
    <section id="capabilities" className="section-divider px-4 py-20 md:px-8" aria-labelledby="capabilities-title">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.24em] text-violet-400">{t("capabilities.eyebrow")}</p>
        <h2 id="capabilities-title" className="mb-2 text-center text-3xl font-bold text-slate-100 md:text-4xl">
          {t("capabilities.title")}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
          {t("capabilities.description")}
        </p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
};

export default Capabilities;
