import { Aside } from "./Aside";
import styles from "./Content.module.css";
import { MainContent } from "./mainContent";

export const Content = () => {
  return (
    <div className={styles.container}>
      <Aside className={styles.aside}/>
      <MainContent className={styles.mainContent}/>
    </div>
  );
}