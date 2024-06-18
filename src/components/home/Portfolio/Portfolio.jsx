import styles from './Portfolio.module.css';
const data = [
  {
    title: 'La Biblioteca',
    category: 'Cortometraje',
    year: '2023',
    url: `<iframe width="860" height="484" src="https://www.youtube.com/embed/1RUuJxpst-U?si=sAiTNWwZ1Yk1AU9f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    title: 'Gracias por venir',
    category: 'Cortometraje',
    year: '2023',
    url: `<iframe width="860" height="484" src="https://www.youtube.com/embed/yqh0WlE4jRI?si=img2JpM2UDKN3sha" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  }
];
export const Portfolio = ( ) => {
  return (
    <section className={`${styles.section}`}>
      {data.map((item, index) => (
        <div key={index} className={`${styles.portfolioContainer} container`}>
          <div className={styles.text}>
            <p className={styles.category}>{item.category}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.year}>{item.year}</p>
          </div>
          <div className={styles.videoContainer}>
            {/* <div className={styles.video} dangerouslySetInnerHTML={{__html: item.url}} /> */}
          </div>
        </div>
      ))}
    </section>
  );
}