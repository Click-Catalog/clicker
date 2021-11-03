import React from 'react'
import WatchedCards from './WatchedCards'
import { useStore } from '../context/Provider';

export default function Watched(props) {
  // For each movie object in props.movies array, create a movieCard.
  const { watchedContext } = useStore();
  const { watched, watchedDispatch } = watchedContext;

  console.log('watched ', watched)
  
  const movieCardsArray = [];
  for (let i = 0; i < watched.length; i++) {
    movieCardsArray.push(
    < WatchedCards 
      key={i} 
      id={watched[i].id} 
      cardData={watched[i]} 
    />)
  }
  return (
    <div>
      {movieCardsArray}
    </div>
  )
}
