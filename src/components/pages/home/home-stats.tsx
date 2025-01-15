import { Calendar, Rocket, Target } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("home.stats");
  const commons = useTranslations("common");
  return (
    <section className="border-t border-b bg-muted/40">
      <div className="container py-12 grid gap-4 md:gap-8 md:grid-cols-3">
        <div className="flex items-center gap-4">
          <Calendar className="w-8 h-8 text-primary" />
          <div>
            <h3 className="font-semibold">{t("timeLeft")}</h3>
            <p className="text-2xl font-bold">51 {commons("weeks")}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Target className="w-8 h-8 text-primary" />
          <div>
            <h3 className="font-semibold">{t("projectsDone")}</h3>
            <p className="text-2xl font-bold">1/52</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Rocket className="w-8 h-8 text-primary" />
          <div>
            <h3 className="font-semibold">{t("techUsed")}</h3>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>
      </div>
    </section>
  );
}
