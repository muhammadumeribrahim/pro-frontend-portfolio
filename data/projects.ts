export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  bullets: string[];
  tags: string[];
  liveUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    title: "RTS Logic | Tech Consulting Website",
    subtitle: "WordPress • Elementor • Custom CSS • JavaScript",
    description:
      "Tech consulting site built in WordPress with Elementor, custom CSS/JS, and a clean lead-focused layout.",
    bullets: [
      "Built reusable Elementor sections for services, CTAs, and consistent page layouts",
      "Added custom CSS/JS for smoother UI interactions and cleaner responsive spacing",
      "Improved site responsiveness by refining layout structure, typography scale, and mobile-first section styling",
      "Enhanced performance by optimizing media usage, reducing front-end bloat, and tightening page structure for faster loads",
    ],
    tags: ["WordPress", "Elementor", "Custom CSS", "JavaScript", "UX/UI", "Performance"],
    liveUrl: "https://www.rtslogic.com",
    imageSrc: "/projects/rtslogicpic.png",
    imageAlt: "RTS Logic consulting website preview",
  },
  {
    title: "Azophi Corp | Company Website + Lead Capture",
    subtitle: "React • TypeScript • CSS • Figma",
    description:
      "React + TypeScript company site built from Figma with responsive UI and a conversion-ready contact flow.",
    bullets: [
      "Converted Figma designs into a responsive React UI with reusable components",
      "Built a lead-capture contact form with validation and a smooth user flow",
      "Organized the front-end structure for maintainability with predictable component patterns and styling rules",
      "Improved UX clarity by tightening content hierarchy and reinforcing messaging with clear CTAs and sections",
    ],
    tags: ["React", "TypeScript", "CSS", "Figma", "Responsive UI", "Forms"],
    liveUrl: "https://azophi.com",
    imageSrc: "/projects/azophipic.png",
    imageAlt: "Azophi Corp website preview",
  },
  {
    title: "Saffron & Stone | Restaurant Table Booking",
    subtitle: "UI/UX • Booking Flow • Responsive Web • Figma",
    description:
      "Restaurant table booking UI with a premium look, fast flow, and mobile-friendly form validation.",
    bullets: [
      "Designed a table booking flow for party size, date/time selection, and confirmation UI",
      "Added form validation and clear error states for a smooth mobile-friendly experience",
      "Created booking form validation and clear error states to reduce incorrect submissions and improve usability",
      "Improved conversions by placing booking CTAs strategically across hero and key sections with a smooth scroll experience",
    ],
    tags: ["UI/UX", "Figma", "Responsive Design", "Forms", "Validation", "Conversion"],
    liveUrl: "https://saffron-stone-reservations-khe4tl12h.vercel.app/",
    imageSrc: "/projects/Saffron&Stonepic.png",
    imageAlt: "Saffron & Stone restaurant website preview",
  },
];
