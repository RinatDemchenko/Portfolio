"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaBook,
  FaCalendarAlt,
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";
// Education data imported from separate configuration file
import { education } from "../components/education";
import Link from "next/link";
import Image from "next/image";

export default function Education() {
  const [activeTab, setActiveTab] = useState("university");

  return (
    <div className="flex flex-col items-center justify-center gap-10 w-[95%]">
      <div className="relative max-w-[420px] w-full flex items-center justify-center p-3 gap-5 glass-card backdrop-blur-sm rounded-2xl border-2 border-gray-700/60">
        {/* Animated slider */}
        <div
          className={`absolute top-2 bottom-2 w-1/2 rounded-xl transition-all duration-500 ease-out ${
            activeTab === "university"
              ? "left-2 bg-blue-400/30 shadow-md shadow-blue-400/30"
              : "left-[48%] bg-green-400/30 shadow-md shadow-green-400/30"
          }`}
        />

        {/* University button */}
        <div
          className={`relative w-[48%] z-10 flex justify-center items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 ${
            activeTab === "university"
              ? "transform scale-105"
              : "hover:bg-blue-400/10 glow-effect"
          }`}
          onClick={() => setActiveTab("university")}
        >
          <FaUniversity
            className={`text-2xl transition-all duration-300 hover:scale-110 ${
              activeTab === "university" ? "text-blue-400" : "text-gray-400"
            }`}
          />
          <span
            className={`text-sm font-medium transition-all duration-300 ${
              activeTab === "university" ? "text-blue-400" : "text-gray-400"
            }`}
          >
            University
          </span>
        </div>

        {/* Courses button */}
        <div
          className={`relative w-[48%] z-10 flex justify-center items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 ${
            activeTab === "courses"
              ? "transform scale-105"
              : "hover:bg-green-400/10 glow-effect"
          }`}
          onClick={() => setActiveTab("courses")}
        >
          <FaBook
            className={`text-2xl transition-all duration-300 hover:scale-110 ${
              activeTab === "courses" ? "text-green-400" : "text-gray-400"
            }`}
          />
          <span
            className={`text-sm font-medium transition-all duration-300 ${
              activeTab === "courses" ? "text-green-400" : "text-gray-400"
            }`}
          >
            Courses
          </span>
        </div>
      </div>

      {/* Section content */}
      <div className="flex flex-col items-center justify-center gap-8 w-full">
        {/* University section */}

        {activeTab === "university" && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card backdrop-blur-sm p-8 rounded-2xl border-4 border-gray-700/60 max-w-2xl w-full hover:shadow-2xl hover:shadow-blue-400/10 hover:border-blue-100/40 transform hover:scale-[1.02] transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* University logo */}
                <div className="w-24 h-24 rounded-full bg-blue-400/20 flex items-center justify-center border-2 border-blue-400/30 hover:bg-blue-400/30 hover:border-blue-400/50 hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-400/20">
                  <Image
                    src={education.university.image}
                    alt={education.university.name}
                    width={48}
                    height={48}
                    className="transition-all duration-300"
                  />
                </div>

                {/* University information */}
                <div className="flex-1 text-center md:text-left space-y-3">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2 hover:text-blue-300 transition-colors duration-300">
                    {education.university.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {education.university.description}
                  </p>
                  <div className="flex flex-col md:flex-row gap-8 md:gap-2 items-center justify-center md:justify-between pt-2">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-blue-300">
                      <FaCalendarAlt className="text-sm" />
                      <span className="text-sm font-medium">
                        {education.university.date}
                      </span>
                    </div>
                    <div>
                      <Link
                        target="_blank"
                        href={"https://www.fei.tuke.sk/en"}
                        className="flex shimmer-animation-colorless before:bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.2),transparent)] relative overflow-hidden items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-400/20 border border-blue-400/30 text-blue-400 hover:bg-blue-400/30 hover:border-blue-400/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        <span className="text-sm font-medium">
                          Faculty page
                        </span>
                      </Link>
                    </div>
                    {/* confirmation */}
                    <div className="flex justify-start">
                      <Link
                        target="_blank"
                        href={education.university.conformation}
                        className="flex shimmer-animation-colorless before:bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.2),transparent)] relative overflow-hidden items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-400/20 border border-blue-400/30 text-blue-400 hover:bg-blue-400/30 hover:border-blue-400/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-300"
                      >
                        <BsFillPatchCheckFill className="text-sm" />
                        <span className="text-sm font-medium">
                          Confirmation
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Courses section */}
        {activeTab === "courses" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full"
          >
            {education.courses.map((course, index) => (
              <div
                key={index}
                className="glass-card backdrop-blur-sm p-6 rounded-2xl border-2 border-gray-700/60 hover:shadow-xl hover:shadow-green-400/20 hover:border-green-400/30 transition-all duration-300 group"
              >
                {/* Course logo */}
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-green-400/20 flex items-center justify-center border-2 border-green-400/30 group-hover:bg-green-400/30 group-hover:border-green-400/50 group-hover:scale-105 transition-all duration-300 shadow-lg shadow-green-400/10">
                    <Image
                      src={course.image}
                      alt={course.name}
                      width={48}
                      height={48}
                      className="transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Card content */}
                <div className="flex flex-col gap-3 text-center">
                  {/* Course title */}
                  <h4 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300 line-clamp-2">
                    {course.name}
                  </h4>

                  {/* Date */}
                  <div className="flex items-center justify-center gap-2 text-green-300 mb-2">
                    <FaCalendarAlt className="text-sm" />
                    <span className="text-sm font-medium">{course.date}</span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent mb-2"></div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  {/* Certificate button */}
                  <div className="flex justify-center">
                    <Link
                      target="_blank"
                      href={course.certificate}
                      className="flex before:bg-[linear-gradient(135deg,transparent,rgba(34,197,94,0.2),transparent)] shimmer-animation-colorless relative overflow-hidden items-center gap-2 px-6 py-3 rounded-xl bg-green-400/20 border border-green-400/30 text-green-400 hover:bg-green-400/30 hover:border-green-400/50 hover:scale-105 hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 group-hover:translate-y-[-2px]"
                    >
                      <FaCertificate className="text-sm" />
                      <span className="text-sm font-medium">Certificate</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
