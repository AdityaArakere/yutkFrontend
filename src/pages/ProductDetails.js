import React from "react";
import { handleWhatsAppClick } from "./WhatsAppRedirect";

function Product({ name, mrp, price, highlights, description }) {
  // Split the description into an array of bullet points
  const bulletPoints = description.split("\n");
  const bulletPoints2 = highlights.split("\n");

  const handleWhatsAppButtonClick = () => {
    handleWhatsAppClick();
  };

  return (
    <div className="product">
      <hr className="my-4" />
      <h2>{name}</h2>
      <p className="mrp h6">MRP: {mrp}</p>
      <div className="price-container">
        <p className="price h3">₹{price}</p>
        <p className="after-price h3">
          {Math.floor(100 - (price / mrp) * 100)}% off
        </p>
      </div>
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
        {/* <button className="btn btn-success">Add to Cart</button> */}
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

export default Product;
