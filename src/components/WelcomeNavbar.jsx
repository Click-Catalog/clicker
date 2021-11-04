import React from 'react';
import router from 'next/router';
import styles from '../styles/WelcomeNavbar.module.css';

export default function WelcomeNavbar() {
  const logOut = () => {
    fetch('/api/logout').then(() => router.replace('/'));
  }
  return (
    <div className={styles.header}>
      <h1 className={styles.headerText}>Hello, YoYo!</h1>
      <h1>Click'r</h1>
      <button onClick={logOut} className={styles.logoutButton}>Logout</button>
    </div>
  )
}
