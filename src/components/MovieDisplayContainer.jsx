import React from 'react'
import Navbar from './Navbar'
import GeneratedMovieDisplay from '../pages/generated-movie-display'
import MustWatch from '../pages/must-watch'
import Interested from '../pages/interested'
import Watched from '../pages/watched'

export default function MovieDisplayContainer() {
  return (
    <div>
      <h1>Navbar</h1>
      < Navbar />
      <h1>GeneratedMovieDisplay</h1>
      < GeneratedMovieDisplay />
      <h1>MustWatch</h1>
      < MustWatch />
      <h1>Interested</h1>
      < Interested />
      <h1>Watched</h1>
      < Watched />
    </div>
  )
}
