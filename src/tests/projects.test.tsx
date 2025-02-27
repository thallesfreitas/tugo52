import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProjectsGrid } from "@/components/pages/projects/projects-grid";
import { ProjectsFilter } from "@/components/pages/projects/projects-filter";
import { ProjectCard } from "@/components/pages/projects/projects-card";
import { projectsMocks } from "@/@mocks/mock-projects";

describe("ProjectsGrid", () => {
  const mockProjects = [
    {
      id: "1",
      title: "Projeto 1",
      description: "Descrição 1",
      tech: ["Next.js"],
      week: 1,
      status: "completed",
    },
    {
      id: "2",
      title: "Projeto 2",
      description: "Descrição 2",
      tech: ["React"],
      week: 2,
      status: "in-progress",
    },
  ];

  it("renderiza grid de projetos corretamente", () => {
    render(<ProjectsGrid />);

    mockProjects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });

  it("exibe placeholders quando não há projetos", () => {
    render(<ProjectsGrid />);

    const placeholders = screen.getAllByText(/projeto futuro/i);
    expect(placeholders).toHaveLength(5);
  });
});

describe("ProjectsFilter", () => {
  const onFilterChange = vi.fn();

  it("permite filtrar por tecnologia", async () => {
    const user = userEvent.setup();
    render(<ProjectsFilter />);

    const filterButton = screen.getByRole("combobox");
    await user.click(filterButton);

    const nextjsOption = screen.getByRole("option", { name: /next\.js/i });
    await user.click(nextjsOption);

    expect(onFilterChange).toHaveBeenCalledWith(["nextjs"]);
  });

  it("permite múltipla seleção", async () => {
    const user = userEvent.setup();
    render(<ProjectsFilter />);

    const filterButton = screen.getByRole("combobox");
    await user.click(filterButton);

    const nextjsOption = screen.getByRole("option", { name: /next\.js/i });
    const reactOption = screen.getByRole("option", { name: /react/i });

    await user.click(nextjsOption);
    await user.click(reactOption);

    expect(onFilterChange).toHaveBeenCalledWith(["nextjs", "react"]);
  });
});

describe("ProjectCard", () => {
  const projects = projectsMocks;
  const mockProject = projects["en"][0];

  it("renderiza informações do projeto", () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();

    // Verifica badges
    expect(screen.getByText(/semana 1/i)).toBeInTheDocument();
    expect(screen.getByText(/completed/i)).toBeInTheDocument();

    // Verifica tecnologias
    mockProject.tech.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it("links externos funcionam corretamente", () => {
    render(<ProjectCard project={mockProject} />);

    const githubLink = screen.getByRole("link", { name: /github/i });
    const demoLink = screen.getByRole("link", { name: /demo/i });

    expect(githubLink).toHaveAttribute("href", mockProject.github);
    expect(demoLink).toHaveAttribute("href", mockProject.link);
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(demoLink).toHaveAttribute("target", "_blank");
  });
});
