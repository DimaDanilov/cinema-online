"use client";

import { AnyProps } from "@/types/AnyProps";

interface ButtonProps extends AnyProps {
  children: string;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};
