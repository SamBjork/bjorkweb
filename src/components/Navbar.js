import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      
      
    });
    setClick(false);
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={scrollToTop}>
            MBIT
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={scrollToTop}>
                Hem
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/customers'
                className='nav-links'
                onClick={scrollToTop}
              >
                Kunder
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={scrollToTop}
              >
                Produkter
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={scrollToTop}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
