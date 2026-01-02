import { profile } from "@/data/profile";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90">
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:pt-20">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          <div className="flex flex-wrap items-center gap-2">
            {profile.pills.map((p) => (
              <Pill key={p}>{p}</Pill>
            ))}
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            {profile.heroTitle}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {profile.heroBody}
          </p>
        </div>

        <div className="lg:col-span-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
            <p className="text-sm font-semibold text-white">{profile.name}</p>
            <p className="mt-1 text-sm text-white/70">{profile.headline}</p>
            <p className="mt-1 text-sm text-white/60">{profile.location}</p>

            <div className="mt-5 flex flex-col gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition"
              >
                Email
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  GitHub
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
