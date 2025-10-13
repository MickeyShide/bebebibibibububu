import { describe, expect, it } from "vitest";

import { defaultProject, getProjectBySlug, projectDetailsMap } from "@/entities/project";

describe("getProjectBySlug", () => {
  it("returns project when slug is known", () => {
    const slug = Object.keys(projectDetailsMap)[0];
    const project = getProjectBySlug(slug);

    expect(project.slug).toBe(slug);
  });

  it("returns default project when slug is unknown", () => {
    const project = getProjectBySlug("unknown");

    expect(project).toEqual(defaultProject);
  });

  it("returns default project when slug is undefined", () => {
    const project = getProjectBySlug(undefined);

    expect(project).toEqual(defaultProject);
  });
});

