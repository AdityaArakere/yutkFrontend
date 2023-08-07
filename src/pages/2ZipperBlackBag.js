import React, { useState } from "react";
import Product from "./ProductDetails";
import "./Daypack.css";
const BlackBag1 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/2ZipperBlackBagImages/BlackBag1.jpg"
const BlackBag2 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/2ZipperBlackBagImages/BlackBag2.jpg"
const BlackBag3 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/2ZipperBlackBagImages/BlackBag3.jpg"
const BlackBag5 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/2ZipperBlackBagImages/BlackBag4.jpg"
const BlackBag4 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/2ZipperBlackBagImages/BlackBag5.jpg"

function BlackBag() {
  const product = {
    name: "YUTK Badminton Squash Racket Shoulder Bag for 5racquet (2 Zipper Kit Bag)",
    mrp: "1250",
    price: "475",
    highlights: `
        Bag Capacity: M
        Badminton/Squash/Tennis Bag
        Colour: Black/Gold
        Material: 100% Polyester
        Width: 25 cm, Height: 14 cm, Depth: 7 cm
        Brand:	YUTK`,
    description: `
        Suitable for: Badminton Squash and other sports
        Badminton Kit Bag for storing and carrying around racquet sets and other related essentials
        2 full zipper compartments
        Comprises additional space for carrying shuttlecock, bottle, pair of clothes, keys, and more
        can keep 5 badminton racquets , pair of shoes, mobile , keys etc
        Ideal for Men and Women
        material: Made using water-resistant polyester fabric on the outside and polyester fabric on the inside
        Warranty Period: 12 Months`,
  };

  const imageList = [
    { type: "video", src: BlackBag1 },
    { type: "image", src: BlackBag2 },
    { type: "image", src: BlackBag3 },
    { type: "image", src: BlackBag4 },
    { type: "image", src: BlackBag5 },
  ];

  const [selectedImage, setSelectedImage] = useState(imageList[0]);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="main-display">
      <div className="left-display">
        <div className="left-pics">
          {imageList.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Image ${index + 1}`}
              id="left-img"
              className={selectedImage === image ? "selected" : ""}
              onClick={() => handleImageSelect(image)}
            />
          ))}
        </div>
      </div>
      <div className="right-display">
        <img
          src={selectedImage.src}
          className="right-img"
          alt="Selected Image"
        />
      </div>
      <div className="right-display2">
        <Product
          name={product.name}
          mrp={product.mrp}
          price={product.price}
          highlights={product.highlights}
          description={product.description}
        />
      </div>
    </div>
  );
}

export default BlackBag;
