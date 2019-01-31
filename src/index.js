import React from 'react';

const CustomButton = ({
  style,
  className,
  content,
  onClick
}) => {
  return (
    <button
      style={ style }
      className={ className }
      onClick={ onClick }>
      { content }
    </button>
  )
};

export default CustomButton;