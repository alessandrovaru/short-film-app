import { Aside } from "./Aside";
import styles from "./MainInfo.module.css";
import { MainContent } from "./MainContent";

export const MainInfo = () => {
  return (
    <div className={`${styles.container} container`}>
      <Aside/>
      <MainContent />
    </div>
  );
}