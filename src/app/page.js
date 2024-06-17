import { MainInfo } from "app/components/home/MainInfo";
import styles from "./page.module.css";
import { Hero } from "app/components/home/Hero";
import { Footer } from "app/components/shared/Footer";
import { MainBanner } from "app/components/home/MainBanner";
import { Crew } from "app/components/home/Crew";
import { MainWrapper } from "app/components/home/MainWrapper";
import { HeroMotion } from "app/components/home/HeroMotion";
import { MainTitle } from "app/components/home/MainTitle";
import { MainMotion } from "app/components/home/MainMotion";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <HeroMotion title={"Imagina a una mujer sofocada."} />
      <HeroMotion
        title={
          "Atrapada entre el peso de las expectativas y el anhelo desesperado de libertad."
        }
      />
      <MainWrapper>
        <MainTitle />
        <MainMotion />
        <MainInfo />
        <MainBanner />
        <Crew />
      </MainWrapper>
      <Footer />
    </main>
  );
}
