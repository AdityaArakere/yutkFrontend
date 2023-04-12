import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import yutkWebsiteBanner1 from "../yutkWebsiteBanner1.jpg";
import yutkWebsiteBanner2 from "../yutkWebsiteBanner2.jpg";
import yutkPopular from "../yutkPopular.jpg";
import yutkHoodie from "../yutkHoodie.jpg";

function Landing() {
  return (
    <div className="LandingPage">
      <Container>
        <img
          src={yutkWebsiteBanner1}
          srcSet={`${yutkWebsiteBanner1} 1200w, ${yutkWebsiteBanner2} 768w`}
          sizes="(max-width: 768px), 1200px"
          alt="Banner"
          className="img-fluid"
        />
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
          <img src={yutkPopular} alt="banner" className="img-fluid3" />
          <div className="backdrop2"></div>
          <div className="text1">
            <p>Tshirts</p>
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
        </div>
        <div className="img-fluid2">
          <img src={yutkHoodie} alt="banner" className="img-fluid3" />
          <div className="backdrop2"></div>
          <div className="text1">
            <p>Hoodies</p>
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
        </div>
      </div>
    </div>
  );
}

export default Landing;
