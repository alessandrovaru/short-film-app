import styles from './MainTitle.module.css';
export const MainTitle = () => {
  return (
    <section id='mainTitle' className={`${styles.section} container`}>
      <p>Escrito y Dirigido por Verónica Guillén</p>
      <h1>Catársis</h1>
    </section>
  );
}