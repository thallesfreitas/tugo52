import { Suspense } from "react";
import { ProjectsGrid } from "@/components/pages/projects/projects-grid";
import { ProjectsFilter } from "@/components/pages/projects/projects-filter";
import { ProjectsSort } from "@/components/pages/projects/projects-sort";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/ui/header";

export default function ProjectsPage() {
  return (
    <div className="container py-8">
      <Header area="projects" />
      <Separator className="my-6" />
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
        <div className="flex gap-4 flex-wrap">
          <ProjectsFilter />
          <ProjectsSort />
        </div>
      </div>

      <Suspense
        fallback={
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-[300px] rounded-xl" />
            ))}
          </div>
        }
      >
        <ProjectsGrid />
      </Suspense>
    </div>
  );
}
