import React from 'react'
import MovieCards from '../components/MovieCards'
import { mustWatch, toggleMustWatch } from '../components/MovieDisplayContainer'

export default function MustWatchPage(props) {
  // For each movie object in props.movies array, create a movieCard.
  console.log(mustWatch);

  // const movieCardsArray = [];
  // for (let i = 0; i < props.mustWatchMovies.length; i += 1) {
  //   movieCardsArray.push(
  //   < MovieCards 
  //     key={i} 
  //     cardData={props.mustWatchMovies[i]} 
  //     // setMustWatchMovies={props.setMustWatchMovies} 
  //     // setInterestedMovies={props.setInterestedMovies} 
  //     // setWatchedMovies={props.setWatchedMovies}
  //   />)
  // }
  return (
    <div>
      {/* < MovieCards setMustWatchMovies={setMustWatchMovies} /> */}
      {/* {movieCardsArray} */}
    </div>
  )
}
