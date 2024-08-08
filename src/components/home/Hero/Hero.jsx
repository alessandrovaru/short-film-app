'use client'
import Image from 'next/image';
import styles from './Hero.module.css';
import { register } from 'swiper/element/bundle';
import { useRef } from 'react';

register();

import { useScroll, useSpring, useTransform, motion } from "framer-motion";

const data = {
  title: "Short Film",
  image: '/images/backgrounds/hero.jpg',
  cta: 'Watch Now',
};

export const Hero = () => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset:['end start', 'start end']
  });

  const translateX = useTransform(scrollYProgress, [0, 1], ["-80%", "50%"]);
  const translateXSpring = useSpring(translateX, { stiffness: 100, damping: 10 });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.04]);
  
  return (
    <section ref={container} className={styles.container}>
      <motion.div className={styles.imageContainer} style={{ y: translateXSpring, scale, opacity }}>
        <Image className={styles.image} src={data.image} alt={data.title} fill />
      </motion.div>
    </section>
  );
}
