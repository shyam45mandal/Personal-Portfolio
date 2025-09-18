import React from "react";
import "./Skill.css";
import myImage from "../assets/LeetCode_Logo_1.png";
import { CgEditNoise } from "react-icons/cg";
function Skills() {
  return (
    <div className="Skill bg-dark text-white">
      <div className="Skill Container">
        <div className="Skills">
          <h2 className="fw-bold">My Skills</h2>
        </div>
        <hr style={{ borderTop: "7px solid #01cef7", width: "120px" }} />

        {/* Web Development */}
        <div className="Web Development mb-4">
          <div className="S-title d-flex justify-content-center">
            <h3 className="fw-bold">
              Web <span className="text-info">Development</span>
            </h3>
          </div>
          <div className="skillcards d-flex justify-content-around flex-wrap">
            {/* BASICS */}
            <div className="card mt-4 border-info shadow-info">
              <div className="card-body">
                <h5 className="card-title text-info text-center mb-3 fw-semibold">
                  Basic
                </h5>
                <ol className="custom-list">
                  <li style={{ "--percent": "90%" }}>HTML</li>
                  <li style={{ "--percent": "80%" }}>CSS</li>
                  <li style={{ "--percent": "60%" }}>Javascript</li>
                </ol>
              </div>
            </div>

            {/* FRONTEND */}
            <div className="card mt-4 border border-3 border-info shadow-info">
              <div className="card-body">
                <h5 className="card-title text-info text-center mb-3 fw-semibold">
                  Frontend
                </h5>
                <ol className="custom-list">
                  <li style={{ "--percent": "80%" }}>Bootstrap</li>
                  <li style={{ "--percent": "50%" }}>React</li>
                  <li style={{ "--percent": "20%" }}>Tailwind CSS</li>
                </ol>
              </div>
            </div>

            {/* BACKEND */}
            <div className="card mt-4 border border-3 border-info shadow-info">
              <div className="card-body">
                <h5 className="card-title text-info text-center mb-3 fw-semibold">
                  Backend and Database (Learning phase)
                </h5>
                <ol className="custom-list">
                  <li style={{ "--percent": "10%" }}>Node.js </li>
                  <li style={{ "--percent": "10%" }}>Express.js </li>
                  <li style={{ "--percent": "20%" }}>MongoDB </li>
                  <li style={{ "--percent": "50%" }}>SQL </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Machine Learning */}
        <div className="Machine Learning mb-4">
          <div className="S-title d-flex justify-content-center">
            <h3 className="fw-bold">
              Machine <span className="text-info">Learning</span>
            </h3>
          </div>
          <div className="skillcards d-flex justify-content-around flex-wrap">
            {/* BASICS */}
            <div className="card mt-4 border border-2 border-info shadow-info">
              <div className="card-body">
                <h5 className="card-title text-info text-center mb-3 fw-semibold">
                  Basics
                </h5>
                <ol className="custom-list">
                  <li style={{ "--percent": "80%" }}>Python</li>
                  <li style={{ "--percent": "70%" }}>Pandas</li>
                  <li style={{ "--percent": "70%" }}>Numpy</li>
                </ol>
              </div>
            </div>

            {/* Overview */}
            <div className="card mt-4 border border-2 border-info shadow-info">
              <div className="card-body">
                <h5 className="card-title text-info text-center mb-3 fw-semibold">
                  Analysis and Visualization
                </h5>
                <ol className="custom-list">
                  <li style={{ "--percent": "60%" }}>Matplotlib</li>
                  <li style={{ "--percent": "50%" }}>Seaborn</li>
                  <li style={{ "--percent": "95%" }}>Pandas Profiling</li>
                </ol>
              </div>
            </div>

            {/* Model Creation */}
            <div className="card mt-4 border border-2 border-info shadow-info">
              <div className="card-body">
                <h5 className="card-title text-info text-center mb-3 fw-semibold">
                  ML Model Creation and Deployment
                </h5>
                <ol className="custom-list">
                  <li style={{ "--percent": "70%" }}>Scikit Learn</li>
                  <li style={{ "--percent": "30%" }}>TensorFlow</li>
                  <li style={{ "--percent": "50%" }}>Streamlit</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="Languages mb-4">
          <div className="S-title d-flex justify-content-center">
            <h3 className="fw-bold">
              Languages and <span className="text-info">DSA</span>
            </h3>
          </div>
          <div className="skillcards d-flex justify-content-around flex-wrap">
            {/* BASICS */}
            <div className="card mt-4 border border-2 border-info shadow-info">
              <div className="card-body">
                <h5 className="card-title text-info text-center mb-3 fw-semibold">
                  Languages
                </h5>
                <ol className="custom-list">
                  <li style={{ "--percent": "80%" }}>Python</li>
                  <li style={{ "--percent": "70%" }}>C</li>
                  <li style={{ "--percent": "40%" }}>Java</li>
                </ol>
              </div>
            </div>

            
            <div className="card mt-4 border border-2 border-info shadow-info">
              <div className="card-body">
                <h5 className="card-title text-info text-center mb-3 fw-semibold">
                  DSA Concept
                </h5>
                <ol className="custom-list">
                  <li style={{ "--percent": "90%" }}>Array</li>
                  <li style={{ "--percent": "60%" }}>Linked List</li>
                  <li style={{ "--percent": "20%" }}>Hashing</li>
                </ol>
              </div>
            </div>

        
            <div className="card mt-4 border border-2 border-info shadow-info">
              <div className="card-body">
                <h5 className="card-title text-info text-center mb-3 fw-semibold">
                  Solving Problems
                </h5>
                <ol className="custom-list">
                  <h3>Leetcode</h3>
                  <a
                    href="https://leetcode.com/u/Shyam_Kumar_Mandal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={myImage}
                      alt="LeetCode Profile"
                      style={{ width: "60px", marginTop: "4px",justifyItems:"center" }}
                    /> 
                  </a>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
