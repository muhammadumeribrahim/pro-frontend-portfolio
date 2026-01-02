"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";

export function ScrollNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div
          className={
            scrolled
              ? "bg-white border border-black/10 shadow-md rounded-full px-6 h-14 flex items-center justify-between transition-all duration-300"
              : "bg-transparent border border-transparent rounded-none px-0 h-14 flex items-center justify-between transition-all duration-300"
          }
        >
          <Link href="/" className={scrolled ? "text-black font-semibold text-lg" : "text-white font-semibold text-lg"}>
            {profile.name}
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold">
            <Link
              className={scrolled ? "text-black hover:text-black/70 transition-colors" : "text-white/90 hover:text-white transition-colors"}
              href="/#about"
            >
              About
            </Link>
            <Link
              className={scrolled ? "text-black hover:text-black/70 transition-colors" : "text-white/90 hover:text-white transition-colors"}
              href="/#projects"
            >
              Projects
            </Link>
            <Link
              className={scrolled ? "text-black hover:text-black/70 transition-colors" : "text-white/90 hover:text-white transition-colors"}
              href="/#skills"
            >
              Skills
            </Link>
            <Link
              className={scrolled ? "text-black hover:text-black/70 transition-colors" : "text-white/90 hover:text-white transition-colors"}
              href="/#contact"
            >
              Contact
            </Link>

            <a
              className={scrolled ? "text-black hover:text-black/70 transition-colors" : "text-white/90 hover:text-white transition-colors"}
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className={scrolled ? "text-black hover:text-black/70 transition-colors" : "text-white/90 hover:text-white transition-colors"}
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </nav>

          <Link
            href="/#contact"
            className={
              scrolled
                ? "rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-black/85 transition-all"
                : "rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-white/90 transition-all"
            }
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
