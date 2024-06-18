'use client'
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from './HeroMotion.module.css';

export const HeroMotion = ({title, subtitle, position}) =>  {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset:['end start', 'start end']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.49, 0.5, 0.51, 0.75, 1], [0, 0, 0.99, 1, 0.99, 0, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [400, 0, -400]);

  return (
    <section ref={container} className={`${styles.textSection}`}>
      <motion.div className={`${styles.textContainer}`} id={position} style={{y: y, opacity:opacity }}>
        <a href={position === 1 ? '#2' : '#mainTitle'}>
          {title ? <h2>{title}</h2> : <></>}
          {subtitle ? <p>{subtitle}</p> : <></>}
        </a>
      </motion.div>
    </section>
  )
}