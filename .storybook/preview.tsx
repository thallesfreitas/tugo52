import React from "react";
import { NextIntlClientProvider } from "next-intl";
import type { Preview } from "@storybook/react";
import defaultMessages from "../src/locales/pt.json";

const preview: Preview = {
	decorators: [
		(Story) => (
			<NextIntlClientProvider locale="pt" messages={defaultMessages}>
				<Story />
			</NextIntlClientProvider>
		),
	],
};

export default preview;
