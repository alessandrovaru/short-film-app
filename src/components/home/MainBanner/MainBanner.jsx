import Image from 'next/image';
import styles from './MainBanner.module.css';

export const MainBanner = (props) => {
  return (
    <div className={`${styles.section}`}>
      <div className={`${styles.container} container`}>
        <Image key={'main'} src={'/images/portada.png'} alt="Main Banner" fill loading='lazy' />
      </div>
    </div>
  );
}