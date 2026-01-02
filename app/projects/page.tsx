import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          All Projects
        </h1>
        <p className="mt-2 text-white/70">
          A full list of front-end, WordPress, and dashboard builds.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
