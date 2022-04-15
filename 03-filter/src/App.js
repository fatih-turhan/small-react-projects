import data from "./data";
import { useState } from "react";
import "./styles.css";
import Products from "./Products";
import Buttons from "./Buttons";

const categories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [products, setProducts] = useState(data);
  const filterProducts = (category) => {
    if (category === "all") {
      setProducts(data);
    } else {
      let newProducts = data.filter((item) => item.category === category);
      setProducts(newProducts);
    }
  };

  return (
    <main>
      <section className="section">
        <div className="section-title">
          <h1>products</h1>
        </div>
        <Buttons categories={categories} filterProducts={filterProducts} />
        <div className="products-center">
          <Products products={products} />
        </div>
      </section>
    </main>
  );
}

export default App;
