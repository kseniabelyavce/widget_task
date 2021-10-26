import styles from "./contentBox.module.css";

export const ContentBox = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
