import { Content } from "app/components/home/Content";
import styles from "./page.module.css";
import { Hero } from "app/components/home/Hero";
import { Footer } from "app/components/shared/Footer";
import { MainBanner } from "app/components/home/MainBanner";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <Content/>
      <MainBanner/>
      <Footer/>
    </main>
  );
}
