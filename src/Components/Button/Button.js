import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button
      className={`button btn-text-${props.textcolor.toLowerCase()} btn-main-color-${props.maincolor.toLowerCase()}`}
      onClick={props.onclickhandle}>{props.content}
    </button>
  );
}

export default Button;
