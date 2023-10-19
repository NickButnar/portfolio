import React from 'react';
import styles from "./header.module.css";
import btn from '../../stylesheets/btn.module.css';

// import CV from 'public/CV.pdf';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Hi, my name is <span className={styles.name}>Name</span></h1>
      <p className={styles.subtitle}>a frontend developer</p>
      <p className={styles.description}>with passion for learning and creating.</p>
      {/* FIXME  Cannot download PDF. Catching error*/}
      {/* <a href={CV} download='Download CV' target='_blank' rel="noreferrer"> */}
        <button className={btn.primary}>Download CV</button>
      {/* </a> */}
    </div>
  );
}

export default Header;
