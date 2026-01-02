import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Pill } from "@/components/ui/pill";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="py-14 sm:py-20">
      <div className="rounded-3xl border border-slate-200 bg-white shadow-soft">
        <div className="p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-2">
            {profile.pills.map((p) => (
              <Pill key={p}>{p}</Pill>
            ))}
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
                {profile.heroTitle}
              </h1>
              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                {profile.heroBody}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="#projects">
                  {profile.ctaPrimary} <ArrowRight size={16} />
                </ButtonLink>

                <div className="flex items-center gap-3 sm:ml-auto">
                  <Link
                    href={profile.github}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} /> GitHub
                  </Link>
                  <Link
                    href={profile.linkedin}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </Link>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {profile.stats.map((s) => (
                  <Stat key={s.label} label={s.label} value={s.value} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-900">
                  What I build
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• Portfolio + landing pages with clean UI</li>
                  <li>• WordPress + Elementor sites (editable for clients)</li>
                  <li>• Static websites and front-end builds</li>
                </ul>
                <p className="mt-4 text-sm text-slate-600">
                  Want to collaborate? Use the contact section below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-sm text-slate-600">{label}</p>
      <p className="mt-1 text-lg font-semibold tracking-tight">{value}</p>
    </div>
  );
}
