import React from 'react';
import styles from '../styles/Navbar.module.css';

// link components

export default function Navbar({ setViewType }) {
	return (
		<div className={styles.container}>
			<span onClick={() => setViewType('MustWatch')}>Must Watch</span>
			<span onClick={() => setViewType('Interested')}>Interested</span>
			<span onClick={() => setViewType('Watched')}>Watched</span>
		</div>
	);
}
