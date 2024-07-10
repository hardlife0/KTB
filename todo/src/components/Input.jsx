// src/components/Input.jsx
import React from 'react';

const Input = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="할일을 입력하세요"
    value={value}
    onChange={onChange}
  />
);

export default Input;
