import Image from 'next/image';
import styles from './MainBanner.module.css';
import mainBanner from '../../../../public/images/main-banner-copy.jpg';

export const MainBanner = (props) => {
  return (
    <div className={`${styles.container} container`}>
      <Image key={'main'} src={mainBanner} alt="Main Banner" fill loading='lazy' />
    </div>
  );
}