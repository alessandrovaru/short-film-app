import Image from 'next/image';
import styles from './Aside.module.css';
import logoCannes from '../../../../../public/images/logos/logoCannes.jpg';

const data = {
  title: "Technical Information",
  info: [
    { label: "Genre", value: "Drama" },
    { label: "Running Time", value: "15’" },
    { label: "Aspect Ratio", value: "1:2.39" },
    { label: "Screening Formats", value: "2K 5.1 DCP, 35 mm print (French subs), ProRes." },
    { label: "Sound", value: "5.1 or Stereo." },
    { label: "Shot on", value: "Arri Alexa, 24p, original format 2.8K" },
    { label: "Language", value: "Ukrainian, English." },
    { label: "Subtitles", value: "English, Italian, French, Spanish, German, Hebrew, Chinese, Russian, Korean, Arabic." }
  ]
};


export const Aside = (props) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.imageContainer}>
        <Image
          src={logoCannes}
          alt="Cannes logo"
          fill
          loading='lazy'
        />
      </div> */}
      <h2>{data.title}</h2>
      <ul>
        {data.info.map((item, index) => (
          <li key={index}><strong>{item.label}:</strong> {item.value}</li>
        ))}
      </ul>
    </div>
  );
}