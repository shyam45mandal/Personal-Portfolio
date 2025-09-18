import React from "react";
import "./Home.css";
import myImage from "../assets/frontimg.png";
import Image from "react-bootstrap/Image";

function Home() {
  return (
    <>
      <div>
        <div className="home">
          <div className="homeprofile-img m-2">
            <Image src={myImage} alt="homeProfile" roundedCircle fluid />
          </div>
        </div>
        <div className="Intro">
          <div className="shortintro">
            <h1 className="display-4 fst-italic fw-bold">
              Hi, I'm <span className="text-info">Shyam</span> Kumar
            </h1>
            <div className="paraintro lead my-3 mb-4 text-justify ">
              <p>
                {" "}
                I am an aspiring Machine Learning Engineer with a strong
                interest in statistics and mathematics.I love exploring how
                mathematical concepts can drive real-world solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
