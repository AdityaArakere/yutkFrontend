import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const GymBag1 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/GymBagImages/GymBag1.jpg"
const CasualBag1 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/CasualBagImages/CasualBag1.jpg"
const yutk_bag1 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/DayPackImages/yutk_bag1.jpg"
const FannyPack1 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/FannyPackImages/FannyPack1.jpg"

function AllBags() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);  

  const bagsData = [
    {
      imageSrc: GymBag1,
      altText: "Gym Bag",
      bagType: "Gym Bag",
      linkTo: "/gymbag",
    },
    {
      imageSrc: CasualBag1,
      altText: "Casual Bag",
      bagType: "Casual Bag",
      linkTo: "/casualbag",
    },
    {
      imageSrc: yutk_bag1,
      altText: "Day Pack",
      bagType: "Day Pack",
      linkTo: "/daypack",
    },
    {
      imageSrc: FannyPack1,
      altText: "Fanny Pack",
      bagType: "Fanny Pack",
      linkTo: "/fannypack",
    },
  ];

  return (
    <div className="heading">
      <h1>ALL BAGS</h1>
      <div className="zipper">
        {bagsData.map((bag, index) => (
          <BagItem key={index} {...bag} />
        ))}
      </div>
    </div>
  );
}

function BagItem({ imageSrc, altText, bagType, linkTo }) {
  return (
    <div className="img-fluid2-1">
      <img src={imageSrc} alt={altText} className="img-fluid3-1" />
      <div className="backdrop2"></div>
      <div className="text1">
        <p>{bagType}</p>
        <Link to={linkTo}>
          <Button className="container2-button" variant="light">
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AllBags;
