import React from 'react';
import './ProductCards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h2>Vad vi jobbar med just nu:</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>


            <CardItem
              src='images/plc.jpg'
              text='PIOT - Process/Produktion integration'
              label='Projekt'
              path='/primaryproduct'
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/gps.jpg'
              text='Forna GPS projekt'
              label='Lite på hyllan'
              path='/services'
            />
            <CardItem
              src='images/elektronik.jpg'
              text='MBIT har en liten elektronikverkstad på kontoret'
              label='Elektronik'
              path='/sign-up'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
