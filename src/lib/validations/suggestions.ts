import { z } from "zod";

export const suggestionSchema = z.object({
  title: z
    .string()
    .min(3, "Título deve ter pelo menos 3 caracteres")
    .max(100, "Título deve ter no máximo 100 caracteres"),
  description: z
    .string()
    .min(10, "Descrição deve ter pelo menos 10 caracteres")
    .max(500, "Descrição deve ter no máximo 500 caracteres"),
  techStack: z
    .array(z.string())
    .min(1, "Selecione pelo menos uma tecnologia")
    .max(5, "Selecione no máximo 5 tecnologias"),
  complexity: z.enum(["baixa", "media", "alta"]),
  timeEstimate: z
    .number()
    .min(1, "Estimativa deve ser de pelo menos 1 hora")
    .max(40, "Estimativa deve ser de no máximo 40 horas"),
  references: z.string().url("URL inválida").optional().or(z.literal("")),
});

export type SuggestionFormData = z.infer<typeof suggestionSchema>;
