import React from 'react';
import router from 'next/router';
import styles from '../styles/Login.module.css';

export default function Login() {
	const userQueryLogIn = (select) => {
		const queryObj = {};

		queryObj.username = document.getElementById('username').value;
		queryObj.password = document.getElementById('password').value;

		// console.log('testing for username in query object to be sent to backend - ', queryObj.username, ' and the password - ', queryObj.password)

		fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(queryObj),
		}).then((res) => {
			console.log(res.status);
			if (res.status === 200) {
				router.replace('/dashboard');
				// props.logIn(res);
				// ^run from Main Container if we want the state to change the user after logging in
			} else return 'Not able to log in, try again or sign up.';
		});
	};

	const userQuerySignUp = (select) => {
		const queryObj = {};

		queryObj.username = document.getElementById('username').value;
		queryObj.password = document.getElementById('password').value;

		fetch('./api/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(queryObj),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.status === '200') {
					// props.logIn(res)
					console.log('logged in');
				} else return 'Not able to sign up. Please try again';
			});
	};

	return (
		<div className={styles.logInComp}>
			<input type='text' placeholder='username' id='username' required />
			<br />
			<input type='password' placeholder='password' id='password' required />
			<button onClick={userQueryLogIn} className={styles.logInButton}>
				Login
			</button>
			<button onClick={userQuerySignUp} className={styles.logInButton}>
				Sign Up
			</button>
		</div>
	);
}
