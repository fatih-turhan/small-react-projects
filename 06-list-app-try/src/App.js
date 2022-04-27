import "./all.css";
import { useState, useEffect } from "react";

function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      console.log("error");
    } else if (editing && name) {
      console.log(name);
      const newList = list.map((item) => {
        console.log(item.title);
        if (id === item.indexItem) {
          return { ...item, title: name };
        }
        return item;
      });
      setList(newList);
      setEditing(false);
    } else {
      const person = { title: name, indexItem: new Date().getTime().toString() };
      setList([...list, person]);
      setName("");
    }
  };
  const deleteSingle = (index) => {
    const newList = list.filter((item) => !(item.indexItem === index));
    setList(newList);
  };

  const editSingle = (index) => {
    setEditing(true);
    setId(index);
    const editingItem = list.find((item) => item.indexItem === index);
    setName(editingItem.title);
    console.log(editingItem.title);
    console.log("start editing");
  };
  return (
    <>
      <div className="app-section">
        <form onSubmit={handleSubmit}>
          <h1>list app</h1>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit">send</button>
        </form>
        <div className="output">
          {list.map(({ title, indexItem }, index) => {
            console.log(title);
            return (
              <div key={index} className="item">
                <h2>{title}</h2>
                <div className="buttons">
                  <button onClick={() => editSingle(indexItem)}>edit</button>
                  <button onClick={() => deleteSingle(indexItem)}>delete</button>
                </div>
              </div>
            );
          })}
        </div>
        <button className="delete-btn" onClick={() => setList([])}>
          delete all
        </button>
      </div>
    </>
  );
}

export default App;
