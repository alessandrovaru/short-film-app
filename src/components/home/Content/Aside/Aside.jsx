import Image from 'next/image';
import styles from './Aside.module.css';
export const Aside = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/logoCannes.jpg"
          alt="Cannes logo"
          fill
          loading='eager'
        />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/logoBifa.jpg"
          alt="Cannes logo"
          fill
          loading='eager'
        />
      </div>
      <ul>
        <li><strong>Genre:</strong> Drama</li>
        <li><strong>Running Time:</strong> 15’</li>
        <li><strong>Aspect Ratio:</strong> 1:2.39</li>
        <li><strong>Screening Formats:</strong> 2K 5.1 DCP, 35 mm print (French subs), ProRes.</li>
        <li><strong>Sound:</strong> 5.1 or Stereo.</li>
        <li><strong>Shot on:</strong> Arri Alexa, 24p, original format 2.8K</li>
        <li><strong>Language:</strong> Ukrainian, English.</li>
        <li><strong>Subtitles:</strong> English, Italian, French, Spanish, German, Hebrew, Chinese, Russian, Korean, Arabic.</li>
      </ul>
    </div>
  );
}