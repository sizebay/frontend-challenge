import React from 'react';

interface ButtonProps {
  active?: boolean;
  onClick?: (props: any) => void
  title: string;
}

const Button = ({ active = false, onClick, title }: ButtonProps) => {

  const buttonClasses = `px-4 py-0.5 ${active ? "bg-gray-700 text-white" : ""}`;

  const capitalizeWords = (str: string): string => str.replace(/\b\w/g, (match) => match.toUpperCase());

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span>{capitalizeWords(title)}</span>
    </button>
  );
};

export default Button;
