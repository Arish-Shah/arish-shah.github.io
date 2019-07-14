import React from 'react';
import styles from './BottomBar.module.css';

function BottomBar() {
  return (
    <div className={styles.BottomBar}>
      <div className={styles.container}>
        <div className={styles.text}>
          2019, Made by Arish Rahil Shah
        </div>
        <div className={styles.brand}>
          a
        </div>
      </div>
    </div>
  );
}

export default BottomBar;