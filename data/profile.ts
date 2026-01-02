export const profile = {
  name: "Muhammad Umer",
  headline: "Software Developer • Tech Enthusiast",
  location: "Chicago, IL",

  heroTitle: "I build clean, fast, and modern web experiences.",
  heroBody:
    "Front-end focused developer with strong UI/UX sense. I work with React, TypeScript, and modern CSS, and I also build high-converting WordPress sites with Elementor and custom front-end enhancements.",

  pills: ["React", "TypeScript", "WordPress", "Elementor", "UI/UX", "Tailwind"],

  aboutTitle: "About",
  aboutBody:
    "Tech enthusiast and software developer with a BS in Information Technology and a minor in Information Systems from DePaul University. I enjoy building responsive interfaces, improving UX, and shipping websites that look premium, load fast, and convert users into leads.",

  email: "umeribrahimumer@hotmail.com",

  links: {
    linkedin: "https://www.linkedin.com/in/muhammad-umer-7946b0171",
    github: "https://github.com/muhammadumeribrahim",
    website: "",
  },
} as const;

export type Profile = typeof profile;
