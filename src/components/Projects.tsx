import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import ProjectDetailsDialog from "./ProjectDetailsDialog";
import { hasMoreInfo, type Project, type ProjectDetail, type ProjectLinkType } from "@/lib/projectTypes";

type ProjectId = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13";
type ProjectTranslationKey = `items.${ProjectId}`;

interface ProjectDefinition {
  id: number;
  translationKey: ProjectId;
  technologies: string[];
  technologyGroups?: { key: string; technologies: string[] }[];
  links?: { key: string; url: string; type?: ProjectLinkType }[];
  githubUrl?: string;
  showHighlightsInDialog?: boolean;
}

interface ProjectTranslation {
  title: string;
  description: string;
  impact?: string;
  highlights?: string[];
  featuredMetric?: { value: string; label: string };
  technologyGroups?: Record<string, string>;
  links?: Record<string, string>;
  details?: ProjectDetail[];
  objectives?: string;
  keyPoints?: string[];
}

const projectDefinitions: ProjectDefinition[] = [
  {
    id: 1,
    translationKey: "1",
    technologies: [
      "Kotlin Multiplatform",
      "Jetpack Compose",
      "SwiftUI",
      "Node.js",
      "Express.js",
      "MariaDB",
      "JWT",
      "Clean Architecture",
      "Hexagonal Architecture",
    ],
    technologyGroups: [
      {
        key: "mobile",
        technologies: ["Kotlin Multiplatform", "Jetpack Compose", "SwiftUI"],
      },
      {
        key: "backend",
        technologies: ["Node.js", "Express.js"],
      },
      {
        key: "dataSecurity",
        technologies: ["MariaDB", "JWT"],
      },
      {
        key: "architecture",
        technologies: ["Clean Architecture", "Hexagonal principles"],
      },
    ],
    links: [
      {
        key: "appCode",
        url: "https://github.com/asobrados03/HumanPerformApp",
        type: "github",
      },
      {
        key: "apiCode",
        url: "https://github.com/asobrados03/api_rest_human_app",
        type: "github",
      },
      {
        key: "thesis",
        url: "https://uvadoc.uva.es/handle/10324/84418",
        type: "document",
      },
    ],
    showHighlightsInDialog: false,
  },
  {
    id: 13,
    translationKey: "13",
    technologies: [
      "Python 3.11+",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "Pydantic",
      "Ollama",
      "Docker",
      "GitHub Actions",
      "pytest",
    ],
    technologyGroups: [
      {
        key: "backend",
        technologies: ["Python 3.11+", "FastAPI", "Pydantic"],
      },
      {
        key: "data",
        technologies: ["SQLAlchemy", "SQLite"],
      },
      {
        key: "ai",
        technologies: ["Ollama"],
      },
      {
        key: "quality",
        technologies: ["pytest", "Docker", "GitHub Actions"],
      },
    ],
    links: [
      {
        key: "code",
        url: "https://github.com/asobrados03/ai-incident-triage",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
  },
  {
    id: 2,
    translationKey: "2",
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Zod",
      "Vercel",
      "Supabase",
      "Resend",
      "reCAPTCHA v3",
    ],
    technologyGroups: [
      {
        key: "frontend",
        technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
      },
      {
        key: "forms",
        technologies: ["Zod"],
      },
      {
        key: "backend",
        technologies: ["Vercel Functions", "Supabase", "Resend", "reCAPTCHA v3"],
      },
      {
        key: "testing",
        technologies: ["Vitest"],
      },
    ],
    links: [
      {
        key: "code",
        url: "https://github.com/asobrados03/geotecnia-servicios-landing",
        type: "github",
      },
      {
        key: "website",
        url: "https://www.geotecniayservicios.es/",
        type: "external",
      },
    ],
  },
  {
    id: 10,
    translationKey: "10",
    technologies: ["TypeScript", "React", "Next.js", "SQLite", "Node.js", "OpenAI API", "Testing"],
    technologyGroups: [
      {
        key: "frontend",
        technologies: ["TypeScript", "React", "Next.js"],
      },
      {
        key: "backend",
        technologies: ["Node.js", "SQLite"],
      },
      {
        key: "ai",
        technologies: ["OpenAI API"],
      },
      {
        key: "quality",
        technologies: ["Testing"],
      },
    ],
    links: [
      {
        key: "repository",
        url: "https://github.com/asobrados03/banana-bank-hackathon-case-study",
        type: "github",
      },
    ],
  },
  {
    id: 11,
    translationKey: "11",
    technologies: ["Python 3.11+", "ESIOS/REE API", "CSV", "argparse", "zoneinfo", "unittest"],
    technologyGroups: [
      {
        key: "language",
        technologies: ["Python 3.11+"],
      },
      {
        key: "data",
        technologies: ["ESIOS/REE API", "CSV"],
      },
      {
        key: "cli",
        technologies: ["argparse", "zoneinfo"],
      },
      {
        key: "testing",
        technologies: ["unittest"],
      },
    ],
    links: [
      {
        key: "code",
        url: "https://github.com/asobrados03/energy-deficit",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
  },
  {
    id: 3,
    translationKey: "3",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Material Design 3",
      "Room",
      "Gradle KTS",
      "Android Studio",
      "MVVM",
      "Repository",
    ],
    technologyGroups: [
      {
        key: "android",
        technologies: ["Kotlin", "Jetpack Compose", "Material Design 3"],
      },
      {
        key: "dataArchitecture",
        technologies: ["Room", "MVVM", "Repository"],
      },
      {
        key: "tools",
        technologies: ["Gradle KTS", "Android Studio"],
      },
    ],
    links: [
      {
        key: "code",
        url: "https://github.com/asobrados03/Finanzas_Personales",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
  },
  {
    id: 4,
    translationKey: "4",
    technologies: [
      "Java 21+",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JDBC",
      "MariaDB",
      "Docker",
      "Swagger/OpenAPI",
      "JUnit5",
      "Mockito",
      "Testcontainers",
      "Gradle",
    ],
    technologyGroups: [
      {
        key: "backend",
        technologies: ["Java 21+", "Spring Boot", "Hexagonal architecture"],
      },
      {
        key: "dataSecurity",
        technologies: ["JDBC", "MariaDB", "Spring Security", "JWT"],
      },
      {
        key: "testing",
        technologies: ["JUnit 5", "Mockito", "Testcontainers"],
      },
      {
        key: "tooling",
        technologies: ["Gradle", "Docker", "Swagger/OpenAPI", "Redis", "RabbitMQ"],
      },
    ],
    links: [
      {
        key: "code",
        url: "https://github.com/asobrados03/HotelManagementAPI",
        type: "github",
      },
    ],
  },
  {
    id: 12,
    translationKey: "12",
    technologies: ["Java", "Java EE 7", "JPA", "EclipseLink", "PrimeFaces", "Maven", "QRGen", "Barcode4j"],
    technologyGroups: [
      {
        key: "web",
        technologies: ["Java", "Java EE 7", "PrimeFaces"],
      },
      {
        key: "dataAccess",
        technologies: ["JPA", "EclipseLink", "PostgreSQL", "JDBC Realm"],
      },
      {
        key: "build",
        technologies: ["Maven", "QRGen", "Barcode4j"],
      },
    ],
    links: [
      {
        key: "code",
        url: "https://github.com/asobrados03/PetAdopt",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
  },
  {
    id: 5,
    translationKey: "5",
    technologies: ["Java", "NetBeans", "OOP", "Design patterns"],
    technologyGroups: [
      {
        key: "language",
        technologies: ["Java", "NetBeans"],
      },
      {
        key: "design",
        technologies: ["Object-oriented programming", "Design patterns"],
      },
    ],
    links: [
      {
        key: "code",
        url: "https://github.com/asobrados03/Practica_FINAL_CentroDeConvenciones",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
  },
  {
    id: 6,
    translationKey: "6",
    technologies: ["HTML", "CSS", "PHP", "JavaScript", "jQuery", "LAMP"],
    technologyGroups: [
      {
        key: "interface",
        technologies: ["HTML", "CSS"],
      },
      {
        key: "server",
        technologies: ["PHP", "MySQL"],
      },
      {
        key: "interaction",
        technologies: ["JavaScript", "jQuery"],
      },
      {
        key: "environment",
        technologies: ["Virtualised LAMP"],
      },
    ],
    links: [
      {
        key: "code",
        url: "https://github.com/asobrados03/TWEB-Notificador-Avisos",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
  },
  {
    id: 7,
    translationKey: "7",
    technologies: ["Java", "Data structures", "Algorithms"],
    technologyGroups: [
      {
        key: "language",
        technologies: ["Java"],
      },
      {
        key: "concepts",
        technologies: ["Data structures", "Algorithms"],
      },
    ],
    links: [
      {
        key: "code",
        url: "https://github.com/asobrados03/Practicas-Programacion-y-Estructuras-de-Datos",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
  },
  {
    id: 8,
    translationKey: "8",
    technologies: ["Java", "Thread", "Runnable", "TCP Sockets", "Distributed systems"],
    technologyGroups: [
      {
        key: "language",
        technologies: ["Java"],
      },
      {
        key: "concurrency",
        technologies: ["Thread", "Runnable", "ExecutorService", "BlockingQueue"],
      },
      {
        key: "communication",
        technologies: ["TCP Sockets", "Command protocol"],
      },
      {
        key: "area",
        technologies: ["Distributed systems"],
      },
    ],
    links: [
      {
        key: "code",
        url: "https://github.com/asobrados03/Practicas_Sistemas_Distribuidos",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
  },
  {
    id: 9,
    translationKey: "9",
    technologies: ["Java", "Swing", "AWT GUI"],
    technologyGroups: [
      {
        key: "language",
        technologies: ["Java"],
      },
      {
        key: "gui",
        technologies: ["Swing", "AWT GUI"],
      },
    ],
    links: [
      {
        key: "code",
        url: "https://github.com/asobrados03/PracticaFinalArkanoid",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
  },
];

const createProject = (definition: ProjectDefinition, translation: ProjectTranslation): Project => ({
  id: definition.id,
  title: translation.title,
  description: translation.description,
  impact: translation.impact,
  highlights: translation.highlights,
  technologies: definition.technologies,
  technologyGroups: definition.technologyGroups?.map((group) => ({
    title: translation.technologyGroups?.[group.key] ?? group.key,
    technologies: group.technologies,
  })),
  links: definition.links?.map((link) => ({
    label: translation.links?.[link.key] ?? link.key,
    url: link.url,
    type: link.type,
  })),
  details: translation.details,
  objectives: translation.objectives,
  keyPoints: translation.keyPoints,
  featuredMetric: translation.featuredMetric,
  showHighlightsInDialog: definition.showHighlightsInDialog,
  githubUrl: definition.githubUrl,
});

interface ProjectsProps {
  id: string;
  title: string;
  description: string;
  variant: "featured" | "more";
}

const featuredProjectIds = [1, 13, 2, 4];

const Projects = ({ id, title, description, variant }: ProjectsProps) => {
  const { t } = useTranslation();
  const { t: tProjects } = useTranslation("projects");

  const projectsData: Project[] = projectDefinitions.map((definition) => {
    const translationKey: ProjectTranslationKey = `items.${definition.translationKey}`;
    const translation = tProjects(translationKey, {
      returnObjects: true,
    });

    return createProject(definition, translation);
  });

  const projects =
    variant === "featured"
      ? featuredProjectIds.map((id) => projectsData.find((project) => project.id === id)!)
      : projectsData.filter((project) => !featuredProjectIds.includes(project.id));
  const compact = variant === "more";

  return (
    <section id={id} className="section-divider px-4 py-20 md:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="mb-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">{t("projects.eyebrow")}</p>
        <h2 className="mb-2 text-center text-3xl font-bold text-slate-100 md:text-4xl">{title}</h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-slate-400">
          {description}
        </p>
        {compact ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => {
              const repositoryUrl = project.githubUrl ?? project.links?.find(
                (link) => link.type === "github" || link.url.includes("github.com"),
              )?.url;

              return (
              <article key={project.id} className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-5 text-slate-100 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]">
                <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                  {hasMoreInfo(project) && (
                      <ProjectDetailsDialog project={project}>
                        <Button variant="link" className="h-auto min-h-11 px-0 text-cyan-400">
                          {t("projects.viewDetails")}
                        </Button>
                      </ProjectDetailsDialog>
                  )}
                  {repositoryUrl && (
                      <Button asChild variant="link" className="h-auto min-h-11 px-0">
                        <a
                            href={repositoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t("accessibility.viewProjectOnGithub", { title: project.title })}
                        >
                          {t("projects.viewRepository")} <GitHubIcon className="ml-2 h-4 w-4" aria-hidden="true" />
                        </a>
                      </Button>
                  )}
                </div>
              </article>
              );
            })}
          </div>
        ) : (
            <div className={"grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"}>
              {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
