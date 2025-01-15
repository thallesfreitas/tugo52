interface Lesson {
  title: string;
  description: string;
}

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  week: number;
  tech: string[];
  complexity: string;
  status: string;
  github: string;
  demo: string;
  timeSpent: number;
  startDate: string;
  endDate: string;
  features: string[];
  lessons: Lesson[];
  timeline: TimelineEvent[];
}

export type ProjectDetails = Record<Locale, ProjectDetail>;
