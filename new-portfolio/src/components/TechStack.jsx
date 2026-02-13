import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
  FaJsSquare,
  FaWordpress
} from "react-icons/fa";

import {
  SiMysql,
  SiFigma
} from "react-icons/si";

function TechStack() {
  return (
    <section className="stack-section">
        <div>
            <div className="stack-big-title">
                MODERN <br /> TECH STACK
            </div>
        </div>

      <p className="stack-label">WORKING WITH</p>

      <div className="stack-grid">

        {/* 1 React */}
        <div className="stack-item">
          <FaReact size={60} />
        </div>

        {/* 2 HTML */}
        <div className="stack-item">
          <FaHtml5 size={60} />
        </div>

        {/* 3 CSS */}
        <div className="stack-item">
          <FaCss3Alt size={60} />
        </div>

        {/* 4 JavaScript */}
        <div className="stack-item">
          <FaJsSquare size={60} />
        </div>

        {/* 5 Python */}
        <div className="stack-item">
          <FaPython size={60} />
        </div>

        {/* 6 Git */}
        <div className="stack-item">
          <FaGitAlt size={60} />
        </div>

        {/* 7 SQL */}
        <div className="stack-item">
          <SiMysql size={60} />
        </div>

        {/* 8 WordPress */}
        <div className="stack-item">
          <FaWordpress size={60} />
        </div>

        {/* 9 Figma */}
        <div className="stack-item">
          <SiFigma size={60} />
        </div>

      </div>
    </section>
  );
}

export default TechStack;
