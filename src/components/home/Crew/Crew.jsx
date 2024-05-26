import styles from './Crew.module.css';
import { GridCrew } from './GridCrew';
import { InlineCrew } from './InlineCrew';

export const Crew = () => {
  return (
    <div className={styles.container}>
      <InlineCrew/>
      <GridCrew/>
    </div>
  );
}