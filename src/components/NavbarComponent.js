import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function NavBarFunc() {
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand>
              <Link to="/">
                <Image
                  src={require("C:/Users/adity/OneDrive/Desktop/jewelWebBoot/yutkFrontEnd/src/images2.JPG")}
                  width={96}
                  height={60}
                />
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
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title="MEN"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    renderMenuOnMount={true}
                  >
                    <NavDropdown.Item href="https://www.flipkart.com/yutk-solid-men-round-neck-black-t-shirt/p/itm21c1c2b9ed081">Tshirts</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.amazon.in/Multifunctional-Headwear-Headband-Gaiter-Bandana/dp/B0872TVCB5/ref=sr_1_1?crid=3AIM0JEXT3M46&keywords=yutk+mask&qid=1681329711&sprefix=yutk+mas%2Caps%2C315&sr=8-1">
                      Masks/Scarfs
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      New arrivals
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="WOMEN"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    renderMenuOnMount={true}
                  >
                    <NavDropdown.Item href="https://www.flipkart.com/yutk-solid-men-round-neck-black-t-shirt/p/itm21c1c2b9ed081">Tshirts</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.amazon.in/Multifunctional-Headwear-Headband-Gaiter-Bandana/dp/B0872TVCB5/ref=sr_1_1?crid=3AIM0JEXT3M46&keywords=yutk+mask&qid=1681329711&sprefix=yutk+mas%2Caps%2C315&sr=8-1">
                      Masks/Scarfs
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      New arrivals
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="KITS"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    renderMenuOnMount={true}
                  >
                    <NavDropdown.Item href="https://www.amazon.in/YUTK-Badminton-Squash-Shoulder-7racquet/dp/B0B3MPBPR2/ref=sr_1_1?crid=96L0C8RX0YHB&keywords=yutk&qid=1681329730&sprefix=yutk+mask%2Caps%2C256&sr=8-1">Badminton Kits</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.amazon.in/YUTK-Outdoor-Casual-Daypack-Adults/dp/B0BW3TZWXD/ref=sr_1_5?crid=96L0C8RX0YHB&keywords=yutk&qid=1681329730&sprefix=yutk+mask%2Caps%2C256&sr=8-5">
                      Backpacks
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      New arrivals
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
                  <Button variant="outline-success">Search</Button>
                </Form>
                {/* <div className="LoginIcon">
                  <Link to="/login">LOGIN</Link>
                </div> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBarFunc;
