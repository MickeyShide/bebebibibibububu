import type { ProjectDetails, ProjectSummary } from "../model/project";

const projectDetails = [
  {
    slug: "flowerave",
    title: "FLOWERAVE",
    tagline: "microservice mesh // qr-sync",
    coverImage: "/imgs/bg-1.jpg",
    description:
      "Microservice-driven retail ecosystem for festival merch. Enables QR-synced loyalty tracking with on-site kiosks and instant restock telemetry.",
    technologies: ["fastapi", "postgresql", "redis streams", "kafka", "docker", "grafana"],
    gallery: ["/imgs/bg-1.jpg", "/imgs/flowerave.jpg", "/imgs/shide.png"],
  },
  {
    slug: "skanyshi",
    title: "SKANYSHI",
    tagline: "collectible map layer // yandex maps",
    coverImage: "/imgs/bg-2.png",
    description:
      "Gamified collectible layer above Yandex Maps with AR treasure hunts and NFC check-ins for offline venues and pop-up stores.",
    technologies: ["fastapi", "geoalchemy", "s3", "yandex maps sdk", "celery"],
    gallery: ["/imgs/bg-2.png", "/imgs/profile.png", "/imgs/bg-1.jpg"],
  },
  {
    slug: "coreapi",
    title: "COREAPI",
    tagline: "orchestration core // fintech platform",
    coverImage: "/imgs/shide.png",
    description:
      "Modular API core for fintech orchestration: handles auth federation, idempotent webhooks, streaming analytics, and zero-downtime deploys.",
    technologies: ["python", "asyncio", "fastapi", "kubernetes", "clickhouse", "otel"],
    gallery: ["/imgs/shide.png", "/imgs/profile.png", "/imgs/bg-2.png"],
  },
] satisfies readonly ProjectDetails[];

export const projectSummaries: ProjectSummary[] = projectDetails.map(
  ({ description: _description, technologies: _technologies, gallery: _gallery, ...summary }) =>
    summary,
);

export const projectDetailsMap: Record<ProjectDetails["slug"], ProjectDetails> =
  projectDetails.reduce(
    (acc, project) => {
      acc[project.slug] = project;
      return acc;
    },
    {} as Record<ProjectDetails["slug"], ProjectDetails>,
  );

const fallbackBase = projectDetails[0];

export const defaultProject: ProjectDetails = {
  ...fallbackBase,
  title: "UNKNOWN",
  tagline: "portfolio placeholder",
  coverImage: "/imgs/bg-1.jpg",
  description:
    "This project is still brewing in the underground lab. Check back soon for more signal.",
  technologies: ["python", "fastapi", "redis"],
  gallery: ["/imgs/bg-1.jpg", "/imgs/bg-2.png"],
};

export const projectSlugs = projectDetails.map((project) => project.slug);
