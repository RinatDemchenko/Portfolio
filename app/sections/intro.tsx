import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaDownload,
  FaEnvelope,
  FaCode,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Intro() {
  return (
    <>
      <div className="animate-slide-in-left">
        <Image
          src="/picture.png"
          alt="portfolioImage"
          className="mt-12 rounded-lg animate-slow-bounce intro-image md:mt-0 transition-all duration-300 hover:scale-105"
          width={280}
          height={450}
        />
      </div>

      <div className="flex flex-col gap-4 justify-center md:items-start items-center animate-slide-in-right">
        <h1 className="text-4xl font-bold max-w-md text-center md:text-left md:text-6xl">
          <span className="text-gradient hover:bg-white transition-all duration-300">
            Rinat
          </span>{" "}
          <span className="text-gradient-white transition-all duration-300">Demchenko</span>
        </h1>

        <div className="animate-slide-in-up">
          <p className="text-white text-lg font-medium flex items-center gap-2 info-text hover:text-green-300 transition-all duration-300 cursor-pointer">
            <FaCode
              className="text-green-300 transition-all duration-300 hover:scale-110"
              size={16}
            />
            Fullstack Developer | UI/UX Designer
          </p>
        </div>

        <div className="animate-slide-in-up">
          <p className="text-white text-lg flex items-center gap-2 info-text hover:text-blue-300 transition-all duration-300 cursor-pointer">
            <FaMapMarkerAlt
              className="text-blue-400 transition-all duration-300 hover:scale-110"
              size={16}
            />
            Based in Košice, Slovakia
          </p>
        </div>

        {/* Кнопки действий */}
        <div className="flex gap-4 mt-4 mb-10 animate-slide-in-up md:mb-0">
          <button className="button-primary glow-effect px-6 py-3 rounded-xl font-semibold text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
            <FaEnvelope size={16} />
            Email me
          </button>
          <button className="button-outline glow-effect px-6 py-3 rounded-xl font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
            <FaDownload size={16} />
            Download CV
          </button>
        </div>

        {/* Социальные иконки */}
        <div className="flex gap-4 mb-6 mt-2 animate-slide-in-up md:mb-0">
          <Link href="https://www.linkedin.com/in/your_linkedin_username" className="text-white text-lg glass p-3 rounded-lg social-icon cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-110">
              <FaLinkedin className="rounded-lg" size={24} />
          </Link>
          <Link href="https://github.com/your_github_username" className="text-white text-lg glass p-3 rounded-lg social-icon cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-110">
              <FaGithub className="rounded-lg" size={24} />
          </Link>
          <Link href="https://t.me/your_telegram_username" className="text-white text-lg glass p-3 rounded-lg social-icon cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-110">
              <FaTelegram className="rounded-lg" size={24} />
          </Link>
          <Link href="https://wa.me/380931234567" className="text-white text-lg glass p-3 rounded-lg social-icon cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-110">
              <FaWhatsapp className="rounded-lg" size={24} />
          </Link>
        </div>
      </div>
    </>
  );
}
