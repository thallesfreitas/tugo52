"use server";

import { suggestionSchema } from "@/lib/validations/suggestions";
import { unstable_noStore as noStore } from "next/cache";
import { revalidatePath } from "next/cache";

export async function createSuggestion(formData: FormData) {
  noStore();

  try {
    const raw = {
      title: formData.get("title"),
      description: formData.get("description"),
      techStack: formData.getAll("techStack"),
      complexity: formData.get("complexity"),
      timeEstimate: Number(formData.get("timeEstimate")),
      references: formData.get("references"),
    };

    const validated = suggestionSchema.parse(raw);

    const response = await fetch("https://api.tugo52.com/suggestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validated),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar sugestão");
    }

    revalidatePath("/suggestions");
    return { success: true };
  } catch (error) {
    return {
      error: (error as Error).message || "Algo deu errado. Tente novamente.",
    };
  }
}
