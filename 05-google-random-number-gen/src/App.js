import "./all.css";
import { useState, useEffect } from "react";

function App() {
  const [result, setResult] = useState(0);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  const randomFunction = () => {
    let list = [];
    for (let i = Number(min); i <= Number(max); i++) {
      list = [...list, i];
    }
    const random = Math.floor(Math.random() * list.length);
    setResult(list[random]);
  };

  useEffect(() => {
    randomFunction();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (min && max) {
      randomFunction();
    }
  };

  return (
    <div className="form-div">
      <h2>Google Random Number</h2>
      <form className="form">
        <div className="grid">
          <p className="result">{result}</p>
          <div className="min-max">
            <p className="min-max-text">min</p>
            <input
              className="input"
              type="number"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
            <p className="min-max-text">max</p>
            <input
              className="input"
              type="number"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleSubmit} className="btn gen-btn" type="button">
          generate
        </button>
      </form>
    </div>
  );
}

export default App;
