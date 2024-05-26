import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <p>
        Made by <a href="https://www.alessandrovaru.com" target="_blank" rel="noopener noreferrer"><span className={styles.span}>alessandrovaru</span> &copy; {new Date().getFullYear()}</a>
      </p>
    </div>
  );
}