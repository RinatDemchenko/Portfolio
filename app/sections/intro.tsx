import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaDownload,
  FaEnvelope,
  FaLaptopCode,
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
          <span className="text-gradient-white transition-all duration-300">
            Demchenko
          </span>
        </h1>

        <div className="animate-slide-in-up">
          <p className="text-white text-lg font-medium flex items-center gap-2 info-text hover:text-green-300 transition-all duration-300">
            <FaLaptopCode
              className="text-green-300 transition-all duration-300 hover:scale-110"
              size={16}
            />
            Fullstack Developer | UI/UX Designer
          </p>
        </div>

        <div className="animate-slide-in-up">
          <Link rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/Ko%C5%A1ice/@48.716667,21.25,15z/data=!4m5!3m4!1s0x473ee045cfb94e6d:0x4262ec9e629e1ac3!8m2!3d48.716667!4d21.25" className="text-white text-lg flex items-center gap-2 info-text hover:text-blue-300 transition-all duration-300 cursor-pointer">
            <FaMapMarkerAlt
              className="text-blue-400 transition-all duration-300 hover:scale-110"
              size={16}
            />
            Based in Košice, Slovakia
          </Link>
        </div>

        {/* Кнопки действий */}
        <div className="flex gap-4 mt-4 mb-10 animate-slide-in-up md:mb-0">
          <Link href="mailto:rinatdemchenko@gmail.com" rel="noopener noreferrer" target="_blank" className="button-primary shimmer-animation glow-effect px-6 py-3 rounded-xl font-semibold text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
            <FaEnvelope size={16} />
            Email me
          </Link>
          <Link rel="noopener noreferrer" target="_blank" href="/CV.pdf" className="button-outline glow-effect px-6 py-3 rounded-xl font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
            <FaDownload size={16} />
            Download CV
          </Link>
        </div>

        {/* Социальные иконки */}
        <div className="flex gap-4 mb-6 mt-2 animate-slide-in-up md:mb-0">
          <Link rel="noopener noreferrer" target="_blank"
            href="https://www.linkedin.com/in/rinat-demchenko-28ab29372"
            className="text-white text-lg bg-blue-500/10 p-3 rounded-lg border-teal-transparent social-icon cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <FaLinkedin className="rounded-lg" size={24} />
          </Link>
          <Link rel="noopener noreferrer" target="_blank"
            href="https://github.com/RinatDemcenko"
            className="text-white text-lg bg-blue-500/10 p-3 rounded-lg border-teal-transparent social-icon cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <FaGithub className="rounded-lg" size={24} />
          </Link>
          <Link rel="noopener noreferrer" target="_blank"
            href="https://t.me/RinatDem"
            className="text-white text-lg bg-blue-500/10 p-3 rounded-lg border-teal-transparent social-icon cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <FaTelegram className="rounded-lg" size={24} />
          </Link>
          <Link rel="noopener noreferrer" target="_blank"
            href="https://wa.me/380636918815"
            className="text-white text-lg bg-blue-500/10 p-3 rounded-lg border-teal-transparent social-icon cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <FaWhatsapp className="rounded-lg" size={24} />
          </Link>
        </div>
      </div>
    </>
  );
}
