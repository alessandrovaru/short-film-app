'use client'
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from './HeroMotion.module.css';

export const HeroMotion = ({title, subtitle, position}) =>  {


 

  return (
    <section  className={`${styles.textSection} appear`}>
      <div className={`${styles.textContainer}`} id={position} >
        <>
          {title ? <h2>{title}</h2> : <></>}
          {subtitle ? <p>{subtitle}</p> : <></>}
        </>
      </div>
    </section>
  )
}