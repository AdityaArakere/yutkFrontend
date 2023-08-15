import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import { NavItem } from "react-bootstrap";
const logo4 =
  "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/logo4.png";

function NavBarFunc() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand>
              <Link to="/">
                <img src={logo4} alt="banner" className="img-fluid4" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={() => setShowOffcanvas((prevState) => !prevState)}
            />
            <Navbar.Offcanvas
              show={showOffcanvas}
              onHide={closeOffcanvas}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Explore
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="nav-item">
                    <div className="LoginIcon">
                      <Link to="/about-us" id="AboutUs" onClick={closeOffcanvas}>
                        ABOUT US
                      </Link>
                    </div>
                  </Nav.Link>
                  <NavDropdown
                    title="BADMINTON KITS"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    renderMenuOnMount={true}
                  >
                    <NavDropdown.Item>
                      <Link to="/3zipperbag" onClick={closeOffcanvas}>
                        <div>
                          3 Zipper Badminton/Tennis Kits
                          <p className="hotAlign">hot!</p>
                        </div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/2zipperbag" onClick={closeOffcanvas}>
                        <div>
                          2 Zipper Badminton/Tennis Kits
                          <p className="hotAlign">hot!</p>
                        </div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link to="/allkits" onClick={closeOffcanvas}>
                        <div className="fw-bold">All Kits</div>
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="BAGS"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    renderMenuOnMount={true}
                  >
                    <NavDropdown.Item>
                      <Link to="/gymbag" onClick={closeOffcanvas}>
                        <div>Gym Bags</div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/casualbag" onClick={closeOffcanvas}>
                        <div>Casual Bags</div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/daypack" onClick={closeOffcanvas}>
                        <div>Day Packs</div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/fannypack" onClick={closeOffcanvas}>
                        <div>Fanny Packs</div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link to="/allbags" onClick={closeOffcanvas}>
                        <div className="fw-bold">All Bags</div>
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>

                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">
                    <FaSearch />
                  </Button>
                </Form>
                <Nav>
                  <Nav.Link>
                    <div className="LoginIcon">
                      {/* <Link to="/login" className="text-white">
                        LOGIN
                      </Link> */}
                    </div>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBarFunc;
