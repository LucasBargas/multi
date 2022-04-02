import React from 'react';
import Btn from './Button.style';

const Button = ({ children, borderColor, buttonColor, fontColor, hoverColor }) => {
  return (
    <Btn 
      href='#'
      borderColor={borderColor} 
      buttonColor={buttonColor}
      fontColor={fontColor}
      hoverColor={hoverColor}
    >
      {children}
    </Btn>
  )
}

export default Button;
