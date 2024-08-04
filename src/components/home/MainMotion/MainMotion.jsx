'use client'
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from './MainMotion.module.css';

const data = [
  {
    title: 'El Duelo, la pérdida.',
    content: 'Siempre le han susurrado a Elena, una presencia constante contra el acero sofocante de la ciudad.'
  },
  {
    title: 'Y la liberación femenina',
    content: 'Ahora, la invitan con una promesa: una oportunidad para deshacerse de la carga de quién "debería" ser y abrazar a la mujer que desea ser.'
  }
]

export const MainMotion = ({text}) =>  {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset:['start end', 'end start']
  });

  const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [ "0vw", "0vw", "-50vw", "-100vw", "-100vw"]);


  return (
    <section id="mainMotion" ref={container} className={`${styles.section} `}>
          <motion.div
            style={{ x }}
            className={styles.textDiv}
          >
            {data.map((item, index) => (
              <div key={index} className={styles.thumbnail}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </motion.div>
    </section>

    
  )
}

