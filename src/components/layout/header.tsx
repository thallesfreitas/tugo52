"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

import LocaleSwitcher from "../ui/LocaleSwitcher";
import { Link } from "@/i18n/routing";

export function Header() {
  const t = useTranslations("common");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold inline-block text-xl">TUGO52</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.projects")}
            </Link>
            <Link
              href="/suggest"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.suggest")}
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.contact")}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <ThemeToggle />
          <Button asChild variant="secondary">
            <Link
              href="https://github.com/thallesfreitas/tugo52"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
