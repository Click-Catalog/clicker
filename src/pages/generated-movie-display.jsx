import React from 'react'
import MovieCards from '../components/MovieCards'

export default function GeneratedMovieDisplay(props) {

  // For each movie object in props.movies array, create a movieCard.
  const movieCardsArray = [];
  for (let i = 0; i < props.movies.length; i += 1) {
    movieCardsArray.push(
    < MovieCards 
      key={i} 
      cardData={props.movies[i]} 
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
