import React, { useRef } from "react";
import portfolioVideo from "../assets/images/me.mp4";

function Hero() {
  const videoRef = useRef(null);

  const canAnimateVideo = () =>
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const handleMouseMove = (e) => {
    if (!canAnimateVideo()) return;

    const screenWidth = window.innerWidth;

    // Normalize mouse position (0 → 1)
    const mouseX = e.clientX / screenWidth;

    // Movement range (increase for stronger effect)
    const maxMove = 500;

    // Calculate translateX
    const translateX = (mouseX - 0.5) * maxMove;

    if (videoRef.current) {
      videoRef.current.style.transform = `
        translateX(${translateX}px)
        scale(1.00)
      `;
    }
  };

  const handleMouseLeave = () => {
    if (!canAnimateVideo()) return;

    if (videoRef.current) {
      videoRef.current.style.transform =
        "translateX(0px) scale(1)";
    }
  };

  return (
    <section
      className="hero-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* HEADER */}
      <div className="container-fluid pt-4 px-4">
        <div className="row align-items-start">

          <div className="col-lg-3 d-none d-lg-block">
            <p className="mb-0 header-text text-secondary">
              GR Based <br />
              <span className="fw-semibold text-dark">
                Working globally
              </span>
            </p>
          </div>

          <div className="col-lg-3 col-6">
            <p className="mb-0 header-text text-secondary">
              Building at <br />
              <span className="fw-semibold text-dark">
                Kentavros
              </span>
            </p>
          </div>

          <div className="col-lg-3 d-none d-lg-block">
            <p className="mb-0 header-text text-secondary">
              Freelance availability <br />
              <span className="fw-semibold text-dark">
                September 2025
              </span>
            </p>
          </div>

          <div className="col-lg-3 col-6 text-end">
            <button className="btn btn-dark rounded-pill px-4">
              Get in touch
            </button>
          </div>

        </div>
      </div>

      <div className="hero-content">
        <div className="headline-top">
          <span>A</span>
          <span>SERIOUSLY</span>
          <span>GOOD</span>
        </div>

        {/* INTERACTIVE VIDEO */}
        <div className="hero-video-wrapper">
          <video
            ref={videoRef}
            src={portfolioVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="hero-video"
          />
        </div>

        <div className="headline-main">
          <span>SOFTWARE</span>{" "}
          <span>ENGINEER</span>
        </div>
      </div>

    </section>
  );
}

export default Hero;
