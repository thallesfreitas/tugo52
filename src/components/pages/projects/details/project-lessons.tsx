import { Card } from "@/components/ui/card";
import { LightbulbIcon } from "lucide-react";

interface Lesson {
  title: string;
  description: string;
}

interface ProjectLessonsProps {
  lessons: Lesson[];
}

export function ProjectLessons({ lessons }: ProjectLessonsProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {lessons.map((lesson, index) => (
          <Card key={index} className="p-6">
            <div className="flex gap-4">
              <div className="p-2 bg-primary/10 rounded-lg h-fit">
                <LightbulbIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{lesson.title}</h3>
                <p className="text-muted-foreground">{lesson.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
