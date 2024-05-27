import Image from 'next/image';
import styles from './Hero.module.css';
const data = 
  {
    title: "Short Film",
    image: 'https://picsum.photos/1920/1080',
    cta: 'Watch Now',
  };


export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{data.title}</h1>
        <button className={styles.cta}>{data.cta}</button>
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={data.image} alt={data.title} fill />
      </div>
    </div>
  );
}