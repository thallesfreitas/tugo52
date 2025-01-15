import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "@/components/layout/header";

describe("Header", () => {
  it("renderiza logo e navegação", () => {
    render(<Header />);

    expect(screen.getByText("TUGO52")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /projetos/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /sugerir/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /sobre/i })).toBeInTheDocument();
  });

  it("links de navegação apontam para as rotas corretas", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: /projetos/i })).toHaveAttribute(
      "href",
      "/projects"
    );
    expect(screen.getByRole("link", { name: /sugerir/i })).toHaveAttribute(
      "href",
      "/suggest"
    );
    expect(screen.getByRole("link", { name: /sobre/i })).toHaveAttribute(
      "href",
      "/about"
    );
  });

  it("tema escuro pode ser alternado", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const themeButton = screen.getByRole("button", { name: /alternar tema/i });
    await user.click(themeButton);

    expect(themeButton).toHaveAttribute("aria-pressed", "true");
  });

  it("menu mobile pode ser aberto e fechado", async () => {
    const user = userEvent.setup();
    render(<Header />);

    expect(screen.queryByRole("navigation")).not.toBeVisible();

    const menuButton = screen.getByRole("button", { name: /menu/i });
    await user.click(menuButton);

    expect(screen.getByRole("navigation")).toBeVisible();
  });
});
