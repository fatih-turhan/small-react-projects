import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const List = ({ list, clearOne, editItem }) => {
  return (
    <>
      {list.map(({ id, title, number }) => {
        return (
          <article key={id} className="item">
            <p className="item-text">
              {number}. {title}
            </p>
            <div className="buttons-container">
              <button className="btns edit-btn" onClick={() => editItem(id)}>
                <FaRegEdit />
              </button>
              <button className="btns delete-btn" onClick={() => clearOne(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
