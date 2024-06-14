import styles from './MainWrapper.module.css';
export const MainWrapper = ( {children} ) => {
  return (
    <div className={`${styles.mainWrapper}`}>
      {children}
    </div>
  );
}