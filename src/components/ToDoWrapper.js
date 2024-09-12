import React, { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";
import ProgressBar from "./ProgressBar";

uuidv4();

const ToDoWrapper = () => {
  const [todos, setTodos] = useState(() => {
    const savedToDos = localStorage.getItem("todos");
    return savedToDos ? JSON.parse(savedToDos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task, points) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task, points, completed: false, isEditing: false },
    ]);
    console.log(todos);
    console.log(totalPoints, completedPoints);
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editToDo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("todos");
    setTodos([]);
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const totalPoints =
    todos.length > 0 ? todos.reduce((acc, todo) => acc + todo.points, 0) : 0;

  const completedPoints =
    todos.length > 0
      ? todos.reduce((acc, todo) => acc + (todo.completed ? todo.points : 0), 0)
      : 0;

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!!</h1>
      <ProgressBar totalPoints={totalPoints} completedPoints={completedPoints} />
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditToDoForm task={todo} editToDo={editTask} />
        ) : (
          <ToDo
            task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />
        )
      )}
      <button onClick={clearLocalStorage} className="todo-btn">
        Clear All Tasks
      </button>
    </div>
  );
};

export default ToDoWrapper;
