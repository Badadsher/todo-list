import React from "react";

interface TaskProps {
  text: string;
  onDelete: () => void;
}
const Task: React.FC<TaskProps> = ({ text, onDelete }) => {
  return (
    <div>
      <span>{text}</span>
      <button onClick={onDelete}>Delete Task</button>
    </div>
  );
};

export default Task;
