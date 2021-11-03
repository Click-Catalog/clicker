import React, { useState } from 'react'
import { useStore } from '../context/Provider';
  
export default function InterestedCards(props) {
  
  const { mustWatchContext, interestedContext, watchedContext } = useStore();
  const { mustWatch, mustWatchDispatch } = mustWatchContext;
  const { interested, interestedDispatch } = interestedContext;
  const { watched, watchedDispatch } = watchedContext;

  console.log('interested: ' + interested);

  // Iterate through movieCard's data to display each detail in it's own <p>
  // Display image as well.
  const responseCardDetails = [];

  const keys = Object.keys(props.cardData.details);

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === 'image') {
      responseCardDetails.push(
        <img width="200px" src={props.cardData.details[keys[i]]}></img>
      )
    } else {
      responseCardDetails.push(
        <p className={keys[i]} >{keys[i]} : {props.cardData.details[keys[i]]}</p>
        )
    }
  }

  const removeInterested = (e) => {
    return interestedDispatch({
      type: 'removeInterested', 
      message: props.cardData.id,
    });
  }
     
  return (
    <div>
      <span>
        {responseCardDetails}
        {/* <button></button> */}
      </span>
      <div>
        <button className='remove-interested' onClick={removeInterested}>Remove Interested</button>
      </div>
    </div>
  );
}
