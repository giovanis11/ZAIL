import React from "react";
import portfolioVideo from "../assets/images/me.mp4";

function Hero() {
  return (
    <section className="hero-section">

      {/* ================= HEADER ================= */}
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

      {/* ================= HERO VIDEO ================= */}
      <div className="hero-video-wrapper">

        <video
          src={portfolioVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="hero-video"
        />

      </div>

      {/* ================= HEADLINE ================= */}
      <div className="headline-wrapper">

        <div className="headline-top d-flex justify-content-between">
          <span>A</span>
          <span>SERIOUSLY</span>
          <span>GOOD</span>
        </div>

        <div className="headline-main text-center">
          SOFTWARE ENGINEER
        </div>

      </div>

    </section>
  );
}

export default Hero;