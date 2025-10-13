import { defaultProject, projectDetailsMap } from "../data/projects";

import type { ProjectDetails, ProjectSlug } from "../model/project";

const normalizeSlug = (slug: string): ProjectSlug | null => {
  const candidate = slug.toLowerCase() as ProjectSlug;
  return candidate in projectDetailsMap ? candidate : null;
};

export const getProjectBySlug = (slug: string | undefined): ProjectDetails => {
  if (!slug) {
    return defaultProject;
  }

  const normalized = normalizeSlug(slug);
  return normalized ? projectDetailsMap[normalized] : defaultProject;
};
