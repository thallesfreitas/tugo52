import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SuggestionForm } from "@/components/features/suggestion/suggestion-form";

describe("SuggestionForm", () => {
  const mockSubmit = vi.fn();
  const user = userEvent.setup();

  beforeEach(() => {
    mockSubmit.mockClear();
  });

  it("renderiza o formulário corretamente", () => {
    render(<SuggestionForm onSubmit={mockSubmit} />);

    expect(screen.getByLabelText(/título/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/descrição/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tecnologias/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/complexidade/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/estimativa/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /enviar/i })).toBeInTheDocument();
  });

  it("valida campos obrigatórios", async () => {
    render(<SuggestionForm onSubmit={mockSubmit} />);

    await user.click(screen.getByRole("button", { name: /enviar/i }));

    await waitFor(() => {
      expect(screen.getByText(/título.*obrigatório/i)).toBeInTheDocument();
      expect(screen.getByText(/descrição.*obrigatória/i)).toBeInTheDocument();
      expect(screen.getByText(/selecione.*tecnologia/i)).toBeInTheDocument();
    });

    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it("valida comprimento mínimo dos campos", async () => {
    render(<SuggestionForm onSubmit={mockSubmit} />);

    await user.type(screen.getByLabelText(/título/i), "ab");
    await user.type(screen.getByLabelText(/descrição/i), "curta");
    await user.click(screen.getByRole("button", { name: /enviar/i }));

    await waitFor(() => {
      expect(screen.getByText(/título.*menos.*3/i)).toBeInTheDocument();
      expect(screen.getByText(/descrição.*menos.*10/i)).toBeInTheDocument();
    });

    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it("permite submissão com dados válidos", async () => {
    render(<SuggestionForm onSubmit={mockSubmit} />);

    const validData = {
      title: "Projeto Teste",
      description: "Uma descrição válida para o projeto de teste",
      techStack: ["react"],
      complexity: "media",
      timeEstimate: 8,
      references: "https://exemplo.com",
    };

    await user.type(screen.getByLabelText(/título/i), validData.title);
    await user.type(screen.getByLabelText(/descrição/i), validData.description);
    await user.selectOptions(
      screen.getByLabelText(/tecnologias/i),
      validData.techStack
    );
    await user.selectOptions(
      screen.getByLabelText(/complexidade/i),
      validData.complexity
    );
    await user.type(
      screen.getByLabelText(/estimativa/i),
      validData.timeEstimate.toString()
    );
    await user.type(
      screen.getByLabelText(/referências/i),
      validData.references
    );

    await user.click(screen.getByRole("button", { name: /enviar/i }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith(validData);
    });
  });

  it("desabilita o formulário durante submissão", async () => {
    render(
      <SuggestionForm
        onSubmit={async () => {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }}
      />
    );

    const submitButton = screen.getByRole("button", { name: /enviar/i });

    await user.click(submitButton);

    expect(submitButton).toBeDisabled();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    });
  });

  it("mostra mensagem de erro na falha da submissão", async () => {
    const mockError = new Error("Erro ao enviar sugestão");
    render(<SuggestionForm onSubmit={() => Promise.reject(mockError)} />);

    await user.click(screen.getByRole("button", { name: /enviar/i }));

    await waitFor(() => {
      expect(screen.getByText(/erro ao enviar/i)).toBeInTheDocument();
    });
  });
});
