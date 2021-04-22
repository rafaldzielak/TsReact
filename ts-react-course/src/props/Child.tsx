import React from "react";
interface ChildProps {
  color: string;
  onClick: () => void;
}

// Typescript does not know that this is a react component
const Child = ({ color, onClick }: ChildProps) => {
  return (
    <>
      <div>{color}</div>
      <button onClick={onClick}> Click me! </button>
    </>
  );
};

// Defining component as react function component
const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <>
      {children}
      <div>{color}</div>
      <button onClick={onClick}> Click me! </button>
    </>
  );
};

export { Child, ChildAsFC };
