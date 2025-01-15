import { useTranslations } from "next-intl";
import { ProjectHighlight } from "./home-week-progress";

export default function LatestProjects() {
  const t = useTranslations("home.latestProjects");
  return (
    <section className="container pb-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            {t("title")}
          </h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectHighlight
          title="TUGO52"
          description="Plataforma central do desafio de 52 projetos"
          week={1}
          tech={["Next.js", "TypeScript", "Tailwind"]}
          link="/projects/tugo52"
        />

        <ProjectHighlight />
        <ProjectHighlight />
      </div>
    </section>
  );
}
