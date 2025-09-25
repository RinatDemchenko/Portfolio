"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState } from "react";

/**
 * Individual project component
 * Displays a single project with image carousel, description, tech stack, and links
 * Used by the Projects section to render each project from the projects data
 */
export default function Project({
  name,
  description,
  images,
  links,
  technologies,
}: {
  name: string;
  description: string;
  images: string[];
  links: string[];
  technologies: string[];
}) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  const prevImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(images.length - 1);
    }
  };

  return (
    <div className="glass-card p-6 rounded-lg flex min-h-140 flex-col gap-5 border-2 border-gray-700/60 backdrop-blur-sm">
      <div className="w-full flex flex-row items-center justify-center h-[200px] bg-gray-700/30 rounded-lg relative overflow-hidden group">
        {/* slider images */}
        <div
          className="flex transition-transform duration-500 ease-in-out w-full h-full"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-full flex-shrink-0">
              <Image
                src={image}
                alt={`${name} - Image ${index + 1}`}
                width={500}
                height={200}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* slider right and left buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute border-2 border-white/50 cursor-pointer left-3 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:border-white/80 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-xl hover:shadow-white/20 active:scale-95"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute border-2 border-white/50 cursor-pointer right-3 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:border-white/80 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-xl hover:shadow-white/20 active:scale-95"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* slider dots */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 bg-black/20 backdrop-blur-sm rounded-full px-3 py-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentImage
                    ? "bg-white shadow-lg scale-125"
                    : "bg-gray-400/60 hover:bg-gray-300/80 hover:scale-110"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">
          <span className="text-gradient">{name}</span>
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-row gap-3">
        <Link
          href={links[0]}
          rel="noopener noreferrer"
          target="_blank"
          className="glass px-4 py-3 overflow-hidden shimmer-animation glow-effect rounded-lg text-white text-sm font-medium flex items-center gap-2 transition-all duration-300 hover:bg-gray-600/40 hover:shadow-lg hover:shadow-gray-400/20 border border-gray-600/50 hover:border-gray-500/70 z-10"
        >
          <FaGithub className="w-4 h-4" />
          GitHub
        </Link>
        <Link
          href={links[1]}
          rel="noopener noreferrer"
          target="_blank"
          className="glass px-4 py-3 overflow-hidden shimmer-animation glow-effect rounded-lg text-white text-sm font-medium flex items-center gap-2 transition-all duration-300 hover:bg-gray-600/40 hover:shadow-lg hover:shadow-gray-400/20 border border-gray-600/50 hover:border-gray-500/70 z-10"
        >
          <FaGlobe className="w-4 h-4" />
          Live
        </Link>
      </div>

      <div className="flex flex-row gap-2 flex-wrap">
        {technologies.map((technology, index) => (
          <div
            key={technology}
            className="glass-card backdrop-blur px-3 py-2 rounded-full text-white text-xs font-medium border border-gray-600/50 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {technology}
          </div>
        ))}
      </div>
    </div>
  );
}
