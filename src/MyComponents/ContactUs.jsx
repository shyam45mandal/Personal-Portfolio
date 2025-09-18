import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";

import "./Contacts.css";
export default function ContactUs() {
  const [status, setStatus] = useState({
    submitting: false,
    done: false,
    error: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, done: false, error: false });

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjkeqboa", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        setStatus({ submitting: false, done: true, error: false });
        form.reset();
      } else {
        setStatus({ submitting: false, done: false, error: true });
      }
    } catch (err) {
      setStatus({ submitting: false, done: false, error: true });
    }
  };

  return (
    <Container className="py-5" id="contact">
  
      <div className=" mb-4">
        <h2 className="fw-bold">Contact Me</h2>
        <hr style={{ borderTop: "7px solid #01caf7", width: "120px" }} />
      </div>

      <Row>
        
        <Col md={6} className="mb-4">
          <h3 className="mb-3 text-info fw-semibold">Let’s Talk</h3>
          <p className="me-4">
            I’d love to hear from you! Whether you have a question, a project in
            mind, or just want to connect, feel free to reach out. I’ll respond
            as soon as possible.
          </p>
          <div className="mt-5 ms-5">
            <div className="contact-item">
              <i className="bi bi-geo-alt-fill "></i>
              <span>Kolkata, West Bengal, India</span>
            </div>

            <div className="contact-item">
              <i className="bi bi-telephone-fill"></i>
              <span>+91 9903008518</span>
            </div>

            <div className="contact-item">
                            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=skm39xb@gmail.com"
                target="_blank"
                rel="noopener noreferrer"><i className="bi bi-envelope-fill"></i></a>
              
              <span>skm39xb@gmail.com</span>
            </div>






          </div>
        </Col>

      
        <Col md={6}>
          {status.done && (
            <Alert variant="success">Message sent successfully!</Alert>
          )}
          {status.error && (
            <Alert variant="danger">
              Oops! Something went wrong. Please try again.
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 ms-4 me-4" controlId="contactName">
              <Form.Label className="custom-label">Enter your name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                className="custom-input"
                required
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.25)",
                  borderColor: "#0dcaf0",
                  color: "white",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 ms-4 me-4" controlId="contactEmail">
              <Form.Label className="custom-label">Enter your email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                className="custom-input"
                required
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.25)",
                  borderColor: "#0dcaf0",
                  color: "white",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 ms-4 me-4" controlId="contactMessage">
              <Form.Label className="custom-label">
                Write your message
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder="Type your message here..."
                className="custom-input"
                required
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.25)",
                  borderColor: "#0dcaf0",
                  color: "white",
                }}
              />
            </Form.Group>

            <div className="divbtn d-flex justify-content-end mt-3 me-4">
              <Button
                type="submit"
                variant="info"
                className="text-black custom-submit-btn"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />{" "}
                    Sending…
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
