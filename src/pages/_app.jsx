import React from 'react';
import { GlobalProvider } from '../context/Provider';
import styles from '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<GlobalProvider>
			<Component {...pageProps} />
		</GlobalProvider>
	);
}

export default MyApp;
