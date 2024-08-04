import Image from 'next/image';
import styles from './Aside.module.css';
import logoCannes from '../../../../../public/images/logos/logoCannes.jpg';

const data = {
  title: "Technical Information",
  info: [
    { label: "Género", value: "Terror" },
    { label: "Duración", value: "17’" },
    { label: "Formato", value: "Digital" },
    { label: "Language", value: "Español" }
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