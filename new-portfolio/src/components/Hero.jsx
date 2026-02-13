import React from "react";

function Hero() {
  return (
    <section className="hero-section">

      {/* ================= HEADER ================= */}
      <div className="container-fluid pt-4 px-4">
        <div className="row align-items-start">

          {/* Desktop Block 1 */}
          <div className="col-lg-3 d-none d-lg-block">
            <p className="mb-0 header-text text-secondary">
              GR Based <br />
              <span className="fw-semibold text-dark">
                Working globally
              </span>
            </p>
          </div>

          {/* Block 2 (Always visible) */}
          <div className="col-lg-3 col-6">
            <p className="mb-0 header-text text-secondary">
              Building at <br />
              <span className="fw-semibold text-dark">
                Kentavros
              </span>
            </p>
          </div>

          {/* Desktop Block 3 */}
          <div className="col-lg-3 d-none d-lg-block">
            <p className="mb-0 header-text text-secondary">
              Freelance availability <br />
              <span className="fw-semibold text-dark">
                September 2025
              </span>
            </p>
          </div>

          {/* Button */}
          <div className="col-lg-3 col-6 text-end">
            <button className="btn btn-dark rounded-pill px-4">
              Get in touch
            </button>
          </div>

        </div>
      </div>

      {/* ================= MOBILE IMAGE ================= */}
      <div className="container d-lg-none my-4">
        <div className="mock-card text-center">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Mock project"
            className="img-fluid rounded-4"
          />
        </div>
      </div>

      {/* ================= DESKTOP IMAGE ================= */}
      <div className="container d-none d-lg-block text-center my-4">
        <div className="mock-card">
          <img
            src="https://via.placeholder.com/1200x500"
            alt="Mock project"
            className="img-fluid rounded-4"
          />
        </div>
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
