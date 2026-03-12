import "./globals.css";
import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { ScrollNavbar } from "@/components/scroll-navbar";

import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Software Developer`,
    template: `%s | ${profile.name}`,
  },
  description: "Portfolio showcasing projects, UI/UX, and web work.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="sky-bg" aria-hidden="true" />
        <ScrollNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
