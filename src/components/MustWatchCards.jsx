import React, { useState } from 'react';
import { useStore } from '../context/Provider';
import styles from '../styles/MovieCards.module.css';

export default function MustWatchCards(props) {
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
	// const responseCardDetails = [];

	// const keys = Object.keys(props.cardData.details);

	// for (let i = 0; i < keys.length; i++) {
	// 	if (keys[i] === 'image') {
	// 		responseCardDetails.push(
	// 			<img width='200px' src={props.cardData.details[keys[i]]}></img>
	// 		);
	// 	} else {
	// 		responseCardDetails.push(
	// 			<p className={keys[i]}>
	// 				{keys[i]} : {props.cardData.details[keys[i]]}
	// 			</p>
	// 		);
	// 	}
	// }

	const removeMustWatch = (e) => {
		return mustWatchDispatch({
			type: 'removeMustWatch',
			message: props.cardData.id,
		});
	};

	return (
		<div className={styles.cardContainer}>
			<span className={styles.detailImgContainer}>
				{responseCardDetails}
				{/* <button></button> */}
			</span>
			<div className={styles.buttonContainer}>
				<button className='remove-must-watch' onClick={removeMustWatch}>
					Remove Must Watch
				</button>
			</div>
		</div>
	);
}
