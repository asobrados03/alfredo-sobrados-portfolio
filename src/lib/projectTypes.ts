import { ExternalLink, FileText } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";

export type ProjectLinkType = "github" | "document" | "external";

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

export interface ProjectTechnologyGroup {
    title: string;
    technologies: string[];
}

export interface ProjectFeaturedMetric {
    value: string;
    label: string;
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
    technologyGroups?: ProjectTechnologyGroup[];
    featuredMetric?: ProjectFeaturedMetric;
    showHighlightsInDialog?: boolean;
}

/** Límites de lo que se muestra en la tarjeta; el resto vive en el diálogo. */
export const CARD_MAX_TECHNOLOGIES = 5;
export const CARD_MAX_HIGHLIGHTS = 3;

export const getProjectLinks = (project: Project): ProjectLink[] => {
    if (project.links?.length) {
        return project.links;
    }

    if (!project.githubUrl) {
        return [];
    }

    return [{ label: "Ver código", url: project.githubUrl, type: "github" }];
};

export const getLinkIcon = (link: ProjectLink) => {
    if (link.type === "document") {
        return FileText;
    }

    if (link.type === "github" || link.url.includes("github.com")) {
        return GitHubIcon;
    }

    return ExternalLink;
};

/** true si hay información que la tarjeta no muestra y merece el botón "Ver detalles". */
export const hasMoreInfo = (project: Project): boolean =>
    (!!project.impact && project.impact !== project.description) ||
    !!project.objectives ||
    !!project.keyPoints?.length ||
    !!project.details?.length ||
    project.technologies.length > CARD_MAX_TECHNOLOGIES ||
    (project.highlights?.length ?? 0) > CARD_MAX_HIGHLIGHTS;