import React from "react";

interface ButtonProps {
  label: string;
  bgColor: string;
}

export default function Button({ label, bgColor }: ButtonProps) {
  return (
    <button className={`px-5 py-2 text-white rounded ${bgColor}`}>
      {label}
    </button>
  );
}
