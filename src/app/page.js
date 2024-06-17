'use client'
import { MainInfo } from "app/components/home/MainInfo";
import styles from "./page.module.css";
import { Hero } from "app/components/home/Hero";
import { Footer } from "app/components/shared/Footer";
import { MainBanner } from "app/components/home/MainBanner";
import { Crew } from "app/components/home/Crew";
import { MainWrapper } from "app/components/home/MainWrapper";
import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <HeroTextMotion title={'Imagina a una mujer sofocada.'} />
      <HeroTextMotion title={'Atrapada entre el peso de las expectativas y el anhelo desesperado de libertad.'} />
      <MainWrapper>
        <section className={`${styles.section} container`}>
          <p>Escrito y Dirigido por Verónica Guillén</p>
          <h1>Catársis</h1>
        </section>
        <MainInfo/>
        <MainBanner/>
        <Crew />  
      </MainWrapper>
      <Footer/>
    </main>
  );
}

const HeroTextMotion = ({title, subtitle}) =>  {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset:['end start', 'start end']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.49, 0.5, 0.51, 0.75, 1], [0, 0, 0.99, 1, 0.99, 0, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [400, 0, -400]);
  return (
    <div ref={container} className={`${styles.textSection}`}>
      <motion.div style={{y: y, opacity:opacity }}>
        {title ? <h2>{title}</h2> : <></>}
        {subtitle ? <p>{subtitle}</p> : <></>}
      </motion.div>
    </div>
  )
}