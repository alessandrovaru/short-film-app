import { MainInfo } from "app/components/home/MainInfo";
import styles from "./page.module.css";
import { Hero } from "app/components/home/Hero";
import { Footer } from "app/components/shared/Footer";
import { MainBanner } from "app/components/home/MainBanner";
import { Crew } from "app/components/home/Crew";
import { MainWrapper } from "app/components/home/MainWrapper";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <div className={`${styles.textSection}`}>
        <div>
          <h1>Hola</h1>
        </div>
      </div>
      <MainWrapper>
        <MainInfo/>
        <MainBanner/>
        <Crew />  
      </MainWrapper>
      <Footer/>
    </main>
  );
}
