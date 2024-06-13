import Image from 'next/image';
import styles from './Hero.module.css';
const data = 
  {
    title: "Short Film",
    image: '/images/portada.png',
    cta: 'Watch Now',
  };


export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{data.title}</h1>
        <button className={`${styles.cta} btn btn-warning`}>{data.cta}</button>
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={data.image} alt={data.title} fill />
      </div>
    </div>
  );
}