import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { WeekProgress } from "@/components/pages/home/home-week-progress";
import { ProjectHighlight } from "@/components/pages/home/project-highlight";

describe("WeekProgress", () => {
  it("mostra progresso correto para a semana atual", () => {
    render(<WeekProgress currentWeek={1} />);

    // Verifica se a barra de progresso está presente
    expect(screen.getByRole("progressbar")).toBeInTheDocument();

    // Verifica se mostra semana correta
    expect(screen.getByText(/semana 1/i)).toBeInTheDocument();

    // Verifica se há 52 indicadores de semana
    const indicators = screen.getAllByTestId("week-indicator");
    expect(indicators).toHaveLength(52);

    // Verifica se a primeira semana está ativa
    expect(indicators[0]).toHaveClass("bg-primary");
  });

  it("lida corretamente com última semana", () => {
    render(<WeekProgress currentWeek={52} />);

    const indicators = screen.getAllByTestId("week-indicator");

    // Verifica se todas as semanas estão marcadas como completas
    indicators.forEach((indicator) => {
      expect(indicator).toHaveClass("bg-primary");
    });
  });
});

describe("ProjectHighlight", () => {
  const mockProject = {
    title: "TUGO52",
    description: "Plataforma central do desafio",
    week: 1,
    tech: ["Next.js", "TypeScript"],
    link: "/projects/tugo52",
  };

  it("renderiza informações do projeto corretamente", () => {
    render(<ProjectHighlight {...mockProject} />);

    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
    expect(screen.getByText(/semana 1/i)).toBeInTheDocument();

    // Verifica se todas as tecnologias são mostradas
    mockProject.tech.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it("link direciona para página correta do projeto", () => {
    render(<ProjectHighlight {...mockProject} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", mockProject.link);
  });
});
