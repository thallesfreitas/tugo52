import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface ProjectHighlightProps {
  title?: string;
  description?: string;
  week?: number;
  tech?: string[];
  link?: string;
}

export function ProjectHighlight({
  title,
  description,
  week,
  tech,
  link,
}: ProjectHighlightProps) {
  const card = CardHighlight({ title, description, week, tech });
  if (link) return <Link href={link}>{card}</Link>;

  return card;
}

interface CardHighlightProps extends Omit<ProjectHighlightProps, "link"> {
  title?: string;
  description?: string;
  week?: number;
  tech?: string[];
}

const CardHighlight = ({
  title,
  description,
  week,
  tech,
}: CardHighlightProps) => {
  const t = useTranslations("home.latestProjects");
  const commons = useTranslations("common");
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{title ? title : t("soon")}</CardTitle>
          {week ? (
            <Badge variant="outline">
              {commons("week")} {week}
            </Badge>
          ) : null}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {description ? description : t("next")}
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 flex-wrap">
          {tech?.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};
