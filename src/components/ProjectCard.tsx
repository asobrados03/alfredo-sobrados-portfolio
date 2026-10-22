import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { ExternalLink, FileText } from "lucide-react";

type ProjectLinkType = "github" | "document" | "external";

export interface ProjectLink {
  label: string;
  url: string;
  type?: ProjectLinkType;
}

export interface ProjectDetail {
  title: string;
  content?: string;
  items?: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  impact?: string;
  highlights?: string[];
  technologies: string[];
  githubUrl?: string;
  links?: ProjectLink[];
  objectives?: string;
  keyPoints?: string[];
  details?: ProjectDetail[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const getProjectLinks = (project: Project): ProjectLink[] => {
  if (project.links?.length) {
    return project.links;
  }

  if (!project.githubUrl) {
    return [];
  }

  return [{ label: "Ver código", url: project.githubUrl, type: "github" }];
};

const getLinkIcon = (link: ProjectLink) => {
  if (link.type === "document") {
    return FileText;
  }

  if (link.type === "github" || link.url.includes("github.com")) {
    return GitHubIcon;
  }

  return ExternalLink;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const animationDelay = `${0.1 + index * 0.08}s`;
  const projectLinks = getProjectLinks(project);
  const visibleTechnologies = project.technologies.slice(0, 5);
  const highlights = project.highlights?.slice(0, 3);

  return (
    <Card
      className="group animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100 relative flex min-w-0 h-full flex-col overflow-hidden border-slate-800/80 bg-slate-900/60 text-slate-100 opacity-0 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
      style={{ animationDelay }}
    >
      <CardHeader className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan-400/80">&lt;project /&gt;</p>
        <CardTitle className="text-xl leading-tight text-slate-100 transition-colors group-hover:text-cyan-300">{project.title}</CardTitle>
        <p className="text-sm leading-relaxed text-slate-400">
          {project.impact ?? project.description}
        </p>
        <div className="flex flex-wrap gap-2" aria-label="Tecnologías principales">
          {visibleTechnologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        {highlights && highlights.length > 0 && (
          <section aria-label={`Logros técnicos de ${project.title}`}>
            <h4 className="mb-2 text-sm font-semibold text-slate-200">Logros técnicos</h4>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-400">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </CardContent>
      {projectLinks.length > 0 && (
        <CardFooter
          className={
            projectLinks.length === 1
              ? "p-6 pt-0"
              : "grid grid-cols-1 gap-2 p-6 pt-0 sm:grid-cols-2 [&>a:last-child]:sm:col-span-2"
          }
        >
          {projectLinks.map((link) => {
            const LinkIcon = getLinkIcon(link);

            return (
              <Button key={link.url} asChild variant="outline" size="sm" className="w-full">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label}: ${project.title}`}
                >
                  <LinkIcon className="h-4 w-4" aria-hidden="true" />
                  <span className="whitespace-nowrap">{link.label}</span>
                </a>
              </Button>
            );
          })}
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
