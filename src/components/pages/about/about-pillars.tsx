import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import { Globe, Rocket, Brain, Code, GitFork } from "lucide-react";

export default function Pillars() {
  const t = useTranslations("about.pillars");
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">{t("title")}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <Globe className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold text-lg mb-2">{t("global")}</h3>
          <p className="text-muted-foreground">{t("text_global")}</p>
        </Card>

        <Card className="p-6">
          <Brain className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold text-lg mb-2">{t("learning")}</h3>
          <p className="text-muted-foreground">{t("text_learning")}</p>
        </Card>

        <Card className="p-6">
          <Code className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold text-lg mb-2">{t("opensource")}</h3>
          <p className="text-muted-foreground">{t("text_opensource")}</p>
        </Card>

        <Card className="p-6">
          <Rocket className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold text-lg mb-2">{t("mvp")}</h3>
          <p className="text-muted-foreground">{t("text_mvp")}</p>
        </Card>
      </div>
    </section>
  );
}
