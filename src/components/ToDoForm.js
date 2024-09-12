import React, { useState } from "react";

const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [points, setPoints] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim() || points <= 0) {
      alert('Please provide a task and assign positive points');
      return;
    }
    addTodo(value, points);
    setValue("");
    setPoints(0)
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
      <input
        className="todo-points"
        type="number"
        value={points}
        placeholder="Points"
        onChange={(e) => setPoints(Number(e.target.value))}
      />
      <button className="todo-btn" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default ToDoForm;
