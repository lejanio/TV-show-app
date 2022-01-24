import React, { FC } from 'react';
import './Button.scss';

type ButtonType = {
  type: 'submit';
}

const Button:FC<ButtonType> = ({ children, type }) => (
  <button
    type={type}
    className="button"
  >
    {children}
  </button>
);

export default Button;
