interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface ProjectTimelineProps {
  timeline: TimelineEvent[];
}

export function ProjectTimeline({ timeline }: ProjectTimelineProps) {
  return (
    <div className="relative border-l border-primary/20 ml-3">
      {timeline.map((event, index) => (
        <div key={index} className="mb-8 ml-6">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] mt-1.5" />
          <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
            {new Date(event.date).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
            })}
          </time>
          <h3 className="text-lg font-semibold">{event.title}</h3>
          <p className="text-base font-normal text-muted-foreground">
            {event.description}
          </p>
        </div>
      ))}
    </div>
  );
}
