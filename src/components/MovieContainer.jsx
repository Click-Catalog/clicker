import React, { useState, useEffect } from 'react';
import MovieGeneratorPanel from './MovieGeneratorPanel'
import MovieDisplayContainer from './MovieDisplayContainer'
import WelcomeNavbar from './WelcomeNavbar'

export default function MovieContainer(props) {
  const [movies, setMovies] = useState([
    { 
    Title: 'Dune', 
    Year: '2021', 
    Director: 'Dennis Villeneuve' 
    }, { 
      Title: 'Titanic', 
      Year: '1997', 
      Director: 'James Cameron' 
    }, { 
      Title: 'Alien', 
      Year: '1979', 
      Director: 'Ridley Scott' 
    }]);

  // set hook for movieCard state
    // pass function down to movieGeneratorPanel
    // pass the hook down to movieDisplayContainer

  return (
    <div>
      <WelcomeNavbar />
      <MovieGeneratorPanel setMovies={ setMovies } />
      <MovieDisplayContainer movies={ movies }/>
    </div>
  )
}
 