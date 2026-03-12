"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const highlights = project.bullets.slice(0, 2);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <article className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all hover:shadow-md">
        <div className="border-b border-black/10 bg-slate-50 p-4">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white border border-black/10">
            {project.imageSrc ? (
              <Image
                src={project.imageSrc}
                alt={project.imageAlt || project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-3"
                priority={false}
              />
            ) : (
              <div className="h-full w-full" />
            )}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-[17px] font-semibold text-slate-900 leading-snug">
            {project.title}
          </h3>

          {project.subtitle ? (
            <p className="mt-1 text-sm font-medium text-slate-600">
              {project.subtitle}
            </p>
          ) : null}

          <p className="mt-3 text-sm text-slate-700 leading-relaxed">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 6).map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-black/30 text-slate-900 bg-white"
              >
                {tag}
              </span>
            ))}
          </div>

          {highlights.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {highlights.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-slate-700">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span className="leading-relaxed break-words">{b}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/85 transition-all"
                >
                  Live <ExternalLink size={16} />
                </a>
              ) : (
                <span className="text-sm text-slate-500">
                  Live link coming soon
                </span>
              )}

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center rounded-xl border border-black/20 bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-slate-50 transition-all"
              >
                Details
              </button>
            </div>

            <span className="text-xs text-slate-400 group-hover:text-slate-500 transition-colors">
              Project
            </span>
          </div>
        </div>
      </article>

      {open ? (
        <div className="fixed inset-0 z-[999]">
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50"
          />

          <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-xl border border-black/10">
            <div className="flex items-start justify-between gap-4 border-b border-black/10 p-5">
              <div>
                <h4 className="text-lg font-semibold text-slate-900">
                  {project.title}
                </h4>
                {project.subtitle ? (
                  <p className="mt-1 text-sm font-medium text-slate-600">
                    {project.subtitle}
                  </p>
                ) : null}
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 transition"
                aria-label="Close details"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-5">
              <p className="text-sm text-slate-700 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-black/30 text-slate-900 bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.bullets.length > 0 ? (
                <ul className="mt-5 space-y-3">
                  {project.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-slate-700">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-6 flex items-center justify-end gap-3 border-t border-black/10 pt-4">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/85 transition-all"
                  >
                    Open Live <ExternalLink size={16} />
                  </a>
                ) : null}

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center rounded-xl border border-black/20 bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-slate-50 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
