import { Button } from "@/components/ui/button";
import { Rocket, GitFork } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Cta() {
  const t = useTranslations("about.cta");
  return (
    <section className="text-center">
      <h2 className="text-2xl font-semibold mb-6">{t("title")}</h2>
      <div className="flex gap-4 justify-center">
        <Button asChild size="lg">
          <Link href="/suggest">
            {t("text_btn")}
            <Rocket className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="https://github.com/thallesfreitas/tugo52">
            GitHub
            <GitFork className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
