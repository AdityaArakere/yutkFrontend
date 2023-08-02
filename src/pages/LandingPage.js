import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import yutkWebsiteBanner1 from "../yutkWebsiteBanner1.jpg";
import yutkWebsiteBanner2 from "../yutkWebsiteBanner2.jpg";
import secondpic from "../second_pic.jpg";
import bags2 from "../bags2.jpg";
import bag from "../bag.jpg";
import React, { useEffect, useState, useRef } from "react";

const imageUrls1 = [yutkWebsiteBanner1, secondpic];
const imageUrls2 = [yutkWebsiteBanner2, yutkWebsiteBanner2];

const delay = 9500;

function Landing() {
  const [imageUrls, setImageUrls] = useState(imageUrls1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageUrls(imageUrls2);
      } else {
        setImageUrls(imageUrls1);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imageUrls2, imageUrls1]);

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="LandingPage">
      <Container>
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {imageUrls.map((imageUrl, idx) => (
            <img
              key={idx}
              src={imageUrl}
              alt={`Slide ${idx + 1}`}
              className="img-fluid"
            />
          ))}
        </div>

        <div className="slideshowDots">
          {imageUrls.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>

        <div className="backdrop1"></div>
        <div className="text1">
          <h1>An online shop with local flair</h1>
          <p>connect with quality products</p>
          <Link to="/allproducts">
            <Button variant="light">Shop Now</Button>
          </Link>
        </div>
      </Container>
      <div className="container2">
        <div className="img-fluid2">
          <img src={bags2} alt="banner" className="img-fluid3" />
          <div className="backdrop2"></div>
          <div className="text1">
            <p>Backpacks</p>
            <Link to="/allbags">
              <Button className="container2-button" variant="light">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="img-fluid2">
          <img src={bag} alt="banner" className="img-fluid3" />
          <div className="backdrop2"></div>
          <div className="text1">
            <p>Badminton Kits</p>
            <Link to="/allkits">
              <Button className="container2-button" variant="light">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
