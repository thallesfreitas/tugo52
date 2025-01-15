import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Github,
  Globe,
  Calendar,
  Clock,
  BookOpen,
  GitFork,
  Star,
  Share2,
} from "lucide-react";
import { ProjectTechStack } from "@/components/pages/projects/details/project-tech-stack";
import { ProjectTimeline } from "@/components/pages/projects/details/project-timeline";
import { ProjectLessons } from "@/components/pages/projects/details/project-lessons";
import { projectDetailMock } from "@/@mocks/mock-projectDetails";

interface ProjectDetailPageProps {
  params: {
    id: string;
    locale: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id, locale } = params;

  //This will be used with this integrated to API
  console.log(id);
  // const locale = useLocale() as Locale;
  const project = projectDetailMock[locale];
  return (
    <article className="container py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            <span>Semana {project.week}</span>
            <span>•</span>
            <Clock className="h-4 w-4" />
            <span>{project.timeSpent}h de desenvolvimento</span>
          </div>

          <div className="flex justify-between items-start gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex gap-2">
                <Badge variant="outline">Semana {project.week}</Badge>
                <Badge>{project.complexity}</Badge>
                <Badge variant="secondary">{project.status}</Badge>
              </div>
            </div>

            <div className="flex gap-2">
              <Button asChild variant="outline" size="icon">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Demo</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Compartilhar</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Preview */}
        <Card className="mb-8 aspect-video relative overflow-hidden">
          <Image
            src="/api/placeholder/800/450"
            alt="Preview do projeto"
            className="object-cover"
            fill
          />
        </Card>

        {/* Tabs de Conteúdo */}
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="technical">Técnico</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="lessons">Aprendizados</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Funcionalidades</h2>
              <ul className="grid md:grid-cols-2 gap-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Stack Tecnológico</h2>
              <ProjectTechStack tech={project.tech} />
            </section>
          </TabsContent>

          <TabsContent value="technical">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2>Documentação Técnica</h2>
              <p>
                Detalhes técnicos do projeto, incluindo arquitetura, decisões de
                design e implementação.
              </p>
              {/* Mais conteúdo técnico aqui */}
            </div>
          </TabsContent>

          <TabsContent value="timeline">
            <ProjectTimeline timeline={project.timeline} />
          </TabsContent>

          <TabsContent value="lessons">
            <ProjectLessons lessons={project.lessons} />
          </TabsContent>
        </Tabs>

        {/* Métricas do Projeto */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Tempo</p>
                <p className="text-2xl font-bold">{project.timeSpent}h</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2">
              <GitFork className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Forks</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Stars</p>
                <p className="text-2xl font-bold">48</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Issues</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              Ver Demo
              <Globe className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Código
              <Github className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
