import React from 'react';
import genreList from '../models/genreList';
import styles from '../styles/MovieGeneratorPanel.module.css'

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
			// .then((res) => props.setMovies(res)); // props or no props?
		// .then(console.log(`This is currently stored in state: ${props.movies}`));
	};

	return (
		<div className={styles.container}>
			{/* make these drop down menus dynamic */}
			<div>
				{/* <label htmlFor='genre'></label> */}
				<select name='genre' className={styles.input}>
					<option value = '' id='genre'>Select By Genre</option>
					{genres.map((genre) => {
						// console.log(genre);
						return <option value={genreList[genre]}>{genre}</option>;
					})}
				</select>
			</div>

			<div>
				{/* <label htmlFor='year'></label> */}
				<input className={styles.input}  id='year' placeholder = 'Select By Year' type="text"></input>
			</div>

			<div>
				{/* <label htmlFor='rating'> </label> */}
				<select name='rating' className={styles.input}>
					<option id="rating" value=''>Select By User Rating</option>
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

			<button className={styles.button} onClick={movieQuery}>
				Generate Movies
			</button>
		</div>
	);
}
