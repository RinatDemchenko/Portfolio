/**
 * Education data configuration
 * This file contains all educational background information displayed in the Education section
 * Includes university information and completed courses with certificates
 *
 * Structure:
 * - university: Current university studies with confirmation document
 * - courses: Array of completed courses with certificates and provider information
 */

export const education = {
  university: {
    name: "TUKE FEI",
    description:
      "Computer Networks Bachelor's degree. Currently starting 3rd year of study.",
    date: "2023-2026",
    image: "/icons/fei.png",
    conformation: "https://res.cloudinary.com/dpez2v26l/image/upload/v1753562672/confirmation_xqaqvu.jpg",
  },
  courses: [
    // {
    //   name: "Nextjs fundamentals",
    //   description: "Nextjs fundamentals course by FrontEnd Masters",
    //   date: "2025",
    //   image: "/icons/frontendmasters.png",
    //   certificate: "/course_certificates/placeholder.png",
    // },
    {
      name: "Introduction to React",
      description: "Introduction to React course by FrontEnd Masters",
      date: "2025",
      image: "/icons/frontendmasters.png",
      certificate: "https://res.cloudinary.com/dpez2v26l/image/upload/v1753562687/react_intro_bjtnpa.pdf",
    },
    {
      name: "Javascript, the hard parts",
      description:
        "Course by FrontEnd Masters covering concepts like closures, prototypes and promises",
      date: "2025",
      image: "/icons/frontendmasters.png",
      certificate: "https://res.cloudinary.com/dpez2v26l/image/upload/v1753562683/js_hardparts_v2kczg.pdf",
    },
    {
      name: "Web developer Bootcamp",
      description: "Web development basics course by Colt Steele(Udemy)",
      date: "2024",
      image: "/icons/udemy.png",
      certificate: "https://res.cloudinary.com/dpez2v26l/image/upload/v1753562692/udemy_oactok.jpg",
    },
    {
      name: "GoITeens",
      description: "Introduction to web development course by GoIT",
      date: "2022",
      image: "/icons/goit.png",
      certificate: "https://res.cloudinary.com/dpez2v26l/image/upload/v1753562679/goit_mfbl5p.png",
    },
  ],
};
