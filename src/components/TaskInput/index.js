import React, { useState } from "react";
import "./index.css";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="input-cont">
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="input-element"
      />
      <button onClick={handleAddTask} className="add-task-btn">
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
