import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import myImage from "../assets/frontimg.png";
import "./Header.css";

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Navbar bg="black" variant="dark" expand="lg" sticky="top" className="px-3">
      <Container fluid>
        
        <Navbar.Brand
          onClick={() => scrollToSection("Home")}
          className="fs-4"
          style={{ cursor: "pointer" }}
        >
          <h2 className="h4 h-md-3 fst-italic fw-bold m-0">
            <span className="text-info">Shyam</span> Kumar
          </h2>
        </Navbar.Brand>

    
        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        <Navbar.Collapse id="navbarSupportedContent">
        
          <Nav className="mx-auto text-center">
            <Nav.Link
              onClick={() => scrollToSection("Home")}
              className="bi bi-house-fill mx-2 custom-nav-link"
            >
              Home
            </Nav.Link>

            <Nav.Link
              onClick={() => scrollToSection("About")}
              className="bi bi-person-fill mx-2 custom-nav-link"
            >
              About
            </Nav.Link>

            <Nav.Link
              onClick={() => scrollToSection("Skills")}
              className="bi bi-gear-fill mx-2 custom-nav-link"
            >
              Skills
            </Nav.Link>

            <Nav.Link
              onClick={() => scrollToSection("Projects")}
              className="bi bi-lightbulb-fill mx-2 custom-nav-link"
            >
              Projects
            </Nav.Link>

            <Nav.Link
              onClick={() => scrollToSection("ContactUs")}
              className="bi bi-envelope-fill mx-2 custom-nav-link"
            >
              Contacts
            </Nav.Link>
          </Nav>

        
          <Nav.Link onClick={() => scrollToSection("Home")}>
            
                      <div className="profile-img text-center text-lg-end mt-3 mt-lg-0">
            <Image
              src={myImage}
              alt="Profile"
              roundedCircle
              fluid
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          </Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
