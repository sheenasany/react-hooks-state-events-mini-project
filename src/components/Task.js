import React from "react";

function Task({ text , category, deletedTasks }) {

  function handleDeleteButton() {
    deletedTasks(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDeleteButton} className="delete">X</button>
    </div>
  );
}

export default Task;
