import styles from './Crew.module.css';
import { InlineCrew } from './InlineCrew';

export const Crew = () => {
  return (
    <section className={styles.section}>
      <InlineCrew/>
    </section>
  );
}