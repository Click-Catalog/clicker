import React from 'react'

export default function MovieGeneratorPanel() {

  const movieQuery = (select) => {
    const queryObj = {};

    queryObj.genre = document.getElementById('genre').value
    queryObj.year = document.getElementById('year').value;
    queryObj.rating = document.getElementById('rating').value;
    console.log(queryObj);

    // fetch request to send selected options to backend for API
    // query as an object and reset movies state for display
    fetch('/api/movie', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(queryObj)
    })
      .then((res) => res.json())
      .then((res) => props.setMovies(res)) // props or no props?
  }


  return (
    <div className="movieGeneratorPanel">
      {/* make these drop down menus dynamic */}
      <div>
        <label htmlFor='genre'>Genre: </label>
        <select name='genre' id='genre'>
          <option value='Sci-Fi'>Sci-Fi</option>
          <option value='Fantasy'>Fantasy</option>
          <option value='Drama'>Drama</option>
          <option value='Comedy'>Comedy</option>
          <option value='Horror'>Horror</option>
        </select>
      </div>

      <div>
        <label htmlFor='year'>Year: </label>
        <select name='year' id='year'>
          <option value='2020'>2020s</option>
          <option value='2010'>2010s</option>
          <option value='2000'>2000s</option>
          <option value='1990'>1990s</option>
          <option value='1980'>1980s</option>
          <option value='1970'>1970s</option>
          <option value='1960'>1960s</option>
        </select>
      </div>

      <div>
        <label htmlFor='rating'> Rating: </label>
        <select name='rating' id='rating'>
          <option value='ninety'>90%</option>
          <option value='eighty'>80%</option>
          <option value='seventy'>70%</option>
          <option value='sixty'>60%</option>
          <option value='fifty'>50%</option>
          <option value='forty'>40%</option>
          <option value='thirty'>30%</option>
          <option value='twenty'>20%</option>
          <option value='ten'>10%</option>
          <option value='zero'>0%</option>
        </select>
      </div>

      <button className='generateMoviesButton' onClick={movieQuery}>Generate Movies</button>
    </div>
  );
}
