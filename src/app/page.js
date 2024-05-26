import { Content } from "app/components/home/Content";
import styles from "./page.module.css";
import { Hero } from "app/components/home/Hero";
import { Footer } from "app/components/shared/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <Content/>
      <Footer/>
    </main>
  );
}
