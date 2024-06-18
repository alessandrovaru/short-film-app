
import Image from 'next/image';
import styles from './Hero.module.css';
import { register } from 'swiper/element/bundle';

register();

const data = {
  title: "Short Film",
  image: '/images/woods.jpg',
  cta: 'Watch Now',
};

export const Hero = () => {

  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={data.image} alt={data.title} fill />
      </div>
    </section>
  );
}
