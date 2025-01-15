import type { Meta, StoryObj } from "@storybook/react";
import { WeekProgress } from "@/components/pages/home/home-week-progress";

const meta = {
  title: "Features/WeekProgress",
  component: WeekProgress,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    currentWeek: {
      control: { type: "range", min: 1, max: 52 },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-4xl mx-auto">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof WeekProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Week1: Story = {
  args: {
    currentWeek: 1,
  },
};

export const Week26: Story = {
  args: {
    currentWeek: 26,
  },
};

export const Week52: Story = {
  args: {
    currentWeek: 52,
  },
};
