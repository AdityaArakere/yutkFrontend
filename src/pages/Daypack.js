import React, { useState } from "react";
import Product from "./ProductDetails";
import "./Daypack.css";
const yutk_bag = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/DayPackImages/yutk_bag.mp4"
const yutk_bag1 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/DayPackImages/yutk_bag1.jpg"
const yutk_bag2 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/DayPackImages/yutk_bag2.jpg"
const yutk_bag3 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/DayPackImages/yutk_bag3.jpg"
const yutk_bag4 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/DayPackImages/yutk_bag4.jpg"
const yutk_bag5 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/DayPackImages/yutk_bag5.jpg"
const yutk_bag6 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/DayPackImages/yutk_bag6.jpg"
const yutk_bag7 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/DayPackImages/yutk_bag7.jpg"

function Daypack() {
  const product = {
    name: "YUTK Mini Outdoor/Casual/Small Daypack for Adults and Kids",
    mrp: "750",
    price: "299",
    highlights: `
      Material: Polyester, Durable & Water Proof, Color:Black
      Laptop Compatibility: No
      Closure Type: Zipper; Age Range Description: Kids/Adults
      Capacity: 15 liters; Dimensions: 15 cms x 40 cms x 28 cms (HxWxL))
      Compartments: 1 Big and 1 small Pcoket at front.`,
    description: `Top Quality from Yutk`,
  };

  const imageList = [
    { type: "video", src: yutk_bag7 },
    { type: "image", src: yutk_bag1 },
    { type: "image", src: yutk_bag2 },
    { type: "image", src: yutk_bag3 },
    { type: "image", src: yutk_bag4 },
    { type: "image", src: yutk_bag5 },
    { type: "image", src: yutk_bag6 },
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
            <source className="vid" src={yutk_bag} type="video/mp4" />
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

export default Daypack;
