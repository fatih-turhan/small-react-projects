import React from "react";
import { useState } from "react";

const Product = ({ id, title, price, description, image, clearFunction }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="product">
      <h3 className="title">{title}</h3>
      <img src={image} alt="" />
      <h4 className="price">price:{price}$</h4>
      <h4>
        {readMore ? description : `${description.substring(0, 100)}...`}
        <button
          onClick={() => {
            setReadMore(!readMore);
          }}
          className="show-more"
        >
          {readMore ? "show less" : "show more"}
        </button>
      </h4>
      <button onClick={() => clearFunction(id)} className="btn">
        clear
      </button>
    </article>
  );
};
export default Product;
