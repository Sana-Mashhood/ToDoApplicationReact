import React, { useState } from "react";

const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={value}
        placeholder="Write down your task here"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="todo-btn" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default ToDoForm;
