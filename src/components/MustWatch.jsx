import React from 'react'
import MustWatchCards from './MustWatchCards'
import { useStore } from '../context/Provider';

export default function MustWatch(props) {
  // For each movie object in props.movies array, create a movieCard.
  const { mustWatchContext } = useStore();
  const { mustWatch, mustWatchDispatch } = mustWatchContext;

  console.log('mustWatch ', mustWatch)
  
  const movieCardsArray = [];
  for (let i = 0; i < mustWatch.length; i++) {
    movieCardsArray.push(
    < MustWatchCards 
      key={i} 
      id={mustWatch[i].id} 
      cardData={mustWatch[i]} 
    />)
  }
  return (
    <div>
      {movieCardsArray}
    </div>
  )
}
