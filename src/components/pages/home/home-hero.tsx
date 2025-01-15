import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
	const t = useTranslations("home.hero");
	return (
		<section className="container flex flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
			<div className="flex items-center gap-2 text-sm font-semibold text-primary">
				<div className="rounded-lg bg-primary/10 px-3 py-1">
					{t("tagline")}: 1/52
				</div>
			</div>
			<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
				{t('title')} <span className="text-primary">{t('title2')} </span>
			</h1>
			<p className="max-w-[42rem] text-muted-foreground sm:text-xl sm:leading-8">
				{t('subtitle')} 
			</p>
			<div className="flex gap-4">
				<Button asChild size="lg">
					<Link href="/projects">
						<span>{t('cta')} </span>
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
				<Button asChild variant="outline" size="lg">
					<Link href="/suggest">{t('suggest')} </Link>
				</Button>
			</div>
		</section>
	);
}