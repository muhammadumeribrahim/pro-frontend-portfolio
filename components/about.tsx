import { profile } from "@/data/profile";

export function About() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-slate-900">{profile.aboutTitle}</p>
        <p className="mt-3 text-slate-700 leading-relaxed">{profile.aboutBody}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <p className="text-xs font-semibold text-slate-500">Focus</p>
            <p className="mt-1 font-semibold text-slate-900">Frontend + UI/UX</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <p className="text-xs font-semibold text-slate-500">Stack</p>
            <p className="mt-1 font-semibold text-slate-900">React • TS • WP</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <p className="text-xs font-semibold text-slate-500">Location</p>
            <p className="mt-1 font-semibold text-slate-900">{profile.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
