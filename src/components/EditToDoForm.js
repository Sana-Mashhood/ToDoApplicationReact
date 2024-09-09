import React, { useState } from "react";

const EditToDoForm = ({ editToDo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = e => {
    e.preventDefault();
    editToDo(value, task.id);
    setValue("");
  };
   
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={value}
        placeholder="Update"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="todo-btn" type="submit">
        Update Task
      </button>
    </form>
  );
};

export default EditToDoForm;
