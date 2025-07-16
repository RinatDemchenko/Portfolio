"use client";

import { useState } from "react";
import {
  FaBars,
  FaCode,
  FaServer,
  FaDatabase,
  FaPaintBrush,
  FaCloud,
} from "react-icons/fa";
import { skills } from "../components/skills";
import Skill from "../components/skill";

export default function Skills() {
  const [category, setCategory] = useState("All");

  const getCategoryBgColor = (cat: string) => {
    switch (cat) {
      case "All":
        return "bg-gray-400/30";
      case "Frontend":
        return "bg-green-300/30";
      case "Backend":
        return "bg-blue-400/30";
      case "Database":
        return "bg-yellow-400/30";
      case "Design":
        return "bg-pink-400/30";
      case "DevOps":
        return "bg-white/30";
      default:
        return "bg-gray-400/30";
    }
  };

  return (
    <div className="flex gap-4 justify-center items-center flex-col">
      <div className="flex flex-row flex-wrap items-center justify-center w-[95%]  min-h-30 glass-card rounded-lg border-2 border-gray-700/60 p-2 gap-6">
        <div
          id="All"
          className={`w-20 flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/20 hover:transform hover:scale-105 hover:-translate-y-1 glow-effect ${
            category === "All"
              ? `${getCategoryBgColor(
                  "All"
                )} shadow-lg shadow-gray-400/30 transform scale-105`
              : "hover:bg-gray-400/20"
          }`}
          onClick={() => setCategory("All")}
        >
          <FaBars className="w-8 h-8 text-gray-400 transition-all duration-300 hover:scale-110" />
          <span className="text-xs text-gray-400 mt-1 font-medium">All</span>
        </div>
        <div
          id="Frontend"
          className={`w-20 flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-green-300/20 hover:transform hover:scale-105 hover:-translate-y-1 glow-effect ${
            category === "Frontend"
              ? `${getCategoryBgColor(
                  "Frontend"
                )} shadow-lg shadow-green-300/30 transform scale-105`
              : "hover:bg-green-300/20"
          }`}
          onClick={() => setCategory("Frontend")}
        >
          <FaCode className="w-8 h-8 text-green-300 transition-all duration-300 hover:scale-110" />
          <span className="text-xs text-green-300 mt-1 font-medium">
            Frontend
          </span>
        </div>
        <div
          id="Backend"
          className={`w-20 flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 hover:transform hover:scale-105 hover:-translate-y-1 glow-effect ${
            category === "Backend"
              ? `${getCategoryBgColor(
                  "Backend"
                )} shadow-lg shadow-blue-400/30 transform scale-105`
              : "hover:bg-blue-400/20"
          }`}
          onClick={() => setCategory("Backend")}
        >
          <FaServer className="w-8 h-8 text-blue-400 transition-all duration-300 hover:scale-110" />
          <span className="text-xs text-blue-400 mt-1 font-medium">
            Backend
          </span>
        </div>
        <div
          id="Database"
          className={`w-20 flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 hover:transform hover:scale-105 hover:-translate-y-1 glow-effect ${
            category === "Database"
              ? `${getCategoryBgColor(
                  "Database"
                )} shadow-lg shadow-yellow-400/30 transform scale-105`
              : "hover:bg-yellow-400/20"
          }`}
          onClick={() => setCategory("Database")}
        >
          <FaDatabase className="w-8 h-8 text-yellow-400 transition-all duration-300 hover:scale-110" />
          <span className="text-xs text-yellow-400 mt-1 font-medium">
            Database
          </span>
        </div>
        <div
          id="Design"
          className={`w-20 flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/20 hover:transform hover:scale-105 hover:-translate-y-1 glow-effect ${
            category === "Design"
              ? `${getCategoryBgColor(
                  "Design"
                )} shadow-lg shadow-pink-400/30 transform scale-105`
              : "hover:bg-pink-400/20"
          }`}
          onClick={() => setCategory("Design")}
        >
          <FaPaintBrush className="w-8 h-8 text-pink-400 transition-all duration-300 hover:scale-110" />
          <span className="text-xs text-pink-400 mt-1 font-medium">Design</span>
        </div>
        <div
          id="DevOps"
          className={`w-20 flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-gray-100/20 hover:transform hover:scale-105 hover:-translate-y-1 glow-effect ${
            category === "DevOps"
              ? `${getCategoryBgColor(
                  "DevOps"
                )} shadow-lg shadow-white/30 transform scale-105`
              : "hover:bg-white/20"
          }`}
          onClick={() => setCategory("DevOps")}
        >
          <FaCloud className="w-8 h-8 text-white transition-all duration-300 hover:scale-110" />
          <span className="text-xs text-white mt-1 font-medium">DevOps</span>
        </div>
      </div>
          {/* overall container size is dependent on the size of this grid */}
      <div
        id="skills"
        className="grid w-full grid-cols-1 items-center place-items-center gap-4 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4"
      >
        {category === "All"
          ? skills.map((skill) => <Skill key={skill.name} {...skill} />)
          : skills
              .filter((skill) => skill.categories.includes(category))
              .map((skill) => <Skill key={skill.name} {...skill} />)}
      </div>
    </div>
  );
}
