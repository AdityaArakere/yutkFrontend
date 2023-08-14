import React, { useState } from "react";
import Product from "./ProductDetails";
import "./Daypack.css";
const CasualBag1 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/CasualBagImages/CasualBag1.jpg"
const CasualBag2 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/CasualBagImages/CasualBag2.jpg"
const CasualBag3 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/CasualBagImages/CasualBag3.jpg"
const CasualBag4 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/CasualBagImages/CasualBag4.jpg"
const CasualBag5 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/CasualBagImages/CasualBag5.jpg"
const CasualBag6 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/CasualBagImages/CasualBag6.jpg"
const CasualBag7 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/CasualBagImages/CasualBag7.mp4"
const CasualBag8 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/CasualBagImages/CasualBag8.jpg"

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
    { type: "video", src: CasualBag8 },
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
      {selectedImage.type === "video" ? (
          <video controls loop autoPlay muted width="480" height="504">
            <source className="vid" src={CasualBag7} type="video/mp4" />
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

export default CasualBag;
