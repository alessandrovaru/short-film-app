import Image from 'next/image';
import styles from './MainBanner.module.css';
export const MainBanner = (props) => {
  return (
    <div className={`${styles.container} container`}>
      <Image src="/images/mainBanner.jpg" alt="Main Banner" fill />
      ss
    </div>
  );
}