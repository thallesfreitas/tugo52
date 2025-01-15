import type { Meta, StoryObj } from "@storybook/react";
// import { SuggestionForm } from "@/components/features/suggestion/suggestion-form";
import { action } from "@storybook/addon-actions";
import { SuggestionForm } from "@/components/pages/suggestions";

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

// Simula o estado de loading do formulário
export const Loading: Story = {
	parameters: {
		mockData: {
			formStatus: {
				pending: true,
			},
		},
	},
};

// Simula preenchimento parcial
export const PartiallyFilled: Story = {
	parameters: {
		mockData: {
			formData: {
				title: "Minha Ideia Inovadora",
				problem: "Este é um problema que precisa ser resolvido...",
			},
		},
	},
};
