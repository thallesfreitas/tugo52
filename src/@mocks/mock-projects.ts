import { Project } from "../@types/projects";

export const projectsMocks: Project = {
  en: [
    {
      id: "1",
      title: "TUGO52",
      description: "Central platform for the 52 projects in 52 weeks challenge",
      week: 1,
      tech: ["Next.js", "TypeScript", "Tailwind"],
      complexity: "Medium",
      status: "completed",
      github: "https://github.com/user/tugo52",
      link: "https://tugo52.com",
    },
  ],
  pt: [
    {
      id: "1",
      title: "TUGO52",
      description: "Plataforma central do desafio de 52 projetos em 52 semanas",
      week: 1,
      tech: ["Next.js", "TypeScript", "Tailwind"],
      complexity: "Média",
      status: "completed",
      github: "https://github.com/user/tugo52",
      link: "https://tugo52.com",
    },
  ],
};
