import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">c
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-black/10">
              <p className="text-sm font-semibold text-slate-900">About</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                {profile.name}
              </h2>
              <p className="mt-2 text-slate-700">{profile.headline}</p>
              <p className="mt-1 text-sm text-slate-600">{profile.location}</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Who I am</p>
              <p className="mt-3 text-slate-700 leading-relaxed">{profile.about}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
