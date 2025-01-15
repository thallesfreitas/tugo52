import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("common.footer");
  return (
    <footer className="border-t">
      <div className="container flex h-16 items-center justify-center py-4">
        <p className="text-sm text-muted-foreground">{t("text")}</p>
      </div>
    </footer>
  );
}
