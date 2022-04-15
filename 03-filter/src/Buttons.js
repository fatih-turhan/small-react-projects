import React, { useEffect } from "react";
import { useState } from "react";

const Buttons = ({ filterProducts, categories }) => {
  const [value, setValue] = useState(0);

  return (
    <div className="buttons">
      {categories.map((category, index) => {
        return (
          <button
            className={`${index === value && "btn-active"}`}
            onClick={() => {
              filterProducts(category);
              setValue(index);
            }}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
