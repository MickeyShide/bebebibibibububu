export type ProjectSlug = "flowerave" | "skanyshi" | "coreapi";

export interface ProjectSummary {
  slug: ProjectSlug;
  title: string;
  tagline: string;
  coverImage: string;
}

export interface ProjectDetails extends ProjectSummary {
  description: string;
  technologies: readonly string[];
  gallery: readonly string[];
}
