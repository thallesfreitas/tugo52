// import type { ReactNode } from "react";

// interface RootLayoutProps {
// 	children: ReactNode;
// }

// export const metadata = {
// 	title: "TUGO52 - 52 semanas, 52 projetos",
// 	description:
// 		"Um desafio pessoal de criar 52 microprojetos/MVPs em 52 semanas",
// };

// export default function RootLayout({ children }: RootLayoutProps) {
// 	return <>{children}</>;
// 	// <html lang="pt" suppressHydrationWarning>
// 	// 	<body>{children}</body>
// 	// </html>
// }

import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
	return children;
}
