import React from 'react';
import Btn from './Button.style';

const Button = ({ children, borderColor, buttonColor, fontColor }) => {
  return (
    <Btn 
      borderColor={borderColor} 
      buttonColor={buttonColor}
      fontColor={fontColor}
    >
      {children}
    </Btn>
  )
}

export default Button;
