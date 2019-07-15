import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.NotFound}>
      <div className={styles.container}>
        <h1>Oh no! You just got lost <span role="img" aria-labelledby="Oh">😱</span></h1>
        <h2>Don't worry I got you! <Link to="/">Click here</Link>  to go back home.</h2>
      </div>
    </div>
  )
}

export default NotFound;