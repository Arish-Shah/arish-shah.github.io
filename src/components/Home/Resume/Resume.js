import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Resume.module.css';

function Resume() {
  return (
    <div className={styles.Resume}>
      <div className={styles.container}>
        <button className={styles.button}>Resume.pdf</button>
        <div className={styles.contact}>
          <h2>Want to get in touch? </h2>
          <h3>Check the <Link to="/contact">Contact</Link> page&nbsp;
          <span>
              or write me at&nbsp;
            <a href="mailto:arish0246@gmail.com">arish0246@gmail.com</a>.
            </span>
          </h3>
        </div>
      </div>
    </div >
  );
}

export default Resume;