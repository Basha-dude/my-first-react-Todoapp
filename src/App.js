import React, { useState } from "react";
import { Todo } from "./Todo";
import "./App.css";

function App() {
  const [todoLists, setTodoLists] = useState([]);
  const [task, setTask] = useState("");

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    const todo = {
      id: todoLists.length === 0 ? 1 : todoLists[todoLists.length - 1].id + 1,
      taskName: task,
      completed: false,
    };
    setTodoLists([...todoLists, todo]);
  };

  const deleteTask = (id) => {
    setTodoLists(todoLists.filter((todo) => todo.id !== id));
  };

  const handleCheckboxChange = (id) => {
    setTodoLists(
      todoLists.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <div className="navbar">
        <h1>TODO LIST</h1>
      </div>
      <div className="inputContainer">
        <input onChange={handleInputChange} />
        <button className="task button" onClick={addTask}>
          Add Task
        </button>
        <div className="todoList">
          {todoLists.map((todo) => {
            return (
              <Todo
                key={todo.id}
                taskName={todo.taskName}
                id={todo.id}
                deleteTask={deleteTask}
                completed={todo.completed}
                handleCheckboxChange={handleCheckboxChange}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
