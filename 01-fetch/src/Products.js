import React from "react";
import Product from "./Product";

const Products = ({ products, clearFunction }) => {
  console.log(products);
  return (
    <section>
      <div className="section-title">
        <h1>products</h1>
      </div>
      <div className="products-center">
        {products.map((product) => {
          return <Product key={product.id} {...product} clearFunction={clearFunction} />;
        })}
      </div>
    </section>
  );
};

export default Products;
