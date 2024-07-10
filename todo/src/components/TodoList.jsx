// src/components/TodoList.jsx
import React from 'react';

const TodoList = ({ todos, onCheckboxChange, onDoubleClick }) => (
  <ul id="todolist">
    {todos.map((todo, index) => (
      <ul key={index} onDoubleClick={() => onDoubleClick(index)}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onCheckboxChange(index)}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      </ul>
    ))}
  </ul>
);

export default TodoList;
