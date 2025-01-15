import { SuggestionForm } from "@/components/pages/suggestions/suggestions-form";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features/Suggestion/SuggestionForm",
  component: SuggestionForm,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl mx-auto">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof SuggestionForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  parameters: {
    mockData: {
      formStatus: {
        pending: true,
      },
    },
  },
};

export const PartiallyFilled: Story = {
  parameters: {
    mockData: {
      formData: {
        title: "My big idea",
        problem: "This is a problem that needs to be solved...",
      },
    },
  },
};
