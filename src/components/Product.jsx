import React from "react";
import "./Product.css";

function Product({ product }) {
  const { image, title, price } = product;
  return (
    <article className="product-container">
      <div className="image-container">
        <img src={image} />
      </div>
      <div className="details">
        <h2 className="price">
          Buy me for only <span>{price}&euro;</span>
        </h2>
        <p className="title">{title}</p>
      </div>
    </article>
  );
}

export default Product;
