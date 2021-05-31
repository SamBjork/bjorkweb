import React from 'react';
import '../../App.css';
import InfoCards from '../InfoCards';

export default function Contact() {
  return (
    <>
    <div className="container">
      <div className='contact'>
        <h1 className="title">
          Kontakt
        </h1>
      </div>
    </div>
    {/* ///Göra ett kort här i framtiden/// */}
      <div className="text-field">
        <div className="contact-info">
          <ul className="info-list">
            <li className="info-list-item">
              <h2>Michell Blomberg - CEO</h2>

            </li>
            <li className="info-list-item-text">
            <h3>+46 707123288</h3>
              <h3>blomberg@mbitgbg.se</h3>
            </li>
            <li className="info-list-item-text">
              <h2>Samuel Björkqvist - Utvecklare</h2>

            </li>
            <li className="info-list-item-text">
            <h3>+46 760818695</h3>
              <h3>samuel@mbitgbg.se</h3>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

