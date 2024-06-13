import Image from 'next/image';
import styles from './MainBanner.module.css';

export const MainBanner = (props) => {
  return (
    <div className={`${styles.container} container`}>
      <Image key={'main'} src={'/images/main-banner-copy.jpg'} alt="Main Banner" fill loading='lazy' />
    </div>
  );
}