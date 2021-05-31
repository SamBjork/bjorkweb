import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>Om Oss</h2>
            <Link to='/sign-up'>Hur vi arbetar</Link>
            <Link to='/'>Referenser</Link>
            <Link to='/'>Villkor</Link>
          </div> */}
          <div class='footer-link-items'>
            <h2>Kontakta Oss</h2>
            <div className="footer-subinfo">
              <p>blomberg@mbitgbg.se
              <br />
                <div style={{ marginBottom: 10 }} />
                +46 707 123 288</p>
              <p>Anders Carlssons Gata 7
              <br />
                <div style={{ marginBottom: 10 }} />
                41755 Göteborg</p>
            </div>
          </div>
          {/* <div class='footer-link-items'>
            <h2>Historia</h2>
            <Link to='/'>Hur det började</Link>
            <Link to='/'>Vägen fram</Link>
            <Link to='/'>Ekonomi</Link>
          </div> */}
        </div>
      </div>
      {/* <div class='footer-wrap'> */}
      {/* <div class='footer-logo'>
          <Link to='/' className='social-logo'>
            MBIT
              <i class='fab fa-typo3' />
          </Link>
        </div> */}
      <small class='website-rights'>MBIT i Göteborg AB © 2020</small>
      {/* <div class='social-icons'>
          <Link
            class='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'
          >
            <i class='fab fa-facebook-f' />
          </Link>
          <Link
            class='social-icon-link instagram'
            to='/'
            target='_blank'
            aria-label='Instagram'
          >
            <i class='fab fa-instagram' />
          </Link>
          <Link
            class='social-icon-link youtube'
            to='/'
            target='_blank'
            aria-label='Youtube'
          >
            <i class='fab fa-youtube' />
          </Link>
          <Link
            class='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='Twitter'
          >
            <i class='fab fa-twitter' />
          </Link>
          <Link
            class='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <i class='fab fa-linkedin' />
          </Link>
        </div> */}
    </div >
  );
}

export default Footer;
