import React from 'react'
import MovieGeneratorPanel from './MovieGeneratorPanel'
import MovieDisplayContainer from './MovieDisplayContainer'

export default function MovieContainer() {
  return (
    <div>
      <h1>MovieGeneratorPanel</h1>
      <h1>MovieDisplayContainer</h1>
      <MovieGeneratorPanel />
      <MovieDisplayContainer />
    </div>
  )
}
