import React from 'react'
import InterestedCards from './InterestedCards'
import { useStore } from '../context/Provider';

export default function Interested(props) {
  // For each movie object in props.movies array, create a movieCard.
  const { interestedContext } = useStore();
  const { interested, interestedDispatch } = interestedContext;

  console.log('interested ', interested)
  
  const movieCardsArray = [];
  for (let i = 0; i < interested.length; i++) {
    movieCardsArray.push(
    < InterestedCards 
      key={i} 
      id={interested[i].id} 
      cardData={interested[i]} 
    />)
  }
  return (
    <div>
      {movieCardsArray}
    </div>
  )
}
