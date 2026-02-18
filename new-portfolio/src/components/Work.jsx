import React from "react";
import project1 from "../assets/images/project1.jpeg";
import project2 from "../assets/images/project2.jpg";

function Work() {
  return (
    <section className="work-section">

      <div className="work-title">
        SELECTED WORK
      </div>
      <div className="work-title-date">
        25'
      </div>

      <div className="container-fluid px-5">
        <div className="row">

          {/* PROJECT 1 */}
          <div className="col-lg-6 mb-5">
            <div className="project-card">

              <img
                src={project1}
                alt="Project 1"
                className="img-fluid"
              />

              {/* INFO PANEL */}
              <div className="project-info">
                <div className="project-info-top">
                  <span className="project-name">
                    MARMORIS CRUISES
                  </span>
                  <span className="project-meta-right">
                    WEBSITE &nbsp; 24'
                  </span>
                </div>

                <div className="project-marquee">
                <div className="marquee-track">
                    <div className="marquee-content">
                    WORDPRESS — UI — UX — FIGMA — PAPAKI —
                    </div>
                    <div className="marquee-content">
                    WORDPRESS — UI — UX — FIGMA — PAPAKI —
                    </div>
                </div>
                </div>

            </div>


              {/* HOVER BUTTON */}
              <div className="project-overlay">
                <button className="open-btn">
                  Open Project
                </button>
              </div>

            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="col-lg-6 mb-5">
            <div className="project-card">

              <img
                src={project2}
                alt="Project 2"
                className="img-fluid"
              />

              {/* INFO PANEL */}
              <div className="project-info">
                <div className="project-info-top">
                  <span className="project-name">
                    OMERTA EXPERIENCE
                  </span>
                  <span className="project-meta-right">
                    WEBSITE &nbsp; 24'
                  </span>
                </div>

                <div className="project-marquee">
                <div className="marquee-track">
                    <div className="marquee-content">
                    WORDPRESS, UI, UX, FIGMA, PAPAKI, HOSTING, SEO, ANALYTICS, ADS,
                    </div>
                    <div className="marquee-content">
                    WORDPRESS, UI, UX, FIGMA, PAPAKI, HOSTING, SEO, ANALYTICS, ADS,
                    </div>
                </div>
                </div>

              </div>

              {/* HOVER BUTTON */}
              <div className="project-overlay">
                <button className="open-btn">
                  Open Project
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className="see-all-wrapper">
  <a href="#" className="see-all-link">
    See all <span className="arrow">→</span>
  </a>
        </div>

    </section>
  );
}

export default Work;
