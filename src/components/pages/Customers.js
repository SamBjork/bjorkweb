import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';

export default function Customers() {
  return (
    <>
      <div className='customers'>
        <h1 className="title">
          Kunder
        </h1>
      </div>
      
      <div className="text-field">
        <h2 className="sub-title customer-sub">
          Dessa är några av våra kunder:
        </h2>
        <div className="customer-info">
          <ul className="customer-info-list">
            <li>
              
        
            </li>
            <li className="customer-info-list-item">
              <img src={'../images/mälare.png'}></img>
            </li>
            <li className="customer-info-list-item">
              <img src={'../images/fiskebylogo.png'}></img>
            </li>
            <li className="customer-info-list-item">
              <img src={'../images/greyconlogo.png'}></img>
            </li>
          </ul>

        </div>
      </div>
    </>
  )
}
