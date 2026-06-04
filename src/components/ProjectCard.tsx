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

  return [{ label: "Ver en GitHub", url: project.githubUrl, type: "github" }];
};

const getProjectDetails = (project: Project): ProjectDetail[] => {
  if (project.details?.length) {
    return project.details;
  }

  const details: ProjectDetail[] = [];

  if (project.objectives) {
    details.push({ title: "Objetivo", content: project.objectives });
  }

  if (project.keyPoints?.length) {
    details.push({ title: "Puntos clave", items: project.keyPoints });
  }

  return details;
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
  const projectDetails = getProjectDetails(project);

  return (
    <Card
      className="animate-fade-in opacity-0 h-full flex flex-col border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ animationDelay }}
    >
      <CardHeader className="space-y-4">
        <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-secondary/15 text-secondary-foreground/90">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
        {projectDetails.map((section) => (
          <section key={section.title} className="space-y-2">
            <h4 className="font-medium text-sm">{section.title}:</h4>
            {section.content && (
              <p className="text-muted-foreground text-sm leading-relaxed">{section.content}</p>
            )}
            {section.items && section.items.length > 0 && (
              <ul className="list-disc pl-5 text-muted-foreground text-sm leading-relaxed space-y-1">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </CardContent>
      {projectLinks.length > 0 && (
        <CardFooter
          className={
            projectLinks.length === 1
              ? "p-6 pt-0"
              : "grid grid-cols-1 gap-2 p-6 pt-0 sm:grid-cols-2"
          }
        >
          {projectLinks.map((link) => {
            const LinkIcon = getLinkIcon(link);

            return (
              <Button key={link.url} asChild variant="outline" size="sm" className="w-full min-w-0">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label}: ${project.title}`}
                >
                  <LinkIcon className="h-4 w-4" />
                  <span className="truncate">{link.label}</span>
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
