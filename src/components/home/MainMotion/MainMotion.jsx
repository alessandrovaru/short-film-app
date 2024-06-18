'use client'
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from './MainMotion.module.css';

const data = [
  {text: 'Imagina a una mujer sofocada'},
  {text: 'Elena, atrapada entre el peso de las expectativas y el anhelo desesperado de libertad. Su mundo se reduce al zumbido de monotonía luego de haber perdido a su madre y su trabajo en pocos meses.'},
  {text: 'Pero las montañas susurran'},
  {text: 'Siempre le han susurrado a Elena, una presencia constante contra el acero sofocante de la ciudad. Ahora, la invitan con una promesa: una oportunidad para deshacerse de la carga de quién "debería" ser y abrazar a la mujer que desea ser.'}
]

export const MainMotion = ({text}) =>  {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset:['start end', 'end start']
  });

  const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [ "0vw", "0vw", "-50vw", "-100vw", "-100vw"]);
  const scroll100vh = () => {
    window.scroll({
      top: window.innerHeight * 7,
      behavior: 'smooth'
    });
  }

  return (
    <section id="mainMotion" ref={container} className={`${styles.section} `}>
          <motion.div
            style={{ x }}
            className={styles.textDiv}
          >
            <div id="firstPage" className={styles.thumbnail}>
              <h3>Imagina a una mujer sofocada</h3>
              <p>Elena, atrapada entre el peso de las expectativas y el anhelo desesperado de libertad. Su mundo se reduce al zumbido de monotonía luego de haber perdido a su madre y su trabajo en pocos meses.</p>
              <a onClick={scroll100vh} className={`btn ${styles.btn}`}>→</a>
            </div>
            <div id="secondPage" className={styles.thumbnail}>
              <h3>Pero las montañas susurran</h3>
              <p>Siempre le han susurrado a Elena, una presencia constante contra el acero sofocante de la ciudad. Ahora, la invitan con una promesa: una oportunidad para deshacerse de la carga de quién &quot;debería&quot; ser y abrazar a la mujer que desea ser.</p>
            </div>
          </motion.div>
    </section>

    
  )
}

