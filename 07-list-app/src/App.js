import "./all.css";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

function App() {
  return (
    <section>
      <div className="section-center">
        <form>
          <h2 className="title">Todo App</h2>
          <div className="form-control">
            <input type="text" className="input" placeholder="Add your new todo" />
            <button type="submit" className="submit-btn">
              <FaPlus />
            </button>
          </div>
        </form>
        <div className="items-container">
          <article className="item">
            <p className="item-text">Buy a new gaming laptop</p>
            <div className="buttons-container">
              <button className="btns edit-btn">
                <FaRegEdit />
              </button>
              <button className="btns delete-btn">
                <FaTrash />
              </button>
            </div>
          </article>
          <div className="clear-all-grid">
            <p className="item-text clear-all-text">you have 4 pending taks</p>
            <button className="clear-all-btn">clear all</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
