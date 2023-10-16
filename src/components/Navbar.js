import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const activeLink = 'navbar__li navbar__li-active';
  const notActiveLink = 'navbar__li';

  return (
    <nav className='navbar'>
      <p className='navbar__title'>
        <NavLink to='/'><strong>Freelancer</strong> portfolio</NavLink>
      </p>

      <ul className="navbar__list">
        <NavLink to='/' className={({isActive})=>  isActive? activeLink : notActiveLink}>Home</NavLink>

        <NavLink to='/skills' className={({isActive})=>  isActive? activeLink : notActiveLink}>Skills</NavLink>

        <NavLink to='/contacts' className={({isActive})=>  isActive? activeLink : notActiveLink}>Contacts</NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
