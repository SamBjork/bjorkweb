import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Urval av pågående projekt:</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/fiskeby.jpg'
                            text='System för truckar på Fiskebys Pappersbruk'
                            label='Utvecklare'
                            path='/primaryproject'
                        />
                        <CardItem
                            src='images/plc.jpg'
                            text='PIOT - Process/Produktion integration'
                            label='Produkt'
                            path='/primaryproduct'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
