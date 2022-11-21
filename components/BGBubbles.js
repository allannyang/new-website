import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";
import { unstable_createStaticHandler } from "@remix-run/router";

const BGBubbles = (props) => {
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
            enable: false, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 200, // maximum distance for linking the particles
          color: "#434343",
        },
        move: {
          enable: true,
          speed: { min: 0.025, max: 1 },
        },
        opacity: {
          value: { min: 0, max: 0 },
        },
        size: {
          value: { min: 1, max: 2 },
        },
        number: {
            density: {
                enable: true,
                area: 600,
            },
            value: 30,
        },
        shape: {
            type: "circle",
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default BGBubbles;