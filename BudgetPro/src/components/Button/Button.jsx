// src/components/Button.jsx

import React from 'react';
import './Button.module.css';

const Button = ({ text, onClick, type = 'button', className }) => (
  <button type={type} className={`btn ${className}`} onClick={onClick}>
    {text}
  </button>
);

export default Button;
