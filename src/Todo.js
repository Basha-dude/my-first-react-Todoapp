import React from 'react';

export const Todo = (props) => {
  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.handleCheckboxChange(props.id)}
      />
      <h2 style={{ textDecoration: props.completed ? "line-through" : "none" }}>{props.taskName}</h2>
      <button
        className="deleteButton"
        onClick={() => props.deleteTask(props.id)}
      >
        Delete
      </button>
    </div>
  );
};
