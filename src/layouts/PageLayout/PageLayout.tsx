import styles from "styles/layouts/PageLayout.module.scss";
import { ChildrenProps } from "types/ChildrenProps";

export function PageLayout({ children }: ChildrenProps) {
  return <div className={styles.layoutContainer}>{children}</div>;
}
