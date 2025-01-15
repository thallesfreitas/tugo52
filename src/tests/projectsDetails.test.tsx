import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectTechStack } from "@/components/pages/projects/project-tech-stack";
import { ProjectTimeline } from "@/components/pages/projects/project-timeline";
import { ProjectLessons } from "@/components/pages/projects/details/project-lessons";
import ProjectDetailPage from "@/app/[locale]/projects/[id]/page";

describe("ProjectTechStack", () => {
  const mockTech = ["Next.js", "TypeScript", "Tailwind"];

  it("renderiza todas as tecnologias", () => {
    render(<ProjectTechStack tech={mockTech} />);

    mockTech.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it("exibe ícones para cada tecnologia", () => {
    render(<ProjectTechStack tech={mockTech} />);

    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(mockTech.length);
    cards.forEach((card) => {
      expect(card).toHaveClass("p-4 flex items-center gap-3");
    });
  });

  it("mantém consistência visual com tecnologias longas", () => {
    const longTech = ["VeryLongTechnologyName", "AnotherLongOne"];
    render(<ProjectTechStack tech={longTech} />);

    const cards = screen.getAllByRole("article");
    cards.forEach((card) => {
      expect(card).toHaveClass("p-4 flex items-center gap-3");
    });
  });
});

describe("ProjectTimeline", () => {
  const mockTimeline = [
    {
      date: "2024-01-15",
      title: "Início",
      description: "Começo do projeto",
    },
    {
      date: "2024-01-21",
      title: "Conclusão",
      description: "Fim do projeto",
    },
  ];

  it("renderiza eventos em ordem cronológica", () => {
    render(<ProjectTimeline timeline={mockTimeline} />);

    const events = screen.getAllByRole("article");
    expect(events).toHaveLength(mockTimeline.length);

    // Verifica se as datas estão na ordem correta
    const dates = screen.getAllByRole("time");
    expect(dates[0]).toHaveTextContent("15 de janeiro");
    expect(dates[1]).toHaveTextContent("21 de janeiro");
  });

  it("exibe marcadores visuais para cada evento", () => {
    render(<ProjectTimeline timeline={mockTimeline} />);

    const markers = screen.getAllByTestId("timeline-marker");
    expect(markers).toHaveLength(mockTimeline.length);
    markers.forEach((marker) => {
      expect(marker).toHaveClass("bg-primary");
    });
  });

  it("mantém estrutura visual mesmo com descrições longas", () => {
    const timelineWithLongDesc = [
      {
        ...mockTimeline[0],
        description:
          "Uma descrição muito longa que testa como o layout se comporta com conteúdo extenso. ".repeat(
            3
          ),
      },
    ];

    render(<ProjectTimeline timeline={timelineWithLongDesc} />);

    const event = screen.getByRole("article");
    expect(event).toHaveClass("mb-8 ml-6");
  });
});

describe("ProjectLessons", () => {
  const mockLessons = [
    {
      title: "Server Components",
      description: "Aprendizados sobre Server Components",
    },
    {
      title: "Design System",
      description: "Implementação do design system",
    },
  ];

  it("renderiza todas as lições aprendidas", () => {
    render(<ProjectLessons lessons={mockLessons} />);

    mockLessons.forEach((lesson) => {
      expect(screen.getByText(lesson.title)).toBeInTheDocument();
      expect(screen.getByText(lesson.description)).toBeInTheDocument();
    });
  });

  it("exibe ícones para cada lição", () => {
    render(<ProjectLessons lessons={mockLessons} />);

    const icons = screen.getAllByTestId("lesson-icon");
    expect(icons).toHaveLength(mockLessons.length);
    icons.forEach((icon) => {
      expect(icon).toHaveClass("text-primary");
    });
  });

  it("mantém layout responsivo", () => {
    render(<ProjectLessons lessons={mockLessons} />);

    const container = screen.getByTestId("lessons-grid");
    expect(container).toHaveClass("grid gap-6 md:grid-cols-2");
  });

  it("lida com lições sem descrição", () => {
    const lessonsWithoutDesc = [{ title: "Apenas Título", description: "" }];

    render(<ProjectLessons lessons={lessonsWithoutDesc} />);

    expect(screen.getByText("Apenas Título")).toBeInTheDocument();
    const card = screen.getByRole("article");
    expect(card).not.toHaveClass("min-h-[200px]"); // Não deve ter altura mínima quando sem descrição
  });
});

// Teste da página de detalhes completa
describe("ProjectDetailPage", () => {
  const mockProject = {
    id: "1",
    title: "TUGO52",
    description: "Plataforma central do desafio",
    week: 1,
    tech: ["Next.js", "TypeScript"],
    status: "completed",
    timeSpent: 38,
    startDate: "2024-01-15",
    endDate: "2024-01-21",
    features: ["Feature 1", "Feature 2"],
    lessons: [{ title: "Lição 1", description: "Descrição 1" }],
    timeline: [{ date: "2024-01-15", title: "Início", description: "Começo" }],
  };

  it("renderiza todas as seções da página", () => {
    render(<ProjectDetailPage project={mockProject} />);

    // Header
    expect(
      screen.getByRole("heading", { name: mockProject.title })
    ).toBeInTheDocument();

    // Tabs
    expect(
      screen.getByRole("tab", { name: /visão geral/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /técnico/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /timeline/i })).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: /aprendizados/i })
    ).toBeInTheDocument();

    // Métricas
    expect(screen.getByText(`${mockProject.timeSpent}h`)).toBeInTheDocument();

    // CTAs
    expect(screen.getByRole("link", { name: /ver demo/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /ver código/i })
    ).toBeInTheDocument();
  });

  it("permite navegação entre tabs", async () => {
    const user = userEvent.setup();
    render(<ProjectDetailPage project={mockProject} />);

    // Clica na tab Timeline
    await user.click(screen.getByRole("tab", { name: /timeline/i }));
    expect(screen.getByRole("tabpanel", { name: /timeline/i })).toBeVisible();

    // Clica na tab Aprendizados
    await user.click(screen.getByRole("tab", { name: /aprendizados/i }));
    expect(
      screen.getByRole("tabpanel", { name: /aprendizados/i })
    ).toBeVisible();
  });
});
