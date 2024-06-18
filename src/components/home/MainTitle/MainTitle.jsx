import styles from './MainTitle.module.css';

const data = {
  title: "Catársis",
  header: "Un cortometraje escrito y dirigido por Verónica Guillén",
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