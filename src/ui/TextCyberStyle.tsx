import styles from "@/styles/components/TextCyberStyle.module.scss";
import { AnyProps } from "@/types/AnyProps";

interface TextCyberStyleProps extends AnyProps {
  children: string;
  fontSize: "middle" | "big";
}

export const TextCyberStyle = ({
  children,
  fontSize,
  ...props
}: TextCyberStyleProps) => {
  return (
    <span
      className={[styles[`cyber-text`], styles[fontSize]].join(" ")}
      {...props}
    >
      {children}
    </span>
  );
};
