import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import Style from "./NotFound.module.css";
import { Link } from "react-router-dom";
export default function NotFound() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async function (container) {
    await console.log(container);
  }, []);

  return (
    <>
      <div className="row ">
        <div className="col-md-12 ">
          <div className={` position-relative z-3  ${Style.oops}`}>
            <div className={Style.errorText}>
              <img
                src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
                alt={404}
              />
              <span className="text-light">404 PAGE</span>
              <p className="p-a">
                . The page you were looking for could not be found
              </p>
              <p className="p-b">... Back to previous page</p>
              <Link to="/" className={Style.back}>
                ... Back to previous page
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#161616",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#28ff39",
            },
            links: {
              color: "#f7ff0c",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 2,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
}
