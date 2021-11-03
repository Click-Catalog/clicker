import React, { useState, useEffect } from 'react';
import MovieGeneratorPanel from './MovieGeneratorPanel';
import MovieDisplayContainer from './MovieDisplayContainer';
import WelcomeNavbar from './WelcomeNavbar';

export default function MovieContainer(props) {
	const [movies, setMovies] = useState([]);

	// set hook for movieCard state
	// pass function down to movieGeneratorPanel
	// pass the hook down to movieDisplayContainer

	return (
		<div>
			<WelcomeNavbar />
			<MovieGeneratorPanel setMovies={setMovies} movies={movies} />
			<MovieDisplayContainer movies={movies} />
		</div>
	);
}
