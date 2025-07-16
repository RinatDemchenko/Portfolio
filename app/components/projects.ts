/**
 * Projects data configuration
 * This file contains all portfolio projects displayed in the Projects section
 * Each project includes: name, description, screenshots, links (GitHub & live demo),
 * technologies used, and categories for filtering
 *
 * Image paths point to /public/projects/[project-name]/ directory
 * Links array: [GitHub repository, Live demo URL]
 */

export const projects = [
  {
    name: "Mapsy",
    description:
      "A utility app for finding places near(30minutes away from) you on a map and sorting them by categories(screenshots taken with VPN on).",
    images: [
      "/projects/Mapsy/1.jpg",
      "/projects/Mapsy/2.jpg",
      "/projects/Mapsy/3.jpg",
      "/projects/Mapsy/4.jpg",
    ],
    links: [
      "https://github.com/RinatDemcenko/Mapsy",
      "https://mapsy-theta.vercel.app/",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "express",
      "mongodb",
      "redis",
      "Maps and geojson",
      "RestAPI",
    ],
    categories: ["hobby", "noncommercial"],
  },
  {
    name: "ReciPeak",
    description:
      "Recipe app that allows you to find recipes by ingredients and categories.",
    images: [
      "/projects/Recipeak/1.jpg",
      "/projects/Recipeak/2.jpg",
      "/projects/Recipeak/3.jpg",
      "/projects/Recipeak/4.jpg",
      "/projects/Recipeak/5.jpg",
    ],
    links: [
      "https://github.com/RinatDemcenko/ReciPeak",
      "https://reci-peak.vercel.app/",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "RestAPI"],
    categories: ["hobby", "noncommercial"],
  },
];
