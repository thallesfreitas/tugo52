import { describe, it, expect, vi, beforeEach } from "vitest";
import { createSuggestion, getSuggestions } from "@/lib/api/suggestions";

describe("API de Sugestões", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe("createSuggestion", () => {
    it("envia dados corretamente para a API", async () => {
      const mockFetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ id: "1" }),
        })
      );
      global.fetch = mockFetch;

      const suggestionData = {
        title: "Teste",
        description: "Descrição teste",
        techStack: ["react"],
        complexity: "media",
        timeEstimate: 8,
      };

      const result = await createSuggestion(suggestionData);

      expect(mockFetch).toHaveBeenCalledWith(
        "/api/suggestions",
        expect.objectContaining({
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(suggestionData),
        })
      );

      expect(result).toEqual({ id: "1" });
    });

    it("lida com erros da API corretamente", async () => {
      const errorMessage = "Erro ao criar sugestão";
      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.resolve({ message: errorMessage }),
        })
      );

      await expect(createSuggestion({} as any)).rejects.toThrow(errorMessage);
    });
  });

  describe("getSuggestions", () => {
    it("obtém lista de sugestões corretamente", async () => {
      const mockSuggestions = [
        { id: "1", title: "Sugestão 1" },
        { id: "2", title: "Sugestão 2" },
      ];

      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockSuggestions),
        })
      );

      const result = await getSuggestions();

      expect(global.fetch).toHaveBeenCalledWith("/api/suggestions");
      expect(result).toEqual(mockSuggestions);
    });

    it("lida com erros ao obter sugestões", async () => {
      const errorMessage = "Erro ao obter sugestões";
      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.resolve({ message: errorMessage }),
        })
      );

      await expect(getSuggestions()).rejects.toThrow(errorMessage);
    });
  });
});
