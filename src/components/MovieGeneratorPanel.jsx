import React from 'react';
import genreList from '../models/genreList';

export default function MovieGeneratorPanel(props) {
	// adding genres to
	const genres = [];
	Object.keys(genreList).forEach((key) => {
		genres.push(key);
	});

	const movieQuery = (select) => {
		const queryObj = {};

		queryObj.genre = document.getElementById('genre').value;
		queryObj.year = document.getElementById('year').value;
		queryObj.rating = document.getElementById('rating').value;
		// console.log(queryObj);

		// fetch request to send selected options to backend for API
		// query as an object and reset movies state for display
		fetch('/api/movie', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(queryObj),
		})
			.then((res) => res.json())
			.then((res) => props.setMovies(res));
		// .then(console.log(props.movies)); // props or no props?
		// .then(console.log(`This is currently stored in state: ${props.movies}`));
	};

	return (
		<div className='movieGeneratorPanel'>
			{/* make these drop down menus dynamic */}
			<div>
				<label htmlFor='genre'>Genre: </label>
				<select name='genre' id='genre'>
					{genres.map((genre) => {
						// console.log(genre);
						return <option value={genreList[genre]}>{genre}</option>;
					})}
				</select>
			</div>

			<div>
				<label htmlFor='year'>Year: </label>
				<input id='year' type='text'></input>
				{/* <select name='year' id='year'>
					<option value='2020'>2020s</option>
					<option value='2010'>2010s</option>
					<option value='2000'>2000s</option>
					<option value='1990'>1990s</option>
					<option value='1980'>1980s</option>
					<option value='1970'>1970s</option>
					<option value='1960'>1960s</option>
				</select> */}
			</div>

			<div>
				<label htmlFor='rating'> Rating: </label>
				<select name='rating' id='rating'>
					<option value='10'>10</option>
					<option value='9'>9</option>
					<option value='8'>8</option>
					<option value='7'>7</option>
					<option value='6'>6</option>
					<option value='5'>5</option>
					<option value='4'>4</option>
					<option value='3'>3</option>
					<option value='2'>2</option>
					<option value='1'>1</option>
				</select>
			</div>

			<button className='generateMoviesButton' onClick={movieQuery}>
				Generate Movies
			</button>
		</div>
	);
}
