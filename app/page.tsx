import Link from "next/link";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";


export default function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-white/75 text-base">{profile.location}</p>

        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-white">
          {profile.name}
        </h1>

        <p className="mt-3 text-lg md:text-xl text-white/90 max-w-3xl">
          {profile.headline}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/#projects"
            className="rounded-2xl bg-white px-6 py-3 text-base font-semibold text-black hover:bg-[#f2f2f2] active:scale-[0.99] transition-all"
          >
            View Projects
          </Link>

          <Link
            href="/projects"
            className="rounded-2xl border border-white/25 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 active:scale-[0.99] transition-all"
          >
            All Projects
          </Link>

          <Link
            href="/#contact"
            className="rounded-2xl bg-black px-6 py-3 text-base font-semibold text-white hover:bg-[#0a0a0a] active:scale-[0.99] transition-all"
          >
            Contact
          </Link>
        </div>
      </div>

      <Section
        id="about"
        title="About"
        subtitle="Who I am and what I build."
      >
        <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-7">
          <p className="text-white/90 leading-relaxed max-w-4xl text-base">
            {profile.about}
          </p>
        </div>
      </Section>

      <Section
        id="projects"
        title="Projects"
        subtitle="Selected builds with clean UI and practical outcomes."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-black hover:bg-[#f2f2f2] active:scale-[0.99] transition-all"
          >
            View all projects
          </Link>
        </div>
      </Section>

      <Section
        id="skills"
        title="Skills"
        subtitle="Tools and technologies I use across front-end, web systems, and analytics work."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
  {
    title: "Front-End",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
    ],
  },
  {
    title: "Back-End",
    items: [
      "Node.js",
      "REST APIs",
      "API debugging",
      "Auth basics",
    ],
  },
  {
    title: "Python",
    items: [
      "Automation scripts",
      "CSV/JSON handling",
      "Data cleaning basics",
      "Scripting for workflows",
    ],
  },
  {
    title: "Databases",
    items: [
      "SQL",
      "Queries & joins",
      "Relational basics",
      "Schema basics",
    ],
  },
  {
    title: "WordPress",
    items: [
      "Elementor",
      "Site updates",
      "SEO basics",
      "Performance cleanup",
    ],
  },
  {
    title: "IT Support",
    items: [
      "Troubleshooting",
      "Tier 1 support",
      "User support & training",
      "Bug reproduction steps",
    ],
  },
  {
    title: "Analytics / BI",
    items: [
      "Excel dashboards",
      "Power BI basics",
      "KPI tracking",
      "Reporting",
    ],
  },
  {
    title: "Delivery",
    items: [
      "Agile/Scrum",
      "Git/GitHub",
      "Testing & QA",
      "Documentation",
    ],
  },
  {
    title: "Design",
    items: [
      "Figma",
      "UI layout",
      "Typography",
      "Accessibility basics",
    ],
  },
].map((box) => (
            <div
              key={box.title}
              className="rounded-2xl border border-white/18 bg-white/10 backdrop-blur-md p-6"
            >
              <h3 className="text-white font-semibold text-lg">{box.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {box.items.map((x) => (
                  <span
                    key={x}
                    className="text-xs px-3 py-1 rounded-full border border-white/25 text-white/90"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Best way to reach me is email.">
        <div className="rounded-2xl border border-white/18 bg-white/10 backdrop-blur-md p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-lg">Email</p>
            <a
              className="text-white/90 hover:text-white transition-colors"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </div>

          <a
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-black hover:bg-[#f2f2f2] active:scale-[0.99] transition-all"
            href={`mailto:${profile.email}`}
          >
            Send an email
          </a>
        </div>
      </Section>
    </main>
  );
}
