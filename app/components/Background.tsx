"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particlesConfig } from "./particleConfig";
import { Container } from "@tsparticles/engine";

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
      // <div
      //   className="fixed pointer-events-none min-h-screen min-w-screen md:top-[-20%] md:left-[-20%] md:w-[140%] md:h-[140%]"
      // >
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesConfig}
          className="w-[140%] h-[140%] fixed top-[-20%] left-[-20%] pointer-events-none"
        />
      // </div>
    );
  }

  return null;
};

export default Background;
