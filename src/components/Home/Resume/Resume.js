import React from 'react';
import styles from './Resume.module.css';

function Resume() {
  return (
    <div className={styles.Resume}>
      <div className={styles.container}>
        <a href="/cv.pdf" target="_blank">
          <button className={styles.button}>Resume.pdf</button></a>
        <div className={styles.contact}>
          <h2>Want to get in touch? </h2>
          <h3>
            Write me at <a href="mailto:arish0246@gmail.com">arish0246@gmail.com</a>&nbsp;
            <span>
              or DM me on <a href="https://wa.me/918120360150">WhatsApp</a>.
            </span>
          </h3>
        </div>
      </div>
    </div >
  );
}

export default Resume;