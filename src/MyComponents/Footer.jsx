import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <Container>
        <Row>
          {/* About / Logo */}
          <Col md={4} className="mb-4 me-5">
            <h5 className="fw-semibold text-info">Shyam Kumar Mandal</h5>
            <p>
              Frontend Developer | Machine Learning Enthusiast. Connecting
              ideas with modern  technologies.
            </p>
          </Col>



          {/* Contact / Social */}
          <Col md={4} className="mb-4 ms-5">
            <h5 className="fw-semibold text-info">Connect</h5>
            <p>
              <i className="bi bi-geo-alt-fill me-2 "></i>
              Kolkata, West Bengal, India
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2 "></i>
              +91 9903008518
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2 "></i>
              skm39xb@gmail.com
            </p>
            <div className="d-flex gap-3 mt-2">
              <a href="https://github.com/shyam45mandal" target="_blank" rel="noreferrer">
                <FaGithub size={24} className="text-info" />
              </a>
              <a href="https://www.linkedin.com/in/shyam-kumar-mandal-b35951290/" target="_blank" rel="noreferrer">
                <FaLinkedin size={24} className="text-info" />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="bg-info" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Shyam Kumar Mandal. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

