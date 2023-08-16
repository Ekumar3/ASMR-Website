import React from "react";

const sizeClasses = {
  txtSpaceGroteskLight48: "font-light font-spacegrotesk",
  txtSpaceGroteskMedium53: "font-medium font-spacegrotesk",
  txtSpaceGroteskMedium32: "font-medium font-spacegrotesk",
  txtSpaceGroteskLight32: "font-light font-spacegrotesk",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
