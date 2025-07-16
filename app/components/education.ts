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
    conformation: "/confirmation.jpg",
  },
  courses: [
    {
      name: "Nextjs fundamentals",
      description: "Nextjs fundamentals course by FrontEnd Masters",
      date: "2025",
      image: "/icons/frontendmasters.png",
      certificate: "/course_certificates/placeholder.png",
    },
    {
      name: "Introduction to React",
      description: "Introduction to React course by FrontEnd Masters",
      date: "2025",
      image: "/icons/frontendmasters.png",
      certificate: "/course_certificates/placeholder.png",
    },
    {
      name: "Javascript, the hard parts",
      description:
        "Course by FrontEnd Masters covering concepts like closures, prototypes and promises",
      date: "2025",
      image: "/icons/frontendmasters.png",
      certificate: "/course_certificates/placeholder.png",
    },
    {
      name: "Web developer Bootcamp",
      description: "Web development basics course by Colt Steele(Udemy)",
      date: "2024",
      image: "/icons/udemy.png",
      certificate: "/course_certificates/udemy.png",
    },
    {
      name: "GoITeens",
      description: "Introduction to web development course by GoIT",
      date: "2022",
      image: "/icons/goit.png",
      certificate: "/course_certificates/goit.png",
    },
  ],
};
