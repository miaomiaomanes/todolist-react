import React, { useState } from "react";

function ToDoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [todo, setTodo] = useState();

  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (evt) => {
    setTodo(evt.target.value);
  };

  const handleUpdate = (evt) => {
    evt.preventDefault();

    props.edit(props.id, todo);
    toggleFrom();
    // console.log(todo);
    //console.log(props.id)
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={todo} type="text" />
          <button onClick={handleUpdate}>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div>
        <li>
          {props.text}
          <button
            className="delete"
            onClick={() => {
              props.remove(props.id);
              console.log(props.id);
            }}
          >
            {" "}
            delete
          </button>
          <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
          <button
            className="delete"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            {" "}
            edit
          </button>
        </li>
      </div>
    );
  }

  return result;
}

export default ToDoItem;
