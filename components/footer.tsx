import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-16 bg-white border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-base text-black/70">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-base font-semibold">
          <a
            className="text-black hover:text-black/70 transition-colors"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-black hover:text-black/70 transition-colors"
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
