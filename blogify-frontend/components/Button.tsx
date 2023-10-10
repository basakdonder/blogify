import React from "react";

interface ButtonProps {
  label: string;
  bgColor: string;
}

export default function Button({ label, bgColor }: ButtonProps) {
  const style = {
    backgroundColor: bgColor,
  };
  return <button style={style}>{label}</button>;
}
