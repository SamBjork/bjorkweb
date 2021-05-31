import React from 'react';
import './Cards.css';
import InfoCardItem from './InfoCardItem';

function InfoCards() {
  return (
    
    <div className='cards'>
      <h1>Kontakt oss här:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <InfoCardItem
              src=''
              firstrowtext='Michell Blomberg'
              secondrowtext='Telefon: +46 707 123 288'
              thirdrowtext='Email: michellblomberg@gmail.com'
              label='CEO'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
