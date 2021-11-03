import React, { useState, useEffect } from 'react';
import MovieGeneratorPanel from './MovieGeneratorPanel';
import MovieDisplayContainer from './MovieDisplayContainer';
import WelcomeNavbar from './WelcomeNavbar';
import styles from '../styles/MovieContainer.module.css';

export default function MovieContainer(props) {
	const [movies, setMovies] = useState([]);
	const [viewType, setViewType] = useState('GeneratedMovieDisplay');

	// set hook for movieCard state
	// pass function down to movieGeneratorPanel
	// pass the hook down to movieDisplayContainer

	return (
		<div>
			<WelcomeNavbar />
			<div className={styles.container}>
				<MovieGeneratorPanel
					setViewType={setViewType}
					setMovies={setMovies}
					movies={movies}
				/>
				<MovieDisplayContainer
					viewType={viewType}
					setViewType={setViewType}
					movies={movies}
				/>
			</div>
		</div>
	);
}
