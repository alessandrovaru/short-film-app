import Image from "next/image";
import styles from "./InlineCrew.module.css";

export const InlineCrew = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image src={'https://picsum.photos/600/300'} alt="crew" fill loading="lazy" />
        ss
      </div>
    </div>
  );
}