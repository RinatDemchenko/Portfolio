"use client";
import { useState } from "react";
import { FaUniversity, FaBook } from "react-icons/fa";

export default function Education() {
  const [activeTab, setActiveTab] = useState("university");

  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full">
      <div className="flex flex-row items-center justify-center  w-full">
        {/* university/courses switch */}
        <div className="flex flex-row items-center justify-center gap-10 w-full">
          <div className="flex flex-row items-center justify-center gap-10 w-full">
            <FaUniversity className="text-white text-2xl" />
            <FaBook className="text-white text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-10 w-full">
        {/* university/courses content */}
      </div>
    </div>
  );
}
