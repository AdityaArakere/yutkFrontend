import React, { useState } from "react";
import Product from "./ProductDetails";
import "./Daypack.css";
import CasualBag1 from "../CasualBagImages/CasualBag1.jpg";
import CasualBag2 from "../CasualBagImages/CasualBag2.jpg";
import CasualBag3 from "../CasualBagImages/CasualBag3.jpg";
import CasualBag4 from "../CasualBagImages/CasualBag4.jpg";
import CasualBag5 from "../CasualBagImages/CasualBag5.jpg";
import CasualBag6 from "../CasualBagImages/CasualBag6.jpg";

function CasualBag() {
  const product = {
    name: "YUTK Water Proof Shoulder Casual/College Outdoor Bag",
    mrp: "1250",
    price: "499",
    highlights: `
      Casual College Outdoor and for other sports
      2 full zipper compartments
      Can keep Book, pair of shoes, mobile , keys, water Bottle etc
      Ideal for Men and Women
      material: Made using water-resistant polyester fabric on the outside and polyester fabric on the inside`,
    description: `Top quality from Yutk`,
  };

  const imageList = [
    { type: "image", src: CasualBag1 },
    { type: "image", src: CasualBag2 },
    { type: "image", src: CasualBag3 },
    { type: "image", src: CasualBag4 },
    { type: "image", src: CasualBag5 },
    { type: "image", src: CasualBag6 },
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

export default CasualBag;
