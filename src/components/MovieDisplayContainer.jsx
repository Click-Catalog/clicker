import React, { useState, useContext } from 'react';
import Navbar from './Navbar';
import GeneratedMovieDisplay from '../pages/generated-movie-display';
import MustWatch from '../pages/must-watch';
import Interested from '../pages/interested';
import Watched from '../pages/watched';
import styles from '../styles/MovieDisplayContainer.module.css'

export default function MovieDisplayContainer(props) {
	// iterate thru props.movies array of object
	// each object should render its own movieCard
	// each movieCard should display every key/value in its object
	return (
		<div className = {styles.container}>
			<Navbar 
				setViewType={props.setViewType}
			/>

			{props.viewType == 'GeneratedMovieDisplay' ? (
				<GeneratedMovieDisplay
					setViewType={props.setViewType}
					movies={props.movies}
				/>
			) : props.viewType == 'MustWatch' ? (
				<MustWatch />
			) : props.viewType == 'Interested' ? (
				<Interested />
			) : props.viewType == 'Watched' ? (
				<Watched />
			) : null}
		</div>
	);
}
