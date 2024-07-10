// src/components/Button.jsx
import React from 'react';

const Button = ({ id, onClick, children }) => (
  <button id={id} onClick={onClick}>
    {children}
  </button>
);

export default Button;
