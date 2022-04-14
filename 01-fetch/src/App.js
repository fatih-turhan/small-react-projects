import Products from "./Products";
import { useEffect, useState } from "react";

const url = "https://fakestoreapi.com/products";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const clearFunction = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  const fecth = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setLoading(false);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecth();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (products.length === 0) {
    return (
      <div className="loading">
        <h1>no products left</h1>
        <button
          onClick={() => {
            fecth();
          }}
          className="btn"
        >
          refresh
        </button>
      </div>
    );
  }

  return (
    <main>
      <Products products={products} clearFunction={clearFunction} />
    </main>
  );
}

export default App;
