export interface LocalizedProject {
  id: string;
  title: string;
  description: string;
  week: number;
  tech: string[];
  complexity: string;
  status: string;
  github: string;
  link: string;
}

export interface Project {
  [key: string]: LocalizedProject[];
}

export interface ProjectCardProps {
  project: LocalizedProject;
}
