import { Link } from "react-router-dom";
import GreenBag2 from "../3ZipperGreenBagImages/GreenBag2.jpg";
import OrangeBag1 from "../3ZipperOrangeBagImages/OrangeBag1.jpg";
import BlackBag1 from "../3ZipperBlackBagImages/BlackBag1.jpg";
import GreyBag5 from "../3ZipperGreyBagImages/GreyBag5.jpg";
import BlackOrangeBag1 from "../3ZipperBlackOrangeBagImages/BlackOrangeBag1.jpg";
import Button from "react-bootstrap/Button";

function ThreeZipperBag() {
  return (
    <div className="heading">
      <h1>3 ZIPPER KITS</h1>
      <div className="zipper">
        <div className="img-fluid2-1">
          <img src={GreenBag2} alt="banner" className="img-fluid3-1" />
          <div className="backdrop2"></div>
          <div className="text1">
            <p>Green Kit</p>
            <Link to="/greenbag">
              <Button className="container2-button" variant="light">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="img-fluid2-1">
          <img src={OrangeBag1} alt="banner" className="img-fluid3-1" />
          <div className="backdrop2"></div>
          <div className="text1">
            <p>Orange Kit</p>
            <Link to="/orangebag">
              <Button className="container2-button" variant="light">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="img-fluid2-1">
          <img src={BlackBag1} alt="banner" className="img-fluid3-1" />
          <div className="backdrop2"></div>
          <div className="text1">
            <p>Black Kit</p>
            <Link to="/blackbag3zipper">
              <Button className="container2-button" variant="light">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="img-fluid2-1">
          <img src={GreyBag5} alt="banner" className="img-fluid3-1" />
          <div className="backdrop2"></div>
          <div className="text1">
            <p>Grey Kit</p>
            <Link to="/greybag">
              <Button className="container2-button" variant="light">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="img-fluid2-1">
          <img src={BlackOrangeBag1} alt="banner" className="img-fluid3-1" />
          <div className="backdrop2"></div>
          <div className="text1">
            <p>Black and Orange Kit</p>
            <Link to="/blackorangebag">
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

export default ThreeZipperBag;
