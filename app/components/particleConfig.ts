import type { ISourceOptions } from "@tsparticles/engine";

/**
 * Particle animation configuration
 * Controls the behavior, appearance, and interactions of background particles
 * Used by the Background component to create floating particle effects
 */
export const particlesConfig: ISourceOptions = {
  autoPlay: true,
  background: {
    color: {
      value: "transparent",
    },
  },
  fullScreen: {
    enable: false,
  },
  detectRetina: false,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: false,
        mode: "slow",
        parallax: {
          enable: true,
          force: 12,
          smooth: 20,
        },
      },
      resize: {
        delay: 0.5,
        enable: false,
      },
    },
    modes: {
      repulse: {
        distance: 150,
        duration: 0.8,
        factor: 100,
        speed: 0.8,
        maxSpeed: 3,
        easing: "ease-out-quad",
      },
    },
  },
  particles: {
    color: {
      value: [
        "#8a2dff",
        "#9f4dff",
        "#b46dff",
        "#c98dff",
        "#5c64ff",
        "#4285ff",
        "#28a5ff",
        "#0ec5ff",
        "#00e5ff",
        "#1affff",
        "#40ffff",
        "#60ffff",
        "#3dffea",
        "#48ffd5",
        "#52ffc0",
        "#5cffab",
        "#66ff96",
        "#70ff81",
      ],
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      random: false,
      speed: {
        min: 0.5,
        max: 2,
      },
      straight: false,
    },
    number: {
      density: {
        enable: true,
        width: 900,
        height: 900,
      },
      value: 40,
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.6,
      },
      animation: {
        enable: true,
        speed: 4,
        sync: false,
      },
    },
    reduceDuplicates: true,
    shape: {
      close: true,
      fill: true,
      options: {},
      type: "circle",
    },
    size: {
      value: {
        min: 0.6,
        max: 3.5,
      },
    },
    zIndex: {
      value: -1000,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: false,
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
  responsive: [
    {
      maxWidth: 768,
      options: {
        particles: {
          number: {
            value: 45,
          },
          move: {
            speed: {
              min: 0.5,
              max: 2,
            },
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: false,
              parallax: {
                enable: false,
              },
            },
          },
        },
      },
    },
    {
      maxWidth: 480,
      options: {
        particles: {
          number: {
            value: 30,
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: false,
              parallax: {
                enable: false,
              },
            },
          },
        },
      },
    },
  ],
};
