import React from "react";

const Products = ({ products }) => {
  return (
    <>
      {products.map(({ id, img, price, name, category }) => {
        return (
          <article key={id} className="product">
            <img src={img} />
            <h3>price:{price}$</h3>
            <h3>{name}</h3>
            <button>add cart</button>
          </article>
        );
      })}
    </>
  );
};

export default Products;
