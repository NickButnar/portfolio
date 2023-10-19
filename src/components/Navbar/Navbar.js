import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./navbar.module.css";

const Navbar = () => {

  const activeLink = styles.active;
  const notActiveLink = styles.link;

  return (
    <nav className={styles.navbar}>
      <p className={styles.title}>
        <NavLink to='/'><strong>Freelancer</strong> portfolio</NavLink>
      </p>

      <ul className={styles.list}>
        <NavLink to='/' className={({isActive})=>  isActive? activeLink : notActiveLink}>Home</NavLink>

        <NavLink to='/skills' className={({isActive})=>  isActive? activeLink : notActiveLink}>Skills</NavLink>

        <NavLink to='/contacts' className={({isActive})=>  isActive? activeLink : notActiveLink}>Contacts</NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
