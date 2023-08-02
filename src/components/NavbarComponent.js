import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import logo4 from "../logo4.png";
import { NavItem } from "react-bootstrap";

function NavBarFunc() {
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
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
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
                      <Link to="/about-us" id="AboutUs">
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
                      <Link to="/3zipperbag">
                        <div>
                          3 Zipper Kits <p className="hotAlign">hot!</p>
                        </div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/2zipperbag">
                        <div>
                          2 Zipper Kits <p className="hotAlign">hot!</p>
                        </div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link to="/allkits">
                        <div>All Kits</div>
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="BAGS"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    renderMenuOnMount={true}
                  >
                    <NavDropdown.Item>
                      <Link to="/gymbag">
                        <div>Gym Bags</div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/casualbag">
                        <div>Casual Bags</div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/daypack">
                        <div>Day Packs</div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/fannypack">
                        <div>Fanny Packs</div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link to="/allbags">
                        <div>All Bags</div>
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
                      {/* <Link to="/login" className="text-white">LOGIN</Link> */}
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
