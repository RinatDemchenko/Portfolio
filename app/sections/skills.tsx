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
// Skills data imported from separate configuration file
import { skills } from "../components/skills";
import Skill from "../components/skill";

export default function Skills() {
  const [category, setCategory] = useState("All");

  const getCategoryBgColor = (cat: string) => {
    switch (cat) {
      case "All":
        return "bg-gray-400/20";
      case "Frontend":
        return "bg-green-300/20";
      case "Backend":
        return "bg-blue-400/20";
      case "Database":
        return "bg-yellow-400/20";
      case "Design":
        return "bg-pink-400/20";
      case "DevOps":
        return "bg-white/20";
      default:
        return "bg-gray-400/20";
    }
  };

  return (
    <div className="flex gap-4 justify-center items-center flex-col">
      <div className="flex flex-row flex-wrap items-center justify-center w-[95%]  min-h-30 glass-card backdrop-blur-sm rounded-lg border-2 border-gray-700/60 p-2 gap-6">
        <div
          id="All"
          className={`w-20 flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-sm hover:shadow-gray-400/15 hover:transform hover:scale-102 ${
            category === "All"
              ? `${getCategoryBgColor(
                  "All"
                )} shadow-sm shadow-gray-400/20 transform scale-105`
              : "hover:bg-gray-400/15"
          }`}
          onClick={() => setCategory("All")}
        >
          <FaBars className="w-8 h-8 text-gray-400 transition-all duration-300" />
          <span className="text-xs text-gray-400 mt-1 font-medium">All</span>
        </div>
        <div
          id="Frontend"
          className={`w-20 flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-sm hover:shadow-green-300/15 hover:transform hover:scale-105 ${
            category === "Frontend"
              ? `${getCategoryBgColor(
                  "Frontend"
                )} shadow-sm shadow-green-300/20 transform scale-105`
              : "hover:bg-green-300/15"
          }`}
          onClick={() => setCategory("Frontend")}
        >
          <FaCode className="w-8 h-8 text-green-300 transition-all duration-300" />
          <span className="text-xs text-green-300 mt-1 font-medium">
            Frontend
          </span>
        </div>
        <div
          id="Backend"
          className={`w-20 flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-sm hover:shadow-blue-400/15 hover:transform hover:scale-105 ${
            category === "Backend"
              ? `${getCategoryBgColor(
                  "Backend"
                )} shadow-sm shadow-blue-400/20 transform scale-105`
              : "hover:bg-blue-400/15"
          }`}
          onClick={() => setCategory("Backend")}
        >
          <FaServer className="w-8 h-8 text-blue-400 transition-all duration-300" />
          <span className="text-xs text-blue-400 mt-1 font-medium">
            Backend
          </span>
        </div>
        <div
          id="Database"
          className={`w-20 flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-sm hover:shadow-yellow-400/15 hover:transform hover:scale-105 ${
            category === "Database"
              ? `${getCategoryBgColor(
                  "Database"
                )} shadow-sm shadow-yellow-400/20 transform scale-105`
              : "hover:bg-yellow-400/15"
          }`}
          onClick={() => setCategory("Database")}
        >
          <FaDatabase className="w-8 h-8 text-yellow-400 transition-all duration-300" />
          <span className="text-xs text-yellow-400 mt-1 font-medium">
            Database
          </span>
        </div>
        <div
          id="Design"
          className={`w-20 flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-sm hover:shadow-pink-400/15 hover:transform hover:scale-105 ${
            category === "Design"
              ? `${getCategoryBgColor(
                  "Design"
                )} shadow-sm shadow-pink-400/20 transform scale-105`
              : "hover:bg-pink-400/15"
          }`}
          onClick={() => setCategory("Design")}
        >
          <FaPaintBrush className="w-8 h-8 text-pink-400 transition-all duration-300" />
          <span className="text-xs text-pink-400 mt-1 font-medium">Design</span>
        </div>
        <div
          id="DevOps"
          className={`w-20 flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-sm hover:shadow-gray-100/15 hover:transform hover:scale-105 ${
            category === "DevOps"
              ? `${getCategoryBgColor(
                  "DevOps"
                )} shadow-sm shadow-white/20 transform scale-105`
              : "hover:bg-white/15"
          }`}
          onClick={() => setCategory("DevOps")}
        >
          <FaCloud className="w-8 h-8 text-white transition-all duration-300" />
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
