import React, { useState } from 'react';

const TodoList = ({ todos }) => {
  const [todoItems, setTodoItems] = useState(todos);

  const toggleComplete = (index) => {
    const updatedTodoItems = [...todoItems];
    updatedTodoItems[index].completed = !updatedTodoItems[index].completed;
    setTodoItems(updatedTodoItems);
  };
  const todosData = [
    { title: 'Learn React', completed: false },
    { title: 'Build a Todo App', completed: true },
    { title: 'Read a Book', completed: false },
    // Add more todo items as needed
  ];

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoItems.map((todo, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(index)}
              />
              {todo.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

