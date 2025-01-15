import { Card } from "@/components/ui/card";
import { SuggestionIdeas } from "./components/suggestions-ideas";

import { useTranslations } from "next-intl";
import { Title } from "@/components/ui/Title";
import { Text } from "@/components/ui/text";

export default function SuggestionsExamples() {
  const t = useTranslations("suggest.examples");
  return (
    <Card className="p-6 bg-muted/50">
      <h2 className="font-semibold text-lg mb-4">{t("title")}</h2>
      <ul className="space-y-4">
        <SuggestionIdeas>
          <Title>{t("title-ex1")}</Title>
          <Text>{t("text-ex1")}</Text>
        </SuggestionIdeas>
        <SuggestionIdeas>
          <Title>{t("title-ex2")}</Title>
          <Text>{t("text-ex2")}</Text>
        </SuggestionIdeas>
        <SuggestionIdeas>
          <Title>{t("title-ex3")}</Title>
          <Text>{t("text-ex3")}</Text>
        </SuggestionIdeas>
      </ul>
    </Card>
  );
}
