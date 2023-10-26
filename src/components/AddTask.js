import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAdd = () => {
    if (taskTitle.trim() !== '') {
      onAdd(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
