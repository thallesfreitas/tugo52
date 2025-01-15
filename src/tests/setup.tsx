import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

// Extende os matchers do Jest com os do Testing Library
expect.extend(matchers);

// Mock do next/navigation
vi.mock("next/navigation", () => ({
	useRouter: () => ({
		push: vi.fn(),
		replace: vi.fn(),
		refresh: vi.fn(),
		back: vi.fn(),
		prefetch: vi.fn(),
	}),
	useParams: () => ({}),
	usePathname: () => "",
	useSearchParams: () => new URLSearchParams(),
}));

// Mock do next/image
vi.mock("next/image", () => ({
	default: vi
		.fn()
		.mockImplementation(({ src, alt, ...props }) => (
			<img src={src} alt={alt} {...props} />
		)),
}));

// Mock da API do filesystem
global.window.fs = {
	readFile: vi.fn(),
	writeFile: vi.fn(),
};

// Limpa todos os mocks após cada teste
afterEach(() => {
	vi.clearAllMocks();
});
