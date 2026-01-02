const groups = [
  {
    title: "Front-end",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "UI + Quality",
    items: ["Responsive design", "Accessibility", "Performance", "SEO basics"]
  },
  {
    title: "Tools",
    items: ["Git/GitHub", "VS Code", "Chrome DevTools", "Figma basics"]
  },
  {
    title: "CMS + Analytics",
    items: ["WordPress", "Elementor", "GA4 (basic)", "Search Console (basic)"]
  }
];

export function Skills() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {groups.map((g) => (
        <div
          key={g.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
        >
          <p className="font-semibold tracking-tight">{g.title}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {g.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-sm text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
