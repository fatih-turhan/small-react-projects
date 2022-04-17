import "./all.css";
import data from "./data";
import { useEffect, useState } from "react";
import { BsChatQuote } from "react-icons/bs";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const last = people.length - 1;
    if (index < 0) {
      setIndex(last);
    }
    if (index > last) {
      setIndex(0);
    }
  });

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <main>
      <section className="section">
        <div className="section-title">
          <h1>slider</h1>
          <div className="underline"></div>
        </div>
        <div className="section-center">
          {people.map((person, personIndex) => {
            let postion = "next";
            if (index === personIndex) {
              postion = "active";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              postion = "last";
            }

            return (
              <article className={`slider ${postion}`} key={person.id}>
                <img src={person.image} alt="" />
                <p className="name">{person.name}</p>
                <p className="title">{person.title}</p>
                <p className="text">{person.quote}</p>
                <BsChatQuote className="icon" />
              </article>
            );
          })}
          <button className="slide-btn prev-btn" onClick={() => setIndex(index - 1)}>
            <MdNavigateBefore />
          </button>
          <button className="slide-btn next-btn" onClick={() => setIndex(index + 1)}>
            <MdNavigateNext />
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
