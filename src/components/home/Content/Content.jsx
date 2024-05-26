import { Aside } from "./Aside";
import styles from "./Content.module.css";
import { MainContent } from "./MainContent";

export const Content = () => {
  return (
    <div className={`${styles.container} container`}>
      <Aside/>
      <MainContent />
    </div>
  );
}