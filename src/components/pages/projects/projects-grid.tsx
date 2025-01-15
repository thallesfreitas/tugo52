"use client";

import { useLocale, useTranslations } from "next-intl";
import { ProjectCard } from "./projects-card";
import { LocalizedProject } from "../../../@types/projects";
import { projectsMocks } from "../../../@mocks/mock-projects";
import { Locale } from "@/@types";
import { ProjectHighlight } from "../home/home-week-progress";

export function ProjectsGrid() {
  const locale = useLocale() as Locale;
  const projects = projectsMocks;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects[locale].map((project: LocalizedProject) => (
        <ProjectCard key={project.id} project={project} />
      ))}

      {Array.from({ length: 4 }).map((_, i) => (
        <ProjectHighlight key={`placeholder-${i + 1}`} />
      ))}
    </div>
  );
}
