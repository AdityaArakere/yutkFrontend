import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import logo2 from "../logo2.jpg";

function NavBarFunc() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand>
              <Link to="/">
                <img src={logo2} alt="banner" className="img-fluid4" />
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
                  <NavDropdown
                    title="KITS"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    renderMenuOnMount={true}
                  >
                    <NavDropdown.Item href="https://www.amazon.in/dp/B0B3RNL6H7?ref_=cm_sw_r_apin_dp_BCE50E4XDA1V6X6A8JC2">
                      Standard Badminton Kit <p className="hotAlign">hot!</p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://www.amazon.in/dp/B0B3MPBPR2?ref_=cm_sw_r_apin_dp_57QA4WAMTTD2PYQ36P0Q">
                      Green Badminton Kit <p className="hotAlign">hot!</p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://www.flipkart.com/yutk-badminton-squash-racket-bag-shoulder-bag-7racquet-waterproof-dustproof/p/itm6b67c2f4b251c?pid=SPBGMFZZCGZCGGQK&lid=LSTSPBGMFZZCGZCGGQK77MHLF&marketplace=FLIPKART&q=yutk&store=search.flipkart.com&srno=s_1_3&otracker=AS_Query_HistoryAutoSuggest_2_0&otracker1=AS_Query_HistoryAutoSuggest_2_0&fm=organic&iid=b2881c82-9834-41e9-89dc-83d586eaea4e.SPBGMFZZCGZCGGQK.SEARCH&ppt=pp&ppn=pp&ssid=wewp23obps0000001681408347906&qH=92fc2df93a4bdf79">
                      Orange Badminton Kit
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://www.amazon.in/YUTK-Badminton-Squash-Shoulder-7racquet/dp/B0BNN3BRJP/ref=sr_1_2?crid=11T7X4IU4DI9K&keywords=yutk&qid=1681407599&sprefix=%2Caps%2C267&sr=8-2">
                      Black Badminton Kit
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.amazon.in/YUTK-Badminton-Squash-Shoulder-5racquet/dp/B0BTP2RRWR/ref=sr_1_5?keywords=yutk+badminton+kit+bag&qid=1681422500&sr=8-5">
                      New arrivals
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="BAGS"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    renderMenuOnMount={true}
                  >
                    <NavDropdown.Item href="https://www.amazon.in/YUTK-Outdoor-Casual-Daypack-Adults/dp/B0BW3TZWXD/ref=sr_1_3?crid=11T7X4IU4DI9K&keywords=yutk&qid=1681407599&sprefix=%2Caps%2C267&sr=8-3">
                      <Link to="/backpack">Casual Backpacks</Link>
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
                <div className="LoginIcon">
                  <Link to="/login">LOGIN</Link>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBarFunc;
