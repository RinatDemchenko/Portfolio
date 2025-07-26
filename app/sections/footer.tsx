import Link from "next/link";
import {
  MdEmail,
  MdPhone,
  MdDesignServices,
} from "react-icons/md";
import { FaLanguage, FaChessKing, FaUserGraduate } from "react-icons/fa";

/**
 * Footer component
 * Contains personal information, quick navigation links, and contact details
 * Displayed at the bottom of the portfolio page
 */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 p-8">
        {/* Personal Info Section */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-white text-3xl font-bold">Rinat Demchenko</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Aspiring Software engineer and a second year university student.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                <MdEmail className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-gray-300 text-sm">
                <Link
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rinatdemchenko@gmail.com"
                  target="_blank"
                  className="text-gradient font-semibold hover:text-blue-400 transition-colors cursor-pointer"
                >
                  rinatdemchenko@gmail.com
                </Link>
              </span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                <MdPhone className="w-4 h-4 text-green-400" />
              </div>
              <span className="text-gray-300 text-sm">
                <Link
                  href="tel:+421950513347"
                  target="_blank"
                  className="text-gradient font-semibold hover:text-green-400 transition-colors cursor-pointer"
                >
                  +421950513347
                </Link>{" "}
                |{" "}
                <Link
                  href="tel:+380636918815"
                  target="_blank"
                  className="text-gradient font-semibold hover:text-green-400 transition-colors cursor-pointer"
                >
                  +380636918815
                </Link>
              </span>
            </div>
          </div>

          <p className="text-gray-500 text-xs pt-4 border-t border-gray-700">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Quick Access Section */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-white text-xl font-semibold">Quick access</h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Link
              href="#intro"
              className="group flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors"></div>
              <span className="text-gradient text-sm font-semibold group-hover:text-white transition-colors">
                Contact
              </span>
            </Link>

            <Link
              href="#skills"
              className="group flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:bg-purple-300 transition-colors"></div>
              <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                Skills
              </span>
            </Link>

            <Link
              href="#projects"
              className="group flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full group-hover:bg-green-300 transition-colors"></div>
              <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                Projects
              </span>
            </Link>

            <Link
              href="#education"
              className="group flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:bg-yellow-300 transition-colors"></div>
              <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                Education
              </span>
            </Link>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-white text-xl font-semibold">
              Little things I&apos;m(very) proud of
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </div>

          <div className="space-y-4">
            <div className="group flex items-center  gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all duration-300">
              <div className="p-2 bg-yellow-500/20 rounded-lg group-hover:bg-yellow-500/30 transition-colors">
                <FaChessKing className="w-4 h-4 text-yellow-400" />
              </div>
              <p className="text-gray-300 text-sm">
                <Link
                  href="https://www.chess.com/member/rinatdem"
                  target="_blank"
                  className="text-yellow-400 font-semibold hover:text-yellow-200 transition-colors inline-flex items-end gap-1"
                >
                  2000
                </Link>{" "}
                peak rating on chess.com(top 0.3%)
              </p>
            </div>

            <div className="group flex items-center  gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all duration-300">
              <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                <FaLanguage className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-gray-300 text-sm">
                Speaking <span className="text-blue-400 font-semibold">4</span>{" "}
                languages(Ukrainian, Russian, English, Slovak)
              </p>
            </div>

            <div className="group flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all duration-300">
              <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                <MdDesignServices className="w-4 h-4 text-purple-400" />
              </div>
              <p className="text-gray-300 text-sm">
                Making an{" "}
                <Link
                  href="https://www.canva.com/design/DAFODuFo0w8/lMU-FdFvhCPPyhh2KZKgwg/edit"
                  target="_blank"
                  className="text-purple-400 font-semibold hover:text-purple-200 transition-colors inline-flex items-center gap-1"
                >
                  interactive dashboard
                </Link>{" "}
                for my school using Canva when i was 15
              </p>
            </div>

            <div className="group flex items-center  gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all duration-300">
              <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                <FaUserGraduate className="w-4 h-4 text-green-400" />
              </div>
              <p className="text-gray-300 text-sm">
                Graduating from high school with a{" "}
                <span className="text-green-400 font-semibold">10.8/12</span>
                (Analogue to US{" "}
                <span className="text-green-400 font-semibold">3.6</span>) GPA
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
