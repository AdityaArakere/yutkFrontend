import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import yutkWebsiteBanner1 from "../yutkWebsiteBanner1.jpg";
import yutkWebsiteBanner2 from "../yutkWebsiteBanner2.jpg";
import yutkPopularT from "../yutkPopularT.jpg";
import yutkHoodie2 from "../yutkHoodie2.jpg";
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
