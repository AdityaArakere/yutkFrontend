import React, { useState } from "react";
import yutkPopularT from "../yutkPopularT.jpg";
import yutkHoodie2 from "../yutkHoodie2.jpg";
import bags2 from "../bags2.jpg";
import bag from "../bag.jpg";
import bags from "../bags.jpg";
import "./Backpack.css";
import yutk_bag from "../yutk_bag.mp4";
import yutk_bag1 from "../yutk_bag1.JPG";
import yutk_bag2 from "../yutk_bag2.JPG";
import yutk_bag3 from "../yutk_bag3.JPG";
import yutk_bag4 from "../yutk_bag4.JPG";
import yutk_bag5 from "../yutk_bag5.JPG";
import yutk_bag6 from "../yutk_bag6.JPG";
import yutk_bag7 from "../yutk_bag7.JPG";

function Backpack() {
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
          <img src={selectedImage.src} className="right-img" alt="Selected Image" />
        )}
      </div>
    </div>
  );
}

export default Backpack;
