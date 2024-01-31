"use client";

import styles from "@/styles/ui/Button.module.scss";
import { AnyProps } from "@/types/AnyProps";

interface ButtonProps extends AnyProps {
  children: string;
  background: "gray" | "cyber";
}

export const Button = ({ children, background, ...props }: ButtonProps) => {
  return (
    <button
      className={[styles["button"], styles[background]].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};
