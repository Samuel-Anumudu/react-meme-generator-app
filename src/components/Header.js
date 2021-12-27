import { React, useState, useEffect } from "react";
import logo from "../images/Troll_Face.png";
import { Animated } from "react-animated-css";
import Particles from "react-tsparticles";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const body = document.body;
    const formButton = document.querySelector(".form__btn");
    const descHeader = document.querySelector(".description--header");
    const descParagraph = document.querySelector(".description--paragraph");
    const downloadButton = document.querySelector(".download--btn");

    if (isToggled) {
      body.classList.add("active");
      formButton.classList.add("active");
      descHeader.classList.add("active");
      descParagraph.classList.add("active");
      downloadButton.classList.add("active");
    } else {
      body.classList.remove("active");
      formButton.classList.remove("active");
      descHeader.classList.remove("active");
      descParagraph.classList.remove("active");
      downloadButton.classList.remove("active");
    }
  }, [isToggled]);

  return (
    <>
      <header className={isToggled ? "active" : undefined}>
        <div className="container">
          <div className="row">
            <a className="col header__item--logo" href={"./index.html"}>
              <Animated
                animationIn="bounce"
                animationOut="fadeOut"
                isVisible={true}
              >
                <img className="trollface--logo" src={logo} alt="trollFace" />
              </Animated>
            </a>
            <h1
              className={
                isToggled
                  ? "col header__item--title active"
                  : "col header__item--title"
              }
            >
              Meme Generator
            </h1>
            <div
              className={isToggled ? "active" : undefined}
              onClick={() => setIsToggled(!isToggled)}
              id="toggle"
            >
              <i className="indicator"></i>
            </div>
            {/* <h3 className="col header__item--right">Toggle Mode Here</h3> */}
          </div>
        </div>
      </header>

      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 10,
              },
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
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 20,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "star",
            },
            size: {
              random: true,
              value: 1,
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default Header;
