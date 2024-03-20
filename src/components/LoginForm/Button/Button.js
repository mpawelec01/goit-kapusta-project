import css from './Button.module.css';
import React from 'react';

const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <button className={css.btn} type={type} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;