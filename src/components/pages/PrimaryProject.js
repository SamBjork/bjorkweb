import React, {useState, useEffect} from 'react';
import '../../App.css';
import Cards from '../Cards';


export default function PrimaryProject() {
    useEffect(() => {
        // Update the document title using the browser API
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            
            
          });
      });
  return (
    <>
      <div className='primaryproject'>
        <h1 className="title">
        Fiskeby Board AB
        </h1>
      </div>
      <div className="text-field">
          
      </div>
      <div>
        <h2 className="margin-text">
          Vi utvecklar trucksystem och ger support för dessa
        </h2>
      </div>

    </>
  )
}
