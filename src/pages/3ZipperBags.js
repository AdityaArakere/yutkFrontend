import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const GreenBag2 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/3ZipperGreenBagImages/GreenBag2.jpg"
const OrangeBag1 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/3ZipperOrangeBagImages/OrangeBag1.jpg"
const BlackBag1 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/3ZipperBlackBagImages/BlackBag1.jpg"
const GreyBag5 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/3ZipperGreyBagImages/GreyBag5.jpg"
const BlackOrangeBag1 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/3ZipperBlackOrangeBagImages/BlackOrangeBag1.jpg"

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
