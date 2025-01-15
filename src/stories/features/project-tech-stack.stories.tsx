import { ProjectTechStack } from "@/components/pages/projects/details/project-tech-stack";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features/Projects/ProjectTechStack",
  component: ProjectTechStack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-3xl w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProjectTechStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tech: ["Next.js", "TypeScript", "Tailwind", "React"],
  },
};

export const LongList: Story = {
  args: {
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],
  },
};

export const SingleTechnology: Story = {
  args: {
    tech: ["Next.js"],
  },
};

export const LongTechnologyNames: Story = {
  args: {
    tech: [
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
    ],
  },
};
