'use client'
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from './MainMotion.module.css';

export const MainMotion = ({title, subtitle}) =>  {
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
            oportunidad para deshacerse de la carga de quién &quot;debería&quot; ser y
            abrazar a la mujer que desea ser.
          </p>
      </motion.div>
    </div>
  )
}