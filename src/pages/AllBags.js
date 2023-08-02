import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import GymBag1 from "../GymBagImages/GymBag1.jpg";
import CasualBag1 from "../CasualBagImages/CasualBag1.jpg";
import yutk_bag1 from "../DayPackImages/yutk_bag1.jpg";
import FannyPack1 from "../FannyPackImages/FannyPack1.jpg";

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
