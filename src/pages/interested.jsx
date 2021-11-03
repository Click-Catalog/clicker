import React from 'react'
import MovieCards from '../components/MovieCards'

export default function Interested(props) {
  // For each movie object in props.movies array, create a movieCard.
  const movieCardsArray = [];
  for (let i = 0; i < props.interestedMovies.length; i += 1) {
    movieCardsArray.push(
    < MovieCards 
      key={i} 
      cardData={props.interestedMovies[i]} 
      setMustWatchMovies={props.setMustWatchMovies} 
      setInterestedMovies={props.setInterestedMovies} 
      setWatchedMovies={props.setWatchedMovies}
    />)
  }

  return (
    <div>
      {movieCardsArray}
    </div>
  )
}
