import React from 'react';
import MovieCards from '../components/MovieCards';
// import styles from '../styles/generated-movie-display.module.css';

export default function GeneratedMovieDisplay(props) {
	// For each movie object in props.movies array, create a movieCard.
	const movieCardsArray = [];
	for (let i = 0; i < props.movies.length; i += 1) {
		movieCardsArray.push(
			<MovieCards
				key={props.movies[i].id}
				id={props.movies[i].id}
				cardData={props.movies[i]}
			/>
		);
	}
	return <div>{movieCardsArray}</div>;
}
