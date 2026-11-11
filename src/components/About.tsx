import { ArrowRight, Code, ShieldCheck, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const About = () => {
  const { t } = useTranslation();
  const paragraphs = t("about.paragraphs", { returnObjects: true });

  return (
      <section id="about" className="section-divider px-4 py-20 md:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="mb-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.24em] text-violet-400">{t("about.eyebrow")}</p>
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
            {t("about.title")}
          </h2>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-6 text-lg leading-relaxed text-slate-300">
                    {paragraph}
                  </p>
                ))}
                <h3 className="mb-4 text-lg font-mono uppercase tracking-wider text-violet-400">{t("about.focusTitle")}</h3>
                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-800/60 bg-slate-950/40 p-3.5">
                    <Code className="h-5 w-5 text-cyan-400 shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium text-slate-200">{t("about.focus.backend")}</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-800/60 bg-slate-950/40 p-3.5">
                    <Smartphone className="h-5 w-5 text-cyan-400 shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium text-slate-200">{t("about.focus.mobile")}</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-800/60 bg-slate-950/40 p-3.5">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-cyan-400" aria-hidden="true" />
                    <span className="text-sm font-medium text-slate-200">{t("about.focus.architecture")}</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-800/60 bg-slate-950/40 p-3.5">
                    <Code className="h-5 w-5 shrink-0 text-cyan-400" aria-hidden="true" />
                    <span className="text-sm font-medium text-slate-200">{t("about.focus.web")}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button asChild className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white font-medium">
                    <a href="https://www.linkedin.com/in/alfredo-sobrados-gonzalez-desarrollador-software/" target="_blank" rel="noopener noreferrer">
                      {t("about.linkedin")} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto border-slate-700 bg-slate-900/50 text-slate-200 hover:bg-slate-800 hover:text-white">
                    <a href="mailto:alfredo.sobrados.gonzalez@gmail.com">
                      {t("about.email")} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
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
