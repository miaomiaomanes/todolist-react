import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);
  //const [isEditing, setIsEditing] = useState(false);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  const update = (id, todo) => {
    const updatedTodos = items.map((item, index) => {
      if (index === id) {
        return todo;
      }
      return item;
    });
    setItems(updatedTodos);
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              remove={deleteItem}
              edit={update}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
