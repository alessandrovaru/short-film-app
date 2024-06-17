import { MainInfo } from "app/components/home/MainInfo";
import styles from "./page.module.css";
import { Hero } from "app/components/home/Hero";
import { Footer } from "app/components/shared/Footer";
import { MainBanner } from "app/components/home/MainBanner";
import { Crew } from "app/components/home/Crew";
import { MainWrapper } from "app/components/home/MainWrapper";
import { HeroMotion } from "app/components/home/HeroMotion";

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
        <section className={`${styles.section} container`}>
          <p>Escrito y Dirigido por Verónica Guillén</p>
          <h1>Catársis</h1>
          <p>Imagina a una mujer sofocada</p>
          <p>
            Elena, atrapada entre el peso de las expectativas y el anhelo
            desesperado de libertad. Su mundo se reduce al zumbido de monotonía
            luego de haber perdido a su madre y su trabajo en pocos meses.
          </p>
          <p>Pero las montañas susurran</p>
          <p>
            Siempre le han susurrado a Elena, una presencia constante contra el
            acero sofocante de la ciudad. Ahora, la invitan con una promesa: una
            oportunidad para deshacerse de la carga de quién "debería" ser y
            abrazar a la mujer que desea ser.
          </p>
        </section>
        <MainInfo />
        <MainBanner />
        <Crew />
      </MainWrapper>
      <Footer />
    </main>
  );
}
