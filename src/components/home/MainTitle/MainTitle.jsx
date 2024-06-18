import styles from './MainTitle.module.css';
export const MainTitle = () => {
  return (
    <section id='mainTitle' className={`${styles.section} container`}>
      <p>Un cortometraje escrito y dirigido por Verónica Guillén</p>
      <h1>Catársis</h1>
      <a  href="#mainMotion" className={`btn ${styles.btn}`}>Ver más</a>
    </section>
  );
}