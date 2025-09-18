import React from "react";
import myImage from "../assets/aboutimg.png";

 // Make sure path is correct
// optional if you have custom CSS
import "./About.css";
function About() {
  return (
    <div>
      <div
        className="container-fluid p-4 p-md-5 mb-4 rounded bg-dark text-white fw-bold"
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <div className="About">
          <h3>About Me</h3>
        </div>

        <hr style={{ borderTop: "7px solid #01caf7", width: "120px" }} />

        <div className="row align-items-center mt-4">
          {/* Left content */}
          <div className="col-lg-8 px-0">
            <p className="lead my-3 mb-4 text-justify ">
              I'm Shyam Kumar Mandal, 3rd year Btech student in Information
              Technology and an aspiring Machine Learning Engineer with a strong
              interest in statistics, probability, and mathematics. I am
              choosing this career because I enjoy understanding data, creating
              visualizations, and applying analytical techniques to solve
              problems. Graphs and data analysis have always fascinated me, and
              I love exploring how mathematical concepts can drive real-world
              solutions. Currently, I am learning to build and evaluate machine
              learning models using tools like Python, scikit-learn, and
              TensorFlow.
              <br />
              Outside of my academic interests, I enjoy playing cricket in my
              free time, as it keeps me active and teaches me teamwork and
              focus. I also like to play chess, which helps me improve my
              strategic thinking and problem-solving skills.
            </p>

<div className="d-flex justify-content-center mt-5">
  <a href="/Resume.pdf" download="Shyam's Resume.pdf">
    <button type="button" className="btn mb-4 custom-resume-btn">
      Download Resume
    </button>
  </a>
</div>

          </div>

          {/* Right image + social links */}
          <div className="col-lg-4 text-center">
            <div className="myimg">
              <img src={myImage} alt="My Photo" className="img-fluid" />
            </div>

            <div className="social-links text-center mt-4">
              <a
                href="https://github.com/Shyam-Ro45"
                className="mx-3 text-decoration-none"
                style={{ color: "white", fontSize: "2rem" }}
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/shyam-kumar-mandal-b35951290"
                className="mx-3 text-decoration-none"
                style={{ color: "white", fontSize: "2rem" }}
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=skm39xb@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-decoration-none"
                style={{ color: "white", fontSize: "2rem" }}
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
