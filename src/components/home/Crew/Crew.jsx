import styles from './Crew.module.css';
import { GridCrew } from './GridCrew';
import { InlineCrew } from './InlineCrew';

export const Crew = () => {
  return (
    <section className={styles.section}>
      <InlineCrew/>
      {/* <GridCrew/> */}
    </section>
  );
}