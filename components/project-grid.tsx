import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export function ProjectGrid({ variant }: { variant?: "featured" | "all" }) {
  const visible = variant === "featured" ? projects.slice(0, 2) : projects;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {visible.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
