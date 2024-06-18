import styles from './MainTitle.module.css';

const data = {
  title: "Catarsis",
  header: "Un cortometraje dirigido y escrito por Verónica Guillén y producido por Adriana Zerpa",
  cta: 'Ver más',
};
export const MainTitle = () => {
  return (
    <section id='mainTitle' className={`${styles.section} container`}>
      <p>{data.header}</p>
      <h2>{data.title}</h2>
      <a href='#mainMotion' className={`btn ${styles.btn}`}>{data.cta}</a>
    </section>
  );
}