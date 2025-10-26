"use client";

import Link from "next/link";
import Script from "next/script";
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
      <Script
        id="unicorn-studio"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();`,
        }}
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [-10, 20, -10] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="mt-12 relative overflow-y-hidden md:mt-0 w-[300px] h-[330px] sm:w-[400px] sm:h-[360px] lg:w-[450px] lg:h-[440px] md:mr-[-20px] lg:mr-[-30px] md:ml-[-20px] lg:ml-[-40px]"
        >
          {/* I know hiding a watermark is a terrible idea, but i'm not that stupid or rich to spend 17$ a month for 1 asset. Why would there be a watermark if i literally made it myself? */}
          <div
            data-us-project="WX4jtEaQnV2oSUKRdKYl"
            className="absolute w-[300px] h-[400px] transform scale-100 sm:w-[400px] sm:h-[450px] lg:w-[450px] lg:h-[550px] overflow-x-visible"
          />
        </motion.div>
      </motion.div>

      {/* Main content block with text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-4 justify-center items-center md:items-start"
      >
        <h1 className="text-4xl font-bold max-w-md text-center  md:text-6xl md:text-left neon">
          Rinat Demchenko
        </h1>

        {/* Professional title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-gray-300 text-lg font-medium flex items-center gap-2 info-text hover:text-green-300 transition-all duration-300">
            <FaLaptopCode
              className="text-green-300 transition-all duration-300 hover:scale-110"
              size={16}
            />
            <span>Fullstack Web Developer</span>
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
            className="text-gray-300 text-lg flex items-center gap-2 info-text hover:text-blue-300 transition-all duration-300 cursor-pointer"
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
          className="flex gap-4 mt-2 mb-10 md:mb-0"
        >
          {/* no, you can't just replace the link with a mailto: link, won't open in the new tab*/}
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rinatdemchenko@gmail.com"
            className="btn-primary rounded-md"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text">Email me</span>
            <FaEnvelope size={16} className="email-icon" />
          </Link>

          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="/resume.docx"
            className="button-outline glow-effect px-6 py-3 font-semibold cursor-pointer transition-all duration-300 flex items-center gap-2 rounded-md"
          >
            <FaDownload size={16} />
            <span>My resume</span>
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
            className="p-4 rounded-md backdrop-blur-lg border border-blue-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 active:scale-95 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-tr hover:from-blue-500/10 hover:to-black/40 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            <div className="relative z-10">
              <FaLinkedin className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/RinatDemchenko"
            className="p-4 rounded-md backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 active:scale-95 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            <div className="relative z-10">
              <FaGithub className="w-6 h-6 text-white group-hover:text-white/90 transition-colors duration-300" />
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://t.me/RinatDem"
            className="p-4 rounded-md backdrop-blur-lg border border-sky-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-sky-500/30 hover:scale-110 active:scale-95  transition-all duration-300 ease-out cursor-pointer hover:border-sky-500/50 hover:bg-gradient-to-tr hover:from-sky-500/10 hover:to-black/40 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            <div className="relative z-10">
              <FaTelegram className="w-6 h-6 text-sky-500 group-hover:text-sky-400 transition-colors duration-300" />
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://wa.me/380636918815"
            className="p-4 rounded-md backdrop-blur-lg border border-teal-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-110 active:scale-95 transition-all duration-300 ease-out cursor-pointer hover:border-teal-500/50 hover:bg-gradient-to-tr hover:from-teal-500/10 hover:to-black/40 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            <div className="relative z-10">
              <FaWhatsapp className="w-6 h-6 text-teal-500 group-hover:text-teal-400 transition-colors duration-300" />
            </div>
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
