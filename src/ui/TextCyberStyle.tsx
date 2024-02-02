import styles from "styles/ui/TextCyberStyle.module.scss";
import { AnyProps } from "types/AnyProps";

interface TextCyberStyleProps extends AnyProps {
  children: string;
  fontSize: "middle" | "big";
  className?: string;
}

export const TextCyberStyle = ({
  children,
  fontSize,
  className,
  ...props
}: TextCyberStyleProps) => {
  return (
    <span
      className={[styles.cyberText, styles[fontSize], className].join(" ")}
      {...props}
    >
      {children}
    </span>
  );
};
