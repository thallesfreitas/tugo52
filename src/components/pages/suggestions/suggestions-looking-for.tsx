import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import SuggestLookingForText from "./components/suggestions-looking-for-texts";

export default function SuggestLookingFor() {
  const t = useTranslations("suggest.lookingFor");
  return (
    <Card className="p-6 bg-primary/5 border-primary/20">
      <h2 className="font-semibold text-lg mb-4">{t("title")}</h2>
      <ul className="space-y-3 text-muted-foreground">
        <SuggestLookingForText>{t("text1")}</SuggestLookingForText>
        <SuggestLookingForText>{t("text2")}</SuggestLookingForText>
        <SuggestLookingForText>{t("text3")}</SuggestLookingForText>
        <SuggestLookingForText>{t("text4")}</SuggestLookingForText>
      </ul>
    </Card>
  );
}
