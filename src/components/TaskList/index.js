import React from "react";
import "./index.css";

const TaskList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <div className="tasklist-cont">
      <h1 className="tasks">Tasks:</h1>
      <ul className="todo-items-cont">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            <span
              className="task-name"
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)} className="delete-btn">
              Delete
            </button>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
              className="toggle-box"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
