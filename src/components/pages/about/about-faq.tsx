import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Faq() {
  const t = useTranslations("about.faq");
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">{t("title")}</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2">{t("question1")}</h3>
          <p className="text-muted-foreground">{t("answer1")}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">{t("question2")}</h3>
          <p className="text-muted-foreground">{t("answer2")}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">{t("question3")}</h3>
          <p className="text-muted-foreground mb-4">{t("answer3")}</p>
          <Button asChild variant="secondary">
            <Link
              href="/suggest"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("btn-suggest")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
