"use client";
import React from "react";
import Image from "next/image";
import {
  FaDatabase,
  FaPaintBrush,
  FaCode,
  FaServer,
  FaCloud,
} from "react-icons/fa";

/**
 * Individual skill component
 * Displays a single skill with animated card, icon, and category-based styling
 * Used by the Skills section to render each skill from the skills data
 */
export interface SkillProps {
  name: string;
  image: string;
  description: string;
  background: string;
  categories: string[];
}

const getCategoryIcon = (categories: string[]) => {
  const primaryCategory = categories[0];

  switch (primaryCategory) {
    case "Frontend":
      return <FaCode className="text-green-300" />;
    case "Backend":
      return <FaServer className="text-blue-400" />;
    case "Database":
      return <FaDatabase className="text-yellow-400" />;
    case "Design":
      return <FaPaintBrush className="text-pink-400" />;
    case "DevOps":
      return <FaCloud className="text-white" />;
    default:
      return <FaCode className="text-gray-400" />;
  }
};

// skill background on hover is dependent on object in skills.tsx

export default function Skill({
  name,
  image,
  description,
  background,
  categories,
}: SkillProps) {
  return (
    <div
      className="flex glass-card py-6 min-h-30 px-4 w-[95%] max-w-sm rounded-md flex-row items-center justify-around border-2 border-gray-700/60 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/10 hover:transform hover:scale-105"
      style={
        {
          "--hover-border-color": background,
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = background;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
      }}
    >
      <div className="flex flex-row items-center justify-center w-14 h-14 bg-gray-700/50 rounded-xl shadow-lg group-hover:bg-gray-600/60 transition-all duration-300">
        <Image
          src={image}
          alt={name}
          width={28}
          height={28}
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 mx-4">
        <h1 className="text-white text-lg font-semibold group-hover:text-gray-100 transition-colors duration-300">
          {name}
        </h1>
        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
      <div className="flex flex-row items-center justify-center w-14 h-14 bg-gray-700/50 rounded-xl shadow-lg group-hover:bg-gray-600/60 transition-all duration-300">
        <div className="text-xl group-hover:scale-110 transition-transform duration-300">
          {getCategoryIcon(categories)}
        </div>
      </div>
    </div>
  );
}
