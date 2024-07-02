import React from "react";
type props = {
  text: string;
};
const Button: React.FC<props> = ({ text }) => {
  const className = "bg-blue-500 px-5 rounded text-white h-12";
  return <button className={className}>{text}</button>;
};

export default Button;
