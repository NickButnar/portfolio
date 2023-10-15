import React from 'react';
// import CV from 'public/CV.pdf';

const Header = () => {
  return (
    <div className='header'>
      <h1>Hi, my name is <span className='text-[#5C62EC]'>Nikita</span></h1>
      <p className='header__subtitle'>a frontend developer</p>
      <p className='header__desc'>with passion for learning and creating.</p>
      {/* FIXME  Cannot download PDF. Catching error*/}
      {/* <a href={CV} download='Download CV' target='_blank' rel="noreferrer"> */}
        <button className='btn btn-primary mt-10'>Download CV</button>
      {/* </a> */}
    </div>
  );
}

export default Header;
