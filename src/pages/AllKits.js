import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import GreenBag2 from "../3ZipperGreenBagImages/GreenBag2.jpg";
import OrangeBag1 from "../3ZipperOrangeBagImages/OrangeBag1.jpg";
import BlackBag1 from "../2ZipperBlackBagImages/BlackBag1.jpg";
import BlackBag1ThreeZipper from "../3ZipperBlackBagImages/BlackBag1.jpg";
import GreyBag5 from "../3ZipperGreyBagImages/GreyBag5.jpg";
import BlackOrangeBag1 from "../3ZipperBlackOrangeBagImages/BlackOrangeBag1.jpg";

function AllKits() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const kitsData = [
    {
      imageSrc: GreenBag2,
      altText: "Green Kit",
      kitType: "Green Kit",
      linkTo: "/greenbag",
    },
    {
      imageSrc: OrangeBag1,
      altText: "Orange Kit",
      kitType: "Orange Kit",
      linkTo: "/orangebag",
    },
    {
      imageSrc: BlackBag1ThreeZipper,
      altText: "Black Kit",
      kitType: "Black Kit",
      linkTo: "/blackbag3zipper",
    },
    {
      imageSrc: GreyBag5,
      altText: "Grey Kit",
      kitType: "Grey Kit",
      linkTo: "/greybag",
    },
    {
      imageSrc: BlackOrangeBag1,
      altText: "Black and Orange Kit",
      kitType: "Black and Orange Kit",
      linkTo: "/blackorangebag",
    },
    {
      imageSrc: BlackBag1,
      altText: "Black Kit",
      kitType: "Black Kit",
      linkTo: "/blackbag",
    },
  ];

  return (
    <div className="heading">
      <h1>ALL KITS</h1>
      <div className="zipper">
        {kitsData.map((kit, index) => (
          <KitItem key={index} {...kit} />
        ))}
      </div>
    </div>
  );
}

function KitItem({ imageSrc, altText, kitType, linkTo }) {
  return (
    <div className="img-fluid2-1">
      <img src={imageSrc} alt={altText} className="img-fluid3-1" />
      <div className="backdrop2"></div>
      <div className="text1">
        <p>{kitType}</p>
        <Link to={linkTo}>
          <Button className="container2-button" variant="light">
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AllKits;
