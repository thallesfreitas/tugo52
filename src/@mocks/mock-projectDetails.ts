import { ProjectDetails } from "../@types/projectDetails";

export const projectDetailMock: ProjectDetails = {
  en: {
    id: "1",
    title: "TUGO52",
    description: "Central platform for the 52 projects in 52 weeks challenge",
    week: 1,
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    complexity: "Medium",
    status: "completed",
    github: "https://github.com/user/tugo52",
    demo: "https://tugo52.com",
    timeSpent: 38, // hours
    startDate: "2024-01-15",
    endDate: "2024-01-21",
    features: [
      "Authentication system",
      "Projects dashboard",
      "Suggestions form",
      "RESTful API",
      "Responsive design",
    ],
    lessons: [
      {
        title: "Server Components",
        description:
          "Learnings about efficient use of Server and Client Components in Next.js 14",
      },
      {
        title: "Design System",
        description:
          "Implementation of a scalable design system with Tailwind and shadcn/ui",
      },
    ],
    timeline: [
      {
        date: "2024-01-15",
        title: "Project Start",
        description: "Initial setup and architecture planning",
      },
      {
        date: "2024-01-18",
        title: "MVP Completed",
        description: "Core features implemented",
      },
      {
        date: "2024-01-21",
        title: "Launch",
        description: "Official deployment and launch",
      },
    ],
  },
  pt: {
    id: "1",
    title: "TUGO52",
    description: "Plataforma central do desafio de 52 projetos em 52 semanas",
    week: 1,
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    complexity: "Média",
    status: "completed",
    github: "https://github.com/user/tugo52",
    demo: "https://tugo52.com",
    timeSpent: 38, // horas
    startDate: "2024-01-15",
    endDate: "2024-01-21",
    features: [
      "Sistema de autenticação",
      "Dashboard de projetos",
      "Formulário de sugestões",
      "API RESTful",
      "Design responsivo",
    ],
    lessons: [
      {
        title: "Server Components",
        description:
          "Aprendizados sobre o uso eficiente de Server e Client Components no Next.js 14",
      },
      {
        title: "Design System",
        description:
          "Implementação de um design system escalável com Tailwind e shadcn/ui",
      },
    ],
    timeline: [
      {
        date: "2024-01-15",
        title: "Início do Projeto",
        description: "Setup inicial e planejamento da arquitetura",
      },
      {
        date: "2024-01-18",
        title: "MVP Concluído",
        description: "Funcionalidades principais implementadas",
      },
      {
        date: "2024-01-21",
        title: "Lançamento",
        description: "Deploy e lançamento oficial",
      },
    ],
  },
};
