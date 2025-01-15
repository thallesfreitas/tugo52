import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

expect.extend(matchers);

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

global.window.fs = {
  readFile: vi.fn(),
  writeFile: vi.fn(),
};

afterEach(() => {
  vi.clearAllMocks();
});
