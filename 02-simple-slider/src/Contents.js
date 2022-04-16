import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import data from "./data.js";

// import "./style.css";

const Contents = () => {
  const [index, setIndex] = useState(0);
  const { image, id, person, text, company } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return (number = 0);
    }
    if (number < 0) {
      return (number = data.length - 1);
    }

    return number;
  };

  const nextElement = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevElement = () => {
    let newIndex;

    setIndex((index) => {
      newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const random = () => {
    let random = Math.floor(Math.random() * data.length);
    if (random === index) {
      random = index + 1;
    }
    setIndex(checkNumber(random));
  };

  // useEffect(() => {
  //   const btns = [...document.querySelectorAll(".button")];
  //   btns.forEach((btn) => {
  //     btn.addEventListener("click", () => {
  //       const id = Number(btn.dataset.id) - 1;
  //       // console.log(id);
  //       btns.forEach((btn) => btn.classList.remove("active"));
  //       btn.classList.add("active");
  //       setIndex(id);
  //     });
  //   });
  // }, []);

  // useEffect(() => {
  //   const btns = [...document.querySelectorAll(".button")];
  //   btns.forEach((btn) => {
  //     const id = Number(btn.dataset.id) - 1;
  //     if (id === index) {
  //       btns.forEach((btn) => btn.classList.remove("active"));
  //       btn.classList.add("active");
  //     }
  //   });
  // });

  return (
    <article className="contents">
      <img src={image} alt="" />
      <p className="text">{text}</p>
      <p className="person-company">
        <span className="person">{person}</span>,
        <span className="company"> {company}</span>
      </p>
      <div className="buttons">
        {data.map((btn, indexBtn) => {
          return (
            <div
              onClick={() => setIndex(indexBtn)}
              className={`button ${index === indexBtn && "active"}`}
              key={btn.id}
              data-id={btn.id}
            ></div>
          );
        })}
      </div>
      <div className="prev-next-btns">
        <button className="prev-btn" onClick={prevElement}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextElement}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={random}>
        random user
      </button>
    </article>
  );
};

export default Contents;
