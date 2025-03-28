
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  objectives?: string;
  keyPoints?: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const animationDelay = `${0.1 + index * 0.1}s`;

  return (
    <Card className="animate-fade-in opacity-0 h-full flex flex-col" style={{ animationDelay }}>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech, i) => (
            <Badge key={i} variant="secondary" className="bg-secondary/20 text-secondary-foreground/80">
              {tech}
            </Badge>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        {project.objectives && (
          <div className="mb-4">
            <h4 className="font-medium text-sm mb-1">Objetivo:</h4>
            <p className="text-sm">{project.objectives}</p>
          </div>
        )}
        {project.keyPoints && project.keyPoints.length > 0 && (
          <div>
            <h4 className="font-medium text-sm mb-1">Puntos clave:</h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              {project.keyPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full"
        >
          <Button variant="outline" className="w-full">
            <Github className="mr-2 h-4 w-4" /> Ver en GitHub
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
