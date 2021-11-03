import React, { useState } from 'react';
import Login from './Login';
import MovieContainer from './MovieContainer';

import styles from '../styles/MainContainer.module.css';

// import { useStore } from '../context/Provider';

<<<<<<< HEAD
export default function MainContainer() {
	// const { mustWatchContext, interestedContext, watchedContext } = useStore();
	// const { mustWatch, mustWatchDispatch } = mustWatchContext;
	// const { interested, interestedDispatch } = interestedContext;
	// const { watched, watchedDispatch } = watchedContext;
	// console.log('mustWatchContext: ' + mustWatchContext);
	return (
		<div className={styles.container}>
			{/* < Login /> */}
			<MovieContainer />
		</div>
	);
}
=======
export default function MainContainer( ) {

  // const [user, logIn] = useState('');

  
  // const { mustWatchContext, interestedContext, watchedContext } = useStore();
  // const { mustWatch, mustWatchDispatch } = mustWatchContext;
  // const { interested, interestedDispatch } = interestedContext;
  // const { watched, watchedDispatch } = watchedContext;
  // console.log('mustWatchContext: ' + mustWatchContext);
  return (
    <div className={styles.container}>
      < Login />
      {/* < MovieContainer /> */}
    </div>
  )
}
>>>>>>> ae6e85b33d343f358e7a43f8a6ae6246aee3f3ea
