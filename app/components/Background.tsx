"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
// Particle animation configuration imported from separate file
import { particlesConfig } from "./particleConfig";
import { Container } from "@tsparticles/engine";

/**
 * Animated background component using tsparticles
 * Creates floating particles effect for visual enhancement
 * Configuration settings are defined in particleConfig.ts
 */
const Background: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particlesConfig}
        className="w-[140%] h-[140%] fixed top-[-20%] left-[-20%]"
        style={{ zIndex: -1 }}
      />
    );
  }

  return null;
};

export default Background;
