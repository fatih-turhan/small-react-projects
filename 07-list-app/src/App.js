import "./all.css";
import { useState, useEffect } from "react";
import List from "./List";
import { FaPlus } from "react-icons/fa";
import { BsFillPenFill } from "react-icons/bs";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [number, setNumber] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ state: true, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // alert
      showAlert("please enter value", "danger", true);
    } else if (name && isEditing) {
      // edit values
      setList(
        list.map((item) => {
          if (item.id === editID) {
            item = { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setIsEditing(false);
      setEditID(null);
      showAlert("you edited item", "success", true);
    } else {
      setNumber(number + 1);
      // add to the list and dom
      const newPerson = { number, id: new Date().getTime().toString(), title: name };
      setList([...list, newPerson]);
      setName("");
      showAlert("you added one item", "success", true);
    }
  };
  const showAlert = (msg = "", type = "", state = false) => {
    setAlert({ state, msg, type });
  };

  // clear all items from list
  const clearAll = () => {
    // alert
    showAlert("you cleared all list", "danger", true);
    setList([]);
    setName("");
  };
  // clear one item
  const clearOne = (id) => {
    // alert
    showAlert("you delete one item", "danger", true);
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  // edit item
  const editItem = (id) => {
    // alert
    const name = list.find((item) => item.id === id);
    setName(name.title);
    setEditID(id);
    setIsEditing(true);
  };
  return (
    <section>
      <div className="section-center">
        <form onSubmit={handleSubmit}>
          {alert.state && <Alert {...alert} showAlert={showAlert} list={list} />}

          <h2 className="title">Todo App</h2>
          <div className="form-control">
            <input
              type="text"
              className="input"
              placeholder="Add your new todo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? <BsFillPenFill /> : <FaPlus />}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="items-container">
            <List list={list} clearOne={clearOne} editItem={editItem} />
            <div className="clear-all-grid">
              <p className="item-text clear-all-text">
                you have {list.length} pending taks
              </p>
              <button className="clear-all-btn" onClick={clearAll}>
                clear all
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
