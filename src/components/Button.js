import React from "react";

const ButtonInline = ({ onClick, type = "button", children }) => (
  <Button type={type} className="button-inline" onClick={onClick}>
    {children}
  </Button>
);

// Refactor: will not share the 'button-inline' className
const Button = ({ onClick, className, type = "button", children }) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

export default Button;

export { ButtonInline };
