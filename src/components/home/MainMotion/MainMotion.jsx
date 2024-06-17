'use client'
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from './MainMotion.module.css';

const data = {
  first: 'Imagina a una mujer sofocada',
  second: 'Elena, atrapada entre el peso de las expectativas y el anhelo desesperado de libertad. Su mundo se reduce al zumbido de monotonía luego de haber perdido a su madre y su trabajo en pocos meses.',
  third: 'Pero las montañas susurran',
  fourth: 'Siempre le han susurrado a Elena, una presencia constante contra el acero sofocante de la ciudad. Ahora, la invitan con una promesa: una oportunidad para deshacerse de la carga de quién "debería" ser y abrazar a la mujer que desea ser.'
}

export const MainMotion = ({text}) =>  {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset:['end start', 'start end']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.49, 0.5, 0.51, 0.75, 1], [0, 0, 0.99, 1, 0.99, 0, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [400, 0, -400]);
  return (
    <section ref={container} className={`${styles.section}`}>
      <motion.div style={{y: y, opacity:opacity }}>
        {text ? text : <></>}
      </motion.div>
    </section>
  )
}