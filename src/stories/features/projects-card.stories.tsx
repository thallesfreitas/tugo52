import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "../../components/pages/projects/projects-card";

const meta = {
  title: "Features/Projects/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    project: {
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
  },
};

export const LongDescription: Story = {
  args: {
    project: {
      ...Default.args!.project!,
      description:
        "Uma descrição muito longa que testa como o cartão lida com conteúdo extenso. ".repeat(
          3
        ),
    },
  },
};

export const ManyTechnologies: Story = {
  args: {
    project: {
      ...Default.args!.project!,
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "React",
        "Node.js",
        "PostgreSQL",
      ],
    },
  },
};
