const items = [
  {
    role: "Web Systems / Front-End (Internship / Volunteer)",
    company: "RTS Logic",
    time: "2025 – Present",
    bullets: [
      "Ship website updates every 2–4 weeks with clear testing + release notes.",
      "Improve performance and UX by optimizing images, layouts, and mobile responsiveness.",
      "Support SEO fundamentals: metadata, internal linking, headings, and content hygiene."
    ]
  },
  {
    role: "Front-End Contributor",
    company: "Azophi",
    time: "2025",
    bullets: [
      "Led the contact section build and implemented email-based lead capture.",
      "Created a clean layout that feels professional and converts better on mobile.",
      "Documented update steps so changes are easy for non-technical teammates."
    ]
  },
  {
    role: "IT Support (Co-op)",
    company: "Dawood RCC Pipe",
    time: "Jun 2021 – Jan 2022",
    bullets: [
      "Provided day-to-day support for office users (PC setup, troubleshooting, guidance).",
      "Helped standardize simple procedures to reduce repeated issues.",
      "Worked patiently with non-technical staff to improve productivity."
    ]
  }
];

export function Experience() {
  return (
    <div className="space-y-6">
      {items.map((it) => (
        <div
          key={it.company + it.role}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base font-semibold tracking-tight">{it.role}</p>
            <p className="text-sm text-slate-600">{it.time}</p>
          </div>
          <p className="mt-1 text-sm text-slate-700">
            <span className="font-medium">{it.company}</span>
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {it.bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
