import { Aside } from "./Aside";
import styles from "./MainInfo.module.css";
import { MainContent } from "./MainContent";

export const MainInfo = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.container} container`}>
        <Aside/>
        <MainContent />
      </div>
    </section>
  );
}