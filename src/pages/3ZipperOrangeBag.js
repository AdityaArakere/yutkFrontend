import React, { useState } from "react";
import Product from "./ProductDetails";
import "./Daypack.css";
import OrangeBag6 from "../3ZipperOrangeBagImages/OrangeBag6.mp4";
import OrangeBag1 from "../3ZipperOrangeBagImages/OrangeBag1.jpg";
import OrangeBag2 from "../3ZipperOrangeBagImages/OrangeBag2.jpg";
import OrangeBag3 from "../3ZipperOrangeBagImages/OrangeBag3.jpg";
import OrangeBag4 from "../3ZipperOrangeBagImages/OrangeBag4.jpg";
import OrangeBag5 from "../3ZipperOrangeBagImages/OrangeBag5.jpg";
import OrangeBag7 from "../3ZipperOrangeBagImages/OrangeBag7.jpg";

function OrangeBag() {
  const product = {
    name: "YUTK Badminton Squash Tennis Racket Shoulder Bag for 7racquet (3 Zipper Orange Kit Bag)",
    mrp: "2750",
    price: "1050",
    highlights: `
    Bag Capacity: 40 L
    Badminton/Squash/Tennis Bag
    Colour: Orange/Black
    Material: 100% Polyester
    Width: 30.48 cm, Height: 76.2 cm
    Brand:	YUTK`,
    description: `
    Material Type: Made of High-Quality Polyester Fabric. This Fabric has good wrinkle resistance and fiber is resistance to stretching and shrinking. It is strong, durable, and lightweight. YUTK Brand is Expertise in Sports Bags.
    Quality: YUTK Kit Bags are Tested at 15 different levels to ensure Sturdiness. Zipper quality is Tested in 100 ways for smooth opening and closing. High-end printers used for Printing on both sides for sharpness and to give a rich look.
    Own YUTK: You bought YUTK Bags, Now you are part of our Family, Additional Care taken and stands with you forever.
    Durability: YUTK bags are long-lasting bags, even after daily usage, tired, worn-out day, this bag doesn't age but stays good as new always.
    Design: This bag is designed by experts, Having 25 years of industry experience. The bag looks very stylish and has 3 full zipper main compartments and one Small compartment. Logo and Printing are exclusive.
    Usage: Bag is very spacious, it can be used to store badminton/Tennis/Squash racquets and shuttlecocks. Bags are Quality tested, waterproof, and even dustproof. Has dual shoulder strap, Zipper, and even the Printing. Ideal for both Men and Women.
    Space: Bag can easily store and hold up to 5-7 badminton/Tennis racquets and has additional space for carrying a water bottle, pair of clothing, shoes. There is also a Small compartment to store keys, Wallet, earphones, and other small accessories.
    Warranty Period: 12 Months`,
  };

  const imageList = [
    { type: "video", src: OrangeBag7 },
    { type: "image", src: OrangeBag1 },
    { type: "image", src: OrangeBag2 },
    { type: "image", src: OrangeBag3 },
    { type: "image", src: OrangeBag4 },
    { type: "image", src: OrangeBag5 },
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
        {selectedImage.type === "video" ? (
          <video controls loop autoPlay muted width="480" height="504">
            <source className="vid" src={OrangeBag6} type="video/mp4" />
          </video>
        ) : (
          <img
            src={selectedImage.src}
            className="right-img"
            alt="Selected Image"
          />
        )}
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

export default OrangeBag;
