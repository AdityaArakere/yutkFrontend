import React, { useState } from "react";
import Product from "./ProductDetails";
import "./Daypack.css";
import FannyPack2 from "../FannyPackImages/FannyPack2.jpg";
import FannyPack3 from "../FannyPackImages/FannyPack3.jpg";
import FannyPack1 from "../FannyPackImages/FannyPack1.jpg";
import FannyPack4 from "../FannyPackImages/FannyPack4.jpg";
import FannyPack5 from "../FannyPackImages/FannyPack5.jpg";

function FannyPack() {
  const product = {
    name: "YUTK Water Proof Shoulder Casual/College Outdoor Bag",
    mrp: "750",
    price: "299",
    highlights: `
      Useful for carrying valuables like mobile phone, wallet, sunglasses, keys, etc.
      Easy to carry as you can strap it around your waist or your shoulder
      Very useful while walking, cycling, etc.
      Ideal for Men and Women
      material: Made using water-resistant polyester fabric on the outside and polyester fabric on the inside`,
    description: `Top quality from Yutk`,
  };

  const imageList = [
    { type: "image", src: FannyPack1 },
    { type: "image", src: FannyPack2 },
    { type: "image", src: FannyPack3 },
    { type: "image", src: FannyPack4 },
    { type: "image", src: FannyPack5 },
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

export default FannyPack;
