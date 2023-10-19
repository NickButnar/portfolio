import React from "react";
import styles from './skills.module.css';

const Skills = () => {
  return(
    <div className={styles.skills}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.section}>
        <h2 className={styles.subtitle}>Frontend</h2>
        <p>Ruby on Rails, Hotwire, JavaScript, HTML, TailwindCSS, CSS, ReactJS</p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>Backend</h2>
        <p>Ruby, text, text, text, text</p>
      </div>
    </div>
  )
}

export default Skills;
