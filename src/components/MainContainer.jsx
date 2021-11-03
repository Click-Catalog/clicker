import React from 'react';
import Login from './Login';
import MovieContainer from './MovieContainer';
import styles from '../styles/MainContainer.module.css'

export default function MainContainer( ) {
  return (
    <div className={styles.container}>
      {/* < Login /> */}
      < MovieContainer />
    </div>
  )
}