import { ProjectTimeline } from "@/components/pages/projects/details/project-timeline";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features/Projects/ProjectTimeline",
  component: ProjectTimeline,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-2xl mx-auto">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProjectTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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

export const SingleEvent: Story = {
  args: {
    timeline: [
      {
        date: "2024-01-15",
        title: "Início do Projeto",
        description: "Setup inicial e planejamento da arquitetura",
      },
    ],
  },
};

export const LongTimeline: Story = {
  args: {
    timeline: Array.from({ length: 7 }, (_, i) => ({
      date: new Date(2024, 0, 15 + i).toISOString(),
      title: `Evento ${i + 1}`,
      description: `Descrição do evento ${i + 1} no projeto`,
    })),
  },
};

export const WithLongDescriptions: Story = {
  args: {
    timeline: [
      {
        date: "2024-01-15",
        title: "Início do Projeto",
        description:
          "Uma descrição muito longa que testa como o componente lida com textos extensos. ".repeat(
            3
          ),
      },
      {
        date: "2024-01-18",
        title: "Desenvolvimento em Andamento",
        description:
          "Outra descrição longa para testar o layout e a formatação do componente. ".repeat(
            2
          ),
      },
    ],
  },
};
