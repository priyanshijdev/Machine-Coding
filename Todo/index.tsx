import React, { useState } from "react";
import "./styles.css";

// add todo
// mark todo as complete
// delete
// view
export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const AddTask = () => {
    if (input.trim() != "") {
      const item = {
        id: todo.length + 1,
        text: input,
        completed: false,
      };
      setTodo((prev: any) => [...prev, item]);
      setInput("");
    }
  };
  const handleDelete = (id: any) => {
    setTodo(todo.filter((item: any) => item.id != id));
    // setTodo(deleteItem);
  };
  const toggleCheck = (id: any) => {
    const updatedList: any = todo.map((ele: any) => {
      if (ele.id == id) {
        return {
          ...ele,
          completed: !ele.completed,
        };
      } else {
        return ele;
      }
    });
    setTodo(updatedList);
  };

  return (
    <div>
      <div>
        Enter Task:{" "}
        <input
          type="text"
          placeholder="Enter Task"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />{" "}
        <button onClick={() => AddTask()}> Submit</button>
      </div>
      <br />
      <ul>
        {todo.map((t: any) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleCheck(t.id)}
            />
            <span className={t.completed ? "editTask" : ""}>{t.text} </span>
            <button onClick={() => handleDelete(t.id)}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
