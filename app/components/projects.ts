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
      "https://res.cloudinary.com/dpez2v26l/image/upload/v1753562507/1_mnmoyw.jpg",
      "https://res.cloudinary.com/dpez2v26l/image/upload/v1753562509/2_yxzox0.jpg",
      "https://res.cloudinary.com/dpez2v26l/image/upload/v1753562512/3_frufhf.jpg",
      "https://res.cloudinary.com/dpez2v26l/image/upload/v1753562514/4_s4a5y4.jpg",
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
    name: "ZlavySK",
    description:
      "Utility app for scraping sales date from most popular slovakian supermarkets(Lidl, Kaufland, etc.).",
    images: ["https://res.cloudinary.com/dpez2v26l/image/upload/v1758755528/Screenshot_7_jdaojl.jpg", "https://res.cloudinary.com/dpez2v26l/image/upload/v1758755527/Screenshot_8_emwobi.jpg", "https://res.cloudinary.com/dpez2v26l/image/upload/v1758755527/Screenshot_9_xx4wtn.jpg"],
    links: ["https://github.com/RinatDemchenko/Cenyskplus", "https://cenyskplus.vercel.app/"],
    technologies: ["React", "TypeScript", "Python", "RestAPI", "Playwright", "BeautifulSoup", "BrightData proxies"],
    categories: ["hobby", "noncommercial"],
  },
  {
    name: "ReciPeak",
    description:
      "Recipe app that allows you to find recipes by ingredients and categories.",
    images: [
      "https://res.cloudinary.com/dpez2v26l/image/upload/v1753562316/1_fbqsbn.jpg",
      "https://res.cloudinary.com/dpez2v26l/image/upload/v1753562318/2_wlhwqj.jpg",
      "https://res.cloudinary.com/dpez2v26l/image/upload/v1753562317/3_pvwhr2.jpg",
      "https://res.cloudinary.com/dpez2v26l/image/upload/v1753562318/4_josx80.jpg",
      "https://res.cloudinary.com/dpez2v26l/image/upload/v1753562319/5_se75xj.jpg",
    ],
    links: [
      "https://github.com/RinatDemcenko/ReciPeak",
      "https://reci-peak.vercel.app/",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "RestAPI"],
    categories: ["hobby", "noncommercial"],
  },

];
