import React from 'react';
import styles from '../styles/WelcomeNavbar.module.css';

export default function WelcomeNavbar() {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerText}>Hello, YoYo!</h1>
      <h1>Click'r</h1>
      <button className={styles.logoutButton}>Logout</button>
    </div>
  )
}
