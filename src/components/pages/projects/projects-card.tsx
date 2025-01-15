"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ProjectCardProps } from "../../../@types/projects";

export function ProjectCard({ project }: ProjectCardProps) {
  const common = useTranslations("common");
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div>
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <div className="flex gap-2 mt-2">
              <Badge>
                {common("week")} {project.week}
              </Badge>
              <Badge variant="outline">{project.complexity}</Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{project.description}</p>
        <div className="flex gap-2 flex-wrap mt-4">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="ghost" size="sm">
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </Button>
        <Button asChild variant="ghost" size="sm">
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <Globe className="mr-2 h-4 w-4" />
            {common("cta.viewProject")}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
