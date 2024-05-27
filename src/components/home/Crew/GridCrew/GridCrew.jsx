import styles from "./GridCrew.module.css";
import Image from "next/image";

const data = [
  {
    name: "John Doe",
    position: "1st Assistant Director",
    image: 'https://picsum.photos/300/300',
  },
  {
    name: "Jane Doe",
    position: "2nd Assistant Director",
    image: 'https://picsum.photos/300/300',
  },
  {
    name: "John Doe",
    position: "1st Assistant Director",
    image: 'https://picsum.photos/300/300',
  },
  {
    name: "Jane Doe",
    position: "2nd Assistant Director",
    image: 'https://picsum.photos/300/300',
  },
  {
    name: "John Doe",
    position: "1st Assistant Director",
    image: 'https://picsum.photos/300/300',
  },
  {
    name: "Jane Doe",
    position: "2nd Assistant Director",
    image: 'https://picsum.photos/300/300',
  },
];

export const GridCrew = () => {
  return (
    <div className={`${styles.container} container`}>
      <h2 className={styles.title}>Our Crew</h2>
      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imageContainer}>
            <Image src={item.image} alt="crew" fill loading="lazy" />
          </div>
          <div className={styles.contentContainer}>
            <h4 className={styles.title}>{item.name}</h4>
            <p className={styles.text}>{item.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
}