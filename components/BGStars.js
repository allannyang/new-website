import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";
import { unstable_createStaticHandler } from "@remix-run/router";

const BGStars = (props) => {
  const options = useMemo(() => {
    return {
      background: {
      },
      fullScreen: {
        enable: true,
        zIndex: -10000,
      },
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 100, // number of particles to add on click
          },
          repulse: {
            distance: 50, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        links: {
          enable: false, // enabling this will make particles linked together
          distance: 200, // maximum distance for linking the particles
          color: "#000000",
        },
        move: {
          enable: true,
          speed: { min: 0.025, max: 1 },
        },
        opacity: {
          value: { min: 0.1, max: 0.3 },
        },
        size: {
          value: { min: 1, max: 10 },
        },
        number: {
            density: {
                enable: true,
                area: 600,
            },
            value: 30,
        },
        color: {
          value: "#854430",
        },
        shape: {
            type: "star",
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default BGStars;