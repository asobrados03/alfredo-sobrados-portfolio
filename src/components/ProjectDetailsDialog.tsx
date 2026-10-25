import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { getLinkIcon, getProjectLinks, type Project } from "@/lib/projectTypes";

interface ProjectDetailsDialogProps {
    project: Project;
    /** Elemento que abre el diálogo (se renderiza con asChild). */
    children: ReactNode;
}

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
    <section aria-label={title} className="space-y-2">
        <h4 className="text-sm font-semibold text-slate-200">{title}</h4>
        {children}
    </section>
);

const BulletList = ({ items }: { items: string[] }) => (
    <ul className="space-y-2 text-sm leading-relaxed text-slate-400">
        {items.map((item) => (
            <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="min-w-0 break-words">{item}</span>
            </li>
        ))}
    </ul>
);

const Links = ({ project, stacked = false }: { project: Project; stacked?: boolean }) => {
    const links = getProjectLinks(project);

    if (links.length === 0) {
        return null;
    }

    return (
        <div
            className={`grid grid-cols-1 gap-2 border-t border-slate-800 pt-5 ${
                stacked ? "sm:grid-cols-2 lg:grid-cols-1" : "sm:grid-cols-2 sm:[&>a:last-child:nth-child(odd)]:col-span-2"
            }`}
        >
            {links.map((link) => {
                const LinkIcon = getLinkIcon(link);

                return (
                    <Button key={link.url} asChild variant="outline" className="min-h-11 w-full">
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${link.label}: ${project.title}`}
                        >
                            <LinkIcon className="h-4 w-4" aria-hidden="true" />
                            <span>{link.label}</span>
                        </a>
                    </Button>
                );
            })}
        </div>
    );
};

const ProjectDetailsDialog = ({ project, children }: ProjectDetailsDialogProps) => {
    const links = getProjectLinks(project);
    const hasStructuredLayout = Boolean(project.technologyGroups?.length || project.featuredMetric);
    const showHighlights = project.showHighlightsInDialog !== false;

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="flex max-h-[85dvh] w-[calc(100%-2rem)] max-w-2xl flex-col gap-5 overflow-hidden border-slate-800 bg-slate-900 p-5 text-slate-100 sm:max-w-2xl sm:p-6 lg:max-w-4xl">
                <DialogHeader className="text-left">
                    <DialogTitle className="pr-6 text-xl leading-tight text-slate-100">{project.title}</DialogTitle>
                </DialogHeader>

                <div className="min-h-0 flex-1 space-y-5 overflow-y-auto overscroll-contain pr-8 [scrollbar-color:rgb(71_85_105)_rgb(15_23_42)] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-950 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb:hover]:bg-slate-500">
                    <DialogHeader className="space-y-3 text-left">
                        <DialogDescription className="text-sm leading-relaxed text-slate-400">
                            {project.description}
                        </DialogDescription>
                    </DialogHeader>

                    {project.featuredMetric && (
                        <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-4 sm:flex sm:items-baseline sm:gap-3">
                            <p className="font-mono text-3xl font-bold tracking-tight text-cyan-300">
                                {project.featuredMetric.value}
                            </p>
                            <p className="text-sm font-medium leading-relaxed text-slate-200">
                                {project.featuredMetric.label}
                            </p>
                        </div>
                    )}

                    {hasStructuredLayout ? (
                        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-start">
                            <div className="space-y-7">
                                {showHighlights && project.highlights && project.highlights.length > 0 && (
                                    <Section title="Logros técnicos">
                                        <BulletList items={project.highlights} />
                                    </Section>
                                )}

                                {project.objectives && (
                                    <Section title="Objetivo">
                                        <p className="text-sm leading-relaxed text-slate-400">{project.objectives}</p>
                                    </Section>
                                )}

                                {project.keyPoints && project.keyPoints.length > 0 && (
                                    <Section title="Puntos clave">
                                        <BulletList items={project.keyPoints} />
                                    </Section>
                                )}

                                {project.details?.map((detail) => (
                                    <Section key={detail.title} title={detail.title}>
                                        {detail.content && (
                                            <p className="text-sm leading-relaxed text-slate-400">{detail.content}</p>
                                        )}
                                        {detail.items && detail.items.length > 0 && <BulletList items={detail.items} />}
                                    </Section>
                                ))}
                            </div>

                            <aside className="space-y-6 border-t border-slate-800 pt-5 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                                {project.technologyGroups && project.technologyGroups.length > 0 && (
                                    <section aria-label="Tecnologías por responsabilidad" className="space-y-5">
                                        <h3 className="text-sm font-semibold text-slate-200">Tecnologías</h3>
                                        {project.technologyGroups.map((group) => (
                                            <div key={group.title} className="space-y-2">
                                                <h4 className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                                    {group.title}
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {group.technologies.map((technology) => (
                                                        <Badge key={technology} variant="secondary">
                                                            {technology}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </section>
                                )}
                                <section aria-label="Enlaces del proyecto" className="space-y-3">
                                    <h3 className="text-sm font-semibold text-slate-200">Enlaces</h3>
                                    <Links project={project} stacked />
                                </section>
                            </aside>
                        </div>
                    ) : (
                        <>
                            <div className="flex flex-wrap gap-2" aria-label="Tecnologías">
                                {project.technologies.map((tech) => (
                                    <Badge key={tech} variant="secondary">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>

                            {showHighlights && project.highlights && project.highlights.length > 0 && (
                                <Section title="Logros técnicos">
                                    <BulletList items={project.highlights} />
                                </Section>
                            )}

                            {project.objectives && (
                                <Section title="Objetivo">
                                    <p className="text-sm leading-relaxed text-slate-400">{project.objectives}</p>
                                </Section>
                            )}

                            {project.keyPoints && project.keyPoints.length > 0 && (
                                <Section title="Puntos clave">
                                    <BulletList items={project.keyPoints} />
                                </Section>
                            )}

                            {project.details?.map((detail) => (
                                <Section key={detail.title} title={detail.title}>
                                    {detail.content && (
                                        <p className="text-sm leading-relaxed text-slate-400">{detail.content}</p>
                                    )}
                                    {detail.items && detail.items.length > 0 && <BulletList items={detail.items} />}
                                </Section>
                            ))}

                            {links.length > 0 && <Links project={project} />}
                        </>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProjectDetailsDialog;