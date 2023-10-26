import React from 'react';

const TodoList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          {task.title}
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
