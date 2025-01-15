"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface WeekProgressProps {
  currentWeek: number;
}

export function WeekProgress({ currentWeek }: WeekProgressProps) {
  const percentage = (currentWeek / 52) * 100;

  const t = useTranslations("home.weekProgress");
  const commons = useTranslations("common");
  return (
    <section className="container py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            {t("title")}
          </h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/projects">{t("cta")}</Link>
        </Button>
      </div>

      <div className="space-y-4">
        <Progress value={percentage} className="h-4" />
        <div className="grid grid-cols-12 gap-1">
          {Array.from({ length: 52 }, (_, i) => (
            <div
              key={`week-progress_${i + 1}`}
              className={`h-2 rounded ${
                i < currentWeek
                  ? "bg-primary"
                  : i === currentWeek
                  ? "bg-primary/50"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{commons("week")} 1</span>
          <span>{commons("week")} 26</span>
          <span>{commons("week")} 52</span>
        </div>
      </div>
    </section>
  );
}
