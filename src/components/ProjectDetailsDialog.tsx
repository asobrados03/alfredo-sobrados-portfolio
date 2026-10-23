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

const ProjectDetailsDialog = ({ project, children }: ProjectDetailsDialogProps) => {
    const links = getProjectLinks(project);

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="max-h-[85dvh] w-[calc(100%-2rem)] max-w-2xl gap-5 overflow-y-auto overscroll-contain border-slate-800 bg-slate-900 p-5 text-slate-100 sm:max-w-2xl sm:p-6">
                <DialogHeader className="space-y-3 text-left">
                    <DialogTitle className="pr-6 text-xl leading-tight text-slate-100">{project.title}</DialogTitle>
                    <DialogDescription className="text-sm leading-relaxed text-slate-400">
                        {project.description}
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-wrap gap-2" aria-label="Tecnologías">
                    {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>

                {project.highlights && project.highlights.length > 0 && (
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

                {links.length > 0 && (
                    <div className="grid grid-cols-1 gap-2 border-t border-slate-800 pt-5 sm:grid-cols-2 sm:[&>a:last-child:nth-child(odd)]:col-span-2">
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
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ProjectDetailsDialog;