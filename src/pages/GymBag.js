import React, { useState } from "react";
import { handleWhatsAppClick } from "./WhatsAppRedirect";
import "./Daypack.css";
import GymBag1 from "../GymBagImages/GymBag1.jpg";
import GymBag2 from "../GymBagImages/GymBag2.jpg";
import GymBag3 from "../GymBagImages/GymBag3.jpg";
import GymBag4 from "../GymBagImages/GymBag4.jpg";
import GymBag5 from "../GymBagImages/GymBag5.jpg";

function GymBag() {
  const product = {
    name: "YUTK Water Proof Shoulder Casual/College Outdoor Bag",
    mrp: "1500",
    price: "599",
    highlights: `
      Casual College Outdoor and for other sports
      2 full zipper compartments
      Can keep Book, pair of shoes, mobile , keys, water Bottle etc
      Ideal for Men and Women
      material: Made using water-resistant polyester fabric on the outside and polyester fabric on the inside`,
    description: ``,
  };

  const imageList = [
    { type: "image", src: GymBag1 },
    { type: "image", src: GymBag2 },
    { type: "image", src: GymBag3 },
    { type: "image", src: GymBag4 },
    { type: "image", src: GymBag5 },
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
    </div>
  );
}
export default GymBag;
