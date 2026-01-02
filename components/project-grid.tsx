import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export function ProjectGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
