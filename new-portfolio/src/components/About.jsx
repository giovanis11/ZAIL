import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const textRef = useRef(null);

 useEffect(() => {
  const words = textRef.current.querySelectorAll("span");

  gsap.fromTo(
    words,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 75%", //try 75 from 80
        end: "bottom 70%", // try 30 from 20
        scrub: true,
      },
    }
  );
}, []);


  return (
    <section className="about-section">
      <div className="container-fluid px-5">
        <div className="row align-items-center">

          {/* TEXT SIDE */}
          <div className="col-lg-7">
            <div className="about-statement" ref={textRef}>
              <span>Passionate</span>
              <span>about</span>
              <span>merging</span>
              <span>design</span>
              <span>and</span>
              <span>engineering,</span>
              <span>I</span>
              <span>craft</span>
              <span>smooth,</span>
              <span>interactive</span>
              <span>experiences</span>
              <span>with</span>
              <span>purpose.</span>

              <span>With</span>
              <span>a</span>
              <span>focus</span>
              <span>on</span>
              <span>motion,</span>
              <span>performance,</span>
              <span>and</span>
              <span>detail,</span>

              <span>I</span>
              <span>help</span>
              <span>bring</span>
              <span>digital</span>
              <span>products</span>
              <span>to</span>
              <span>life</span>
              <span>for</span>
              <span>forward-thinking</span>
              <span>brands</span>
              <span>around</span>
              <span>the</span>
              <span>world.</span>
            </div>
          </div>

          {/* IMAGE */}
          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <img
              src="https://via.placeholder.com/600x600"
              alt="About"
              className="img-fluid rounded-4"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
