import React, {useState, useEffect} from 'react';
import '../../App.css';

export default function PrimaryProduct() {
    useEffect(() => {
        // Update the document title using the browser API
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            
            
          });
      });
    return (
        <>
      <div className='primaryproduct'>
        <h1 className="title">
        PIOT
        </h1>
      </div>
      <div className="text-field">
          
      </div>
      <div>
        <h2 className="margin-text">
          PIOT är ett styrsystem som MBIT har utvecklat internt
        </h2>
      </div>

    </>
    )
}