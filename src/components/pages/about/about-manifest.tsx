import { useTranslations } from "next-intl";

export default function Manifest() {
  const t = useTranslations("about.manifest");
  return (
    <section className="prose-gray dark:prose-invert mb-12 flex flex-col justify-center max-w-4xl">
      <p className="lead">{t("text")}</p>
      <blockquote className="not-prose bg-primary/5 border-l-4 border-primary p-4 my-8">
        {t("text2")}
      </blockquote>
    </section>
  );
}
