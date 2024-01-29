import styles from "./PageLayout.module.scss";
import { ChildrenProps } from "@/types/ChildrenProps";

export function PageLayout({ children }: ChildrenProps) {
  return <div className={styles["layout-container"]}>{children}</div>;
}
