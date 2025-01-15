import type { Meta, StoryObj } from "@storybook/react";
import { ProjectLessons } from "@/components/pages/projects/details/project-lessons";

const meta = {
  title: "Features/Projects/ProjectLessons",
  component: ProjectLessons,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-3xl mx-auto">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProjectLessons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
  },
};

export const SingleLesson: Story = {
  args: {
    lessons: [
      {
        title: "Server Components",
        description:
          "Aprendizados sobre o uso eficiente de Server e Client Components no Next.js 14",
      },
    ],
  },
};

export const ManyLessons: Story = {
  args: {
    lessons: Array.from({ length: 6 }, (_, i) => ({
      title: `Aprendizado ${i + 1}`,
      description: `Descrição do aprendizado ${
        i + 1
      } durante o desenvolvimento do projeto.`,
    })),
  },
};

export const LongContent: Story = {
  args: {
    lessons: [
      {
        title: "Um título muito longo para testar o layout do componente",
        description:
          "Uma descrição muito longa que testa como o componente lida com conteúdo extenso. ".repeat(
            3
          ),
      },
      {
        title: "Outro título longo para verificar alinhamento",
        description:
          "Mais uma descrição extensa para garantir que o layout funciona corretamente. ".repeat(
            2
          ),
      },
    ],
  },
};
