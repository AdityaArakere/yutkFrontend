import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import yutkWebsiteBanner1 from "../yutkWebsiteBanner1.jpg";
import yutkWebsiteBanner2 from "../yutkWebsiteBanner2.jpg";
import yutkPopularT from "../yutkPopularT.jpg";
import yutkHoodie2 from "../yutkHoodie2.jpg";
import bags2 from "../bags2.jpg";
import bag from "../bag.jpg";

function Landing() {
  return (
    <div className="LandingPage">
      <Container>
        <picture>
          <source media="(max-width: 768px)" srcSet={`${yutkWebsiteBanner2}`} />
          <img src={yutkWebsiteBanner1} alt="Banner" className="img-fluid" />
        </picture>
        <div className="backdrop1"></div>
        <div className="text1">
          <h1>An online shop with local flair</h1>
          <p>connect with quality products</p>
          <Button
            variant="light"
            onClick={() =>
              (window.location.href =
                "https://www.amazon.in/stores/page/ED895DAE-95F6-4F1E-AC18-7FF0AB1E7E12?ingress=3")
            }
          >
            Shop Now
          </Button>
        </div>
      </Container>
      <div className="container2">
        <div className="img-fluid2">
          <img src={bags2} alt="banner" className="img-fluid3" />
          <div className="backdrop2"></div>
          <div className="text1">
            <p>Backpacks</p>
            <Button
              className="container2-button"
              variant="light"
              onClick={() =>
                (window.location.href =
                  "https://www.amazon.in/YUTK-Outdoor-Casual-Daypack-Adults/dp/B0BW3TZWXD/ref=sr_1_3?crid=11T7X4IU4DI9K&keywords=yutk&qid=1681407599&sprefix=%2Caps%2C267&sr=8-3")
              }
            >
              Shop Now
            </Button>
          </div>
        </div>
        <div className="img-fluid2">
          <img src={bag} alt="banner" className="img-fluid3" />
          <div className="backdrop2"></div>
          <div className="text1">
            <p>Badminton Kits</p>
            <Button
              className="container2-button"
              variant="light"
              onClick={() =>
                (window.location.href =
                  "https://www.amazon.in/YUTK-Badminton-Squash-Shoulder-5racquet/dp/B0BTP2RRWR/ref=sr_1_5?keywords=yutk+badminton+kit+bag&qid=1681422500&sr=8-5")
              }
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
