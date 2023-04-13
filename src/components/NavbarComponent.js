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
      {["xxl"].map((expand) => (
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
                    title="BAGS"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    renderMenuOnMount={true}
                  >
                    <NavDropdown.Item href="https://www.amazon.in/YUTK-Outdoor-Casual-Daypack-Adults/dp/B0BW3TZWXD/ref=sr_1_3?crid=11T7X4IU4DI9K&keywords=yutk&qid=1681407599&sprefix=%2Caps%2C267&sr=8-3">
                      Casual Backpacks
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
                    <NavDropdown.Item href="https://www.flipkart.com/yutk-badminton-squash-racket-bag-shoulder-bag-7racquet-waterproof-dustproof/p/itm7abe6a8303f92?pid=SPBGMGTKZGJSNBU8&lid=LSTSPBGMGTKZGJSNBU8OF4DD1&marketplace=FLIPKART&store=reh%2Fplk%2Fsan&srno=b_1_1&otracker=product_breadCrumbs_YUTK%20Rucksacks&fm=productRecommendation%2Fsimilar&iid=8604a10c-de50-47c5-886b-0dc8587944f3.SPBGMGTKZGJSNBU8.SEARCH&ppt=browse&ppn=browse&ssid=uyy0jj6qb40000001681408434570">
                      Standard Badminton Kit
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://www.flipkart.com/yutk-badminton-squash-racket-bag-shoulder-bag-7racquet-waterproof-dustproof/p/itm6b67c2f4b251c?pid=SPBGMFZZCGZCGGQK&lid=LSTSPBGMFZZCGZCGGQK77MHLF&marketplace=FLIPKART&q=yutk&store=search.flipkart.com&srno=s_1_3&otracker=AS_Query_HistoryAutoSuggest_2_0&otracker1=AS_Query_HistoryAutoSuggest_2_0&fm=organic&iid=b2881c82-9834-41e9-89dc-83d586eaea4e.SPBGMFZZCGZCGGQK.SEARCH&ppt=pp&ppn=pp&ssid=wewp23obps0000001681408347906&qH=92fc2df93a4bdf79">
                      Orange Badminton Kit
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://www.amazon.in/YUTK-Badminton-Squash-Shoulder-7racquet/dp/B0BWJKM2SB?ref_=ast_sto_dp">
                      Green Badminton Kit
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://www.amazon.in/YUTK-Badminton-Squash-Shoulder-7racquet/dp/B0BNN3BRJP/ref=sr_1_2?crid=11T7X4IU4DI9K&keywords=yutk&qid=1681407599&sprefix=%2Caps%2C267&sr=8-2">
                      Black Badminton Kit
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
