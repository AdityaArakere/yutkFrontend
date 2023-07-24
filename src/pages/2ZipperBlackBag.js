import React, { useState } from "react";
import { handleWhatsAppClick } from "./WhatsAppRedirect";
import "./Daypack.css";
import BlackBag1 from "../2ZipperBlackBagImages/BlackBag1.jpg";
import BlackBag2 from "../2ZipperBlackBagImages/BlackBag2.jpg";
import BlackBag3 from "../2ZipperBlackBagImages/BlackBag3.jpg";
import BlackBag5 from "../2ZipperBlackBagImages/BlackBag5.jpg";
import BlackBag4 from "../2ZipperBlackBagImages/BlackBag4.jpg";

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

function Product({ name, mrp, price, highlights, description }) {
  // Split the description into an array of bullet points
  const bulletPoints = description.split("\n");
  const bulletPoints2 = highlights.split("\n");

  const handleWhatsAppButtonClick = () => {
    handleWhatsAppClick();
  };

  return (
    <div className="product">
      <h2>{name}</h2>
      <p className="mrp">MRP: {mrp}</p>
      <p className="price h3 font-weight-bold">₹{price}</p>
      <hr className="my-4" />
      <h4>Highlights:</h4>
      <ul className="list-group list-group-flush">
        {bulletPoints2.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      <hr className="my-4" />
      <div className="mb-4">
        <button className="btn btn-primary" onClick={handleWhatsAppButtonClick}>
          Buy Now
        </button>
        <button className="btn btn-success">Add to Cart</button>
      </div>
      <div className="card">
        <div className="card-header">About this item:</div>
        <ul className="list-group list-group-flush">
          {bulletPoints.map((bullet, index) => (
            <li key={index} className="list-group-item">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlackBag;
