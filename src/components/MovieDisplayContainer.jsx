import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import GeneratedMovieDisplay from '../pages/generated-movie-display'
import MustWatch from '../pages/must-watch'
import Interested from '../pages/interested'
import Watched from '../pages/watched'

export default function MovieDisplayContainer(props) {
  
  const [mustWatchMovies, setMustWatchMovies] = useState([]);
  const [interestedMovies, setInterestedMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  // iterate thru props.movies array of object
  // each object should render its own movieCard
  // each movieCard should display every key/value in its object
  console.log(props.movies);
  return (
    <div>
      <Navbar />
      <GeneratedMovieDisplay 
        movies={props.movies} 
        setMustWatchMovies={setMustWatchMovies} 
        setInterestedMovies={setInterestedMovies} 
        setWatchedMovies={setWatchedMovies}
      />
      < MustWatch mustWatchMovies={mustWatchMovies}/>
      < Interested interestedMovies={interestedMovies}/>
      < Watched watchedMovies={watchedMovies}/>
    </div>
  );
}
