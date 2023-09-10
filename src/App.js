import "./App.css";
import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!newItem) {
      alert("Enter and item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldItems) => [...oldItems, item]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    // ! id:50 diyyelim mesela. Eger sectigim item 50 degilse, 50 disindakileri tekrar new array icinde dondurecek.
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  return (
    <div className="App">
      <h1 className="title">Todo List app</h1>
      <input
        type="text"
        placeholder="add an item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{" "}
              <button onClick={() => deleteItem(item.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
