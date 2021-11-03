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
				<div>
					<img width='200px' src={props.cardData.details[keys[i]]}></img>
				</div>
			);
		}
		if (
			keys[i] === 'title' ||
			keys[i] === 'year' ||
			keys[i] === 'overview' ||
			keys[i] === 'rating'
		) {
			details.push(
				<p className={keys[i]}>
					{keys[i]}: {props.cardData.details[keys[i]]}
				</p>
			);
		} else {
			responseCardDetails.push(<div>{details}</div>);
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
			if (mustWatch[i].id === props.id) {
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
			if (mustWatch[i].id === props.id) {
				return;
			}
		}
		watchedDispatch({
			type: 'toggleWatched',
			message: props.cardData,
		});
	};

	return (
		<div className={styles.container}>
			<div className={styles.detailsContainer}>
				{responseCardDetails}
				{/* <button></button> */}
			</div>
			<div>
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
