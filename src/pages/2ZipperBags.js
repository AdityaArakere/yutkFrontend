import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const BlackBag1 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/2ZipperBlackBagImages/BlackBag1.jpg"

function TwoZipperBag() {
  return (
    <div className="heading">
      <h1>2 ZIPPER KITS</h1>
      <div className="zipper">
        <div className="img-fluid2-1">
          <img src={BlackBag1} alt="banner" className="img-fluid3-1" />
          <div className="backdrop2"></div>
          <div className="text1">
            <p>Black Kit</p>
            <Link to="/blackbag">
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

export default TwoZipperBag;
