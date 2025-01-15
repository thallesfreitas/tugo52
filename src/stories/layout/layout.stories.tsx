import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Header Stories
const headerMeta = {
	title: "Layout/Header",
	component: Header,
	parameters: {
		layout: "fullscreen",
	},
	decorators: [
		(Story) => (
			<div className="relative min-h-[200px]">
				<Story />
			</div>
		),
	],
	tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default headerMeta;
type HeaderStory = StoryObj<typeof headerMeta>;

export const DefaultHeader: HeaderStory = {};

export const HeaderWithScroll: HeaderStory = {
	decorators: [
		(Story) => (
			<div className="relative min-h-[1000px]">
				<Story />
				<div className="h-[2000px] bg-gradient-to-b from-background to-muted">
					Conteúdo para scroll
				</div>
			</div>
		),
	],
};

// Footer Stories
const footerMeta = {
	title: "Layout/Footer",
	component: Footer,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export const DefaultFooter: StoryObj<typeof footerMeta> = {};
