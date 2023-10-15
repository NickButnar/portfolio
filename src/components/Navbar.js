import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <p className='navbar__title'>
        <a href='home'><strong>Freelancer</strong> portfolio</a>
      </p>

      <ul className="navbar__list">
        <li className='navbar__li'>
          <a href='/projects'>Projects</a>
        </li>

        <li className='navbar__li'>
          <a href='/skills'>Skills</a>
        </li>

        <li className='navbar__li'>
          <a href='/contacts'>Contacts</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
