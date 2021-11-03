import React from 'react';
import Login from './Login';
import MovieContainer from './MovieContainer';
// import { useStore } from '../context/Provider';

export default function MainContainer( ) {
  
  // const { mustWatchContext, interestedContext, watchedContext } = useStore();
  // const { mustWatch, mustWatchDispatch } = mustWatchContext;
  // const { interested, interestedDispatch } = interestedContext;
  // const { watched, watchedDispatch } = watchedContext;
  // console.log('mustWatchContext: ' + mustWatchContext);
  return (
    <div>
      {/* < Login /> */}
      < MovieContainer />
    </div>
  )
}