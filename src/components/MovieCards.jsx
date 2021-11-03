import React, { useState } from 'react';
import { useStore } from '../context/Provider';
import styles from '../styles/MovieCards.module.css';

export default function MovieCards(props) {
	const { mustWatchContext, interestedContext, watchedContext } = useStore();
	const { mustWatch, mustWatchDispatch } = mustWatchContext;
	const { interested, interestedDispatch } = interestedContext;
	const { watched, watchedDispatch } = watchedContext;

	console.log('mustWatch: ' + mustWatch);

	// Iterate through movieCard's data to display each detail in it's own <p>
	// Display image as well.
	const details = [];
	const responseCardDetails = [];

	const keys = Object.keys(props.cardData.details);

	for (let i = 0; i < keys.length; i++) {
		if (keys[i] === 'image') {
			responseCardDetails.push(
				<div className={styles.imgContainer}>
					<img width='250px' src={props.cardData.details[keys[i]]}></img>
				</div>
			);
		}
		if (
			keys[i] === 'Title' ||
			keys[i] === 'Year' ||
			keys[i] === 'Overview' ||
			keys[i] === 'Rating'
		) {
			details.push(
				<p>
					{keys[i]}: {props.cardData.details[keys[i]]}
				</p>
			);
		} else {
			responseCardDetails.push(
				<div className={styles.detailsContainer}>{details}</div>
			);
			details = [];
		}
	}

	const toggleMustWatch = (e) => {
		for (let i = 0; i < mustWatch.length; i++) {
			if (mustWatch[i].id === props.id) {
				return;
			}
		}
		mustWatchDispatch({
			type: 'addMustWatch',
			message: props.cardData,
		});
	};
	const toggleInterested = (e) => {
		for (let i = 0; i < interested.length; i++) {
			if (interested[i].id === props.id) {
				return;
			}
		}
		interestedDispatch({
			type: 'toggleInterested',
			message: props.cardData,
		});
	};
	const toggleWatched = (e) => {
		for (let i = 0; i < watched.length; i++) {
			if (watched[i].id === props.id) {
				return;
			}
		}
		watchedDispatch({
			type: 'toggleWatched',
			message: props.cardData,
		});
	};

	return (
		<div className={styles.cardContainer}>
			<span className={styles.detailImgContainer}>
				{responseCardDetails}
				{/* <button></button> */}
			</span>
			<div className={styles.buttonContainer}>
				<button className='must-watch' onClick={toggleMustWatch}>
					Must Watch
				</button>
				<button className='interested' onClick={toggleInterested}>
					Interested
				</button>
				<button className='watched' onClick={toggleWatched}>
					Watched
				</button>
			</div>
		</div>
	);
}
