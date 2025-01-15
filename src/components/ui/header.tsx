import { HeaderProps } from "@/@types";
import { useTranslations } from "next-intl";

export default function Header({ area }: HeaderProps) {
  const t = useTranslations(area);
  return (
    <div className="mb-12 text-center">
      <h1 className="text-4xl font-bold tracking-tight mb-4">{t("title")}</h1>
      <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
    </div>
  );
}
