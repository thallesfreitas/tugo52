import { WeekProgress } from "@/components/pages/home/home-project-highlight";
import Hero from "@/components/pages/home/home-hero";
import Stats from "@/components/pages/home/home-stats";
import LatestProjects from "@/components/pages/home/home-latest-projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WeekProgress currentWeek={1} />
      <LatestProjects />
    </>
  );
}
