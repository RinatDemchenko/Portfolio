"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaDownload,
  FaEnvelope,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaChevronDown,
} from "react-icons/fa";

export default function Intro() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Animated image on the left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <Image
            src="https://res.cloudinary.com/dpez2v26l/image/upload/v1753562595/picture_cpes5l.png"
            alt="portfolioImage"
            className="mt-12 rounded-lg intro-image md:mt-0 transition-all duration-300"
            width={280}
            height={450}
          />
        </motion.div>
      </motion.div>

      {/* Main content block with text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-4 justify-center md:items-start items-center"
      >
        <h1 className="text-4xl font-bold max-w-md text-center md:text-left md:text-6xl">
          <span className="text-gradient hover:bg-white transition-all duration-300">
            Rinat
          </span>{" "}
          <span className="text-gradient-white transition-all duration-300">
            Demchenko
          </span>
        </h1>

        {/* Professional title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-white text-lg font-medium flex items-center gap-2 info-text hover:text-green-300 transition-all duration-300">
            <FaLaptopCode
              className="text-green-300 transition-all duration-300 hover:scale-110"
              size={16}
            />
            <span className="w-45 sm:w-full">
            Fullstack Developer | UI/UX Designer
            </span>
          </p>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/maps/place/Ko%C5%A1ice/@48.716667,21.25,15z/data=!4m5!3m4!1s0x473ee045cfb94e6d:0x4262ec9e629e1ac3!8m2!3d48.716667!4d21.25"
            className="text-white text-lg flex items-center gap-2 info-text hover:text-blue-300 transition-all duration-300 cursor-pointer"
          >
            <FaMapMarkerAlt
              className="text-blue-400 transition-all duration-300 hover:scale-110"
              size={16}
            />
            Based in Košice, Slovakia
          </Link>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex gap-4 mt-4 mb-10 md:mb-0"
        >
          {/* no, you can't just replace the link with a mailto: link, won't open in the new tab*/}
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rinatdemchenko@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="button-primary shimmer-animation glow-effect px-6 py-3 rounded-xl font-semibold text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <FaEnvelope size={16} />
            Email me
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="/CV.pdf"
            className="button-outline glow-effect px-6 py-3 rounded-xl font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <FaDownload size={16} />
            Download CV
          </Link>
        </motion.div>

        {/* Social media icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="flex gap-4 mb-6 mt-2 md:mb-0"
        >
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/rinat-demchenko-28ab29372"
            className="text-white text-lg bg-blue-500/10 p-3 rounded-lg border-teal-transparent social-icon cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <FaLinkedin className="rounded-lg" size={24} />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/RinatDemchenko"
            className="text-white text-lg bg-blue-500/10 p-3 rounded-lg border-teal-transparent social-icon cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <FaGithub className="rounded-lg" size={24} />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://t.me/RinatDem"
            className="text-white text-lg bg-blue-500/10 p-3 rounded-lg border-teal-transparent social-icon cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <FaTelegram className="rounded-lg" size={24} />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://wa.me/380636918815"
            className="text-white text-lg bg-blue-500/10 p-3 rounded-lg border-teal-transparent social-icon cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <FaWhatsapp className="rounded-lg" size={24} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll down indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-26 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <FaChevronDown
          size={32}
          className="text-white/60 hover:text-white transition-colors duration-300"
        />
      </motion.div>
    </>
  );
}
