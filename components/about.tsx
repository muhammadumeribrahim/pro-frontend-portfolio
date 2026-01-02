import { profile } from "@/data/profile";

export function About() {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold text-slate-900">{profile.aboutTitle}</p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            {profile.aboutBody}
          </p>
          <p className="mt-4 text-sm text-slate-600">
            I enjoy shipping real websites: clean layouts, consistent spacing, and small UI details
            that make a site feel premium.
          </p>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold text-slate-900">{profile.servicesTitle}</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {profile.services.map((s) => (
              <li key={s}>• {s}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
