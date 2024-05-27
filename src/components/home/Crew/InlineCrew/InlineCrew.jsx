import Image from "next/image";
import styles from "./InlineCrew.module.css";

export const InlineCrew = () => {
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.inlineFlex}>
        <div className={styles.imageContainer}>
          <Image src={'https://picsum.photos/600/300'} alt="crew" fill loading="lazy" />
        </div>
        <div className={styles.contentContainer}>
          <h3 className={styles.title}>Verónica Guillén - Directora</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nec eros ut erat facilisis pharetra. Fusce nec felis non felis
            sollicitudin fermentum
          </p>
        </div>
      </div>
      <div className={styles.inlineFlex2}>
        <div className={styles.contentContainer}>
          <h3 className={styles.title}>Verónica Guillén - Directora</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nec eros ut erat facilisis pharetra. Fusce nec felis non felis
            sollicitudin fermentum
          </p>
        </div>
        <div className={styles.imageContainer2}>
          <Image src={'https://picsum.photos/600/300'} alt="crew" fill loading="lazy" />
        </div>
      </div>
      <div className={styles.inlineFlex}>
        <div className={styles.imageContainer}>
          <Image src={'https://picsum.photos/600/300'} alt="crew" fill loading="lazy" />
        </div>
        <div className={styles.contentContainer}>
          <h3 className={styles.title}>Verónica Guillén - Directora</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nec eros ut erat facilisis pharetra. Fusce nec felis non felis
            sollicitudin fermentum
          </p>
        </div>
      </div>
    </div>
  );
}