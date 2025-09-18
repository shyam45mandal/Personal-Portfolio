import React from "react";

import "./Project.css"
import ecomImg from "../assets/ecom.jpg";
import foodImg from "../assets/food.jpg";
import moviesImg from "../assets/moviesr.jpg";
import cricketImg from "../assets/cricket.webp";

const webProjects = [
  {
    title: "E-Commerce Platform",
    img: ecomImg,
    desc: "E-commerce is the buying and selling of goods, services over the internet. It enables fast, convenient transactions without physical interaction.",
    link: "#",
    btnClass: "btn-danger",
  },
  {
    title: "Food Delivery",
    img: foodImg,
    desc: "Responsive food delivery app with restaurant browsing, menu selection, order tracking, and secure payments — built for speed and convenience.",
    link: "#",
    btnClass: "btn-danger",
  },
];

const mlProjects = [
  {
    title: "Movie Recommender System",
    img: moviesImg,
    desc: "Movie recommender app that suggests films based on your preferences, favorite actors, and similar content — for a personalized viewing experience.",
    link: "https://github.com/shyam45mandal/Movies-Recommender-System",
    btnClass: "btn-info",
  },
  {
    title: "IPL Win Prediction",
    img: cricketImg,
    desc: "A ML-powered web application that predicts the winning probability of IPL teams based on live match details such as cities, target, and current score.",
    link: "https://github.com/shyam45mandal/IPL-win-predictor",
    btnClass: "btn-info",
  },
];

const allProjects = [...mlProjects, ...webProjects]; 

const ProjectSection = ({ title, projects }) => {
  const words = title.split(" ");

  return (
    <div className="mb-4 p-4">
      <div className="d-flex justify-content-center mb-4">
        <h3 className="text-center fw-semibold">
          {words.map((word, idx) => {
            
            if (
              word.toLowerCase().includes("machine") ||
              word.toLowerCase().includes("web")
            ) {
              return (
                <span key={idx} className="text-info mx-1">
                  {word}
                </span>
              );
            }
            return (
              <span key={idx} className="mx-1">
                {word}
              </span>
            );
          })}
        </h3>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="card mt-4 bg-dark text-white border border-2 border-info d-flex flex-column"
            style={{ width: "18rem", minHeight: "20rem" }}
          >
            <img
              src={proj.img}
              className="card-img-top"
              alt={proj.title}
              style={{ height: "180px", objectFit: "cover",opacity:0.8 }}
            />
            <div className="card-body d-flex flex-column p-3">
              <h5
                className="card-title"
                style={{ fontSize: "1.25rem", fontWeight: 600 }}
              >
                {proj.title}
              </h5>
              <p
                className="card-text fw-normal flex-grow-1 text-justify"
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.4,
                  color: "#ddd",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {proj.desc}
              </p>
              <a
                href={proj.link}
                className={`btn ${proj.btnClass} w-100 mt-auto`}
              >
                {proj.link === "#" ? "Coming Soon" : "Visit Site"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Projects() {
  return (
    <div
      className="container-fluid p-4 p-md-5 mb-4 rounded bg-dark text-white fw-bold"
      style={{ width: "100%", minHeight: "100vh" }}
    >
      <div className="Projects ">
        <h3 className="fw-bold">My Projects</h3>
      </div>
      <hr style={{ borderTop: "7px solid #01cef7", width: "120px" }} />

      
      <ProjectSection
        title="Machine Learning and Web Development"
        projects={allProjects}
      />
    </div>
  );
}

export default Projects;
