import Link from "next/link";

/**
 * Footer component
 * Contains personal information, quick navigation links, and contact details
 * Displayed at the bottom of the portfolio page
 */
export default function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
      <div className="space-y-4">
        <h2 className="text-white text-2xl font-bold">Rinat Demchenko</h2>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
          Aspiring Software engineer and a second year university student.
        </p>
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold">Quick access</h3>
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="#intro"
            className="text-gradient text-sm font-bold hover:text-white transition-colors"
          >
            Contact
          </Link>
          <Link
            href="#skills"
            className="text-gray-400 text-sm hover:text-white transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-gray-400 text-sm hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#education"
            className="text-gray-400 text-sm hover:text-white transition-colors"
          >
            Education
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold">
          Little things I&apos;m(very) proud of
        </h3>
        <div className="flex flex-col gap-2">
          <p className="text-gray-400 text-sm">
            <Link
              href="https://www.chess.com/member/rinatdem"
              target="_blank"
              className="text-gradient font-semibold"
            >
              2000
            </Link>{" "}
            peak rating on chess.com(top 0.3%)
          </p>
          <p className="text-gray-400 text-sm">
            Speaking <span className="text-gradient font-semibold">4</span>{" "}
            languages(Ukrainian, Russian, English, Slovak)
          </p>
          <p className="text-gray-400 text-sm">
            Making an{" "}
            <Link
              href="https://www.canva.com/design/DAFODuFo0w8/lMU-FdFvhCPPyhh2KZKgwg/edit"
              target="_blank"
              className="text-gradient font-semibold"
            >
              interactive dashboard{" "}
            </Link>
            for my school using Canva when i was 15
          </p>
          <p className="text-gray-400 text-sm">
            Graduating from high school with a{" "}
            <span className="text-gradient font-semibold">10.8/12</span>
            (Analogue to US{" "}
            <span className="text-gradient font-semibold">3.6</span>) GPA
          </p>
        </div>
      </div>
    </div>
  );
}
