"use client";

type ButtonProps = {
  children: string;
  [x: string]: any;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};
