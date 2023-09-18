import React, { useState } from "react";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskText, setTasksText] = useState<string>("");

  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, taskText]);
      setTasksText("");
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => {
          setTasksText(e.target.value);
        }}
      />
      <button onClick={addTask}>Add Task</button>
      <div>
        {tasks.map((task, index) => (
          <Task key={index} text={task} onDelete={() => deleteTask(index)} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
