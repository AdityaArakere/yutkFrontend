import React, { useState, useEffect } from "react";
import Product from "./ProductDetails";
import "./Daypack.css";
const GreyBag1 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/3ZipperGreyBagImages/GreyBag1.jpg"
const GreyBag2 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/3ZipperGreyBagImages/GreyBag2.jpg"
const GreyBag3 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/3ZipperGreyBagImages/GreyBag3.jpg"
const GreyBag4 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/3ZipperGreyBagImages/GreyBag4.jpg"
const GreyBag5 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/3ZipperGreyBagImages/GreyBag5.jpg"
const GreyBag6 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/3ZipperGreyBagImages/GreyBag6.jpg"

function GreyBag() {
  const product = {
    name: "YUTK Badminton Squash Tennis Racket Shoulder Bag for 7racquet (3 Zipper Kit Bag)",
    mrp: "2250",
    price: "795",
    highlights: `
        Bag Capacity: 40 L
        Badminton/Squash/Tennis Bag
        Colour: Dark Grey
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
        Zipper and Runner: Worlds Top Brand YKK, High quality and durable chian used First time.
        YUTK gives 12 months Manufacturing Warranty to all Customers.`,
  };

  const imageList = [
    { type: "image", src: GreyBag5 },
    { type: "image", src: GreyBag2 },
    { type: "image", src: GreyBag3 },
    { type: "image", src: GreyBag4 },
    { type: "image", src: GreyBag1 },
    { type: "image", src: GreyBag6 },
  ];

  const [selectedImage, setSelectedImage] = useState(imageList[0]);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


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

export default GreyBag;
