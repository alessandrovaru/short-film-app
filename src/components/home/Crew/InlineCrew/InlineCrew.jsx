import Image from "next/image";
import styles from "./InlineCrew.module.css";

const data = [
  {
    image: 'https://picsum.photos/600/300',
    title: 'Verónica Guillén - Directora',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec eros ut erat facilisis pharetra. Fusce nec felis non felis sollicitudin fermentum',
    imageAlign: 'left'
  },
  {
    image: 'https://picsum.photos/600/300',
    title: 'Verónica Guillén - Directora',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec eros ut erat facilisis pharetra. Fusce nec felis non felis sollicitudin fermentum',
    imageAlign: 'right'
  },
  {
    image: 'https://picsum.photos/600/300',
    title: 'Verónica Guillén - Directora',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec eros ut erat facilisis pharetra. Fusce nec felis non felis sollicitudin fermentum',
    imageAlign: 'left'
  },
];

export const InlineCrew = () => {
  return (
    <div className={`${styles.container} container`}>
      {data.map((item, index) => (
        <div key={index} className={item.imageAlign === 'left' ? styles.inlineFlex : styles.inlineFlex2}>
          <div className={item.imageAlign === 'left' ? styles.imageContainer : styles.imageContainer2 }>
            <Image src={item.image} alt="crew" fill loading="lazy" />
          </div>
          <div className={styles.contentContainer}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}