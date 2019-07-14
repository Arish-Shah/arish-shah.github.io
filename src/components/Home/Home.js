import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.container}>
        <h1 className={styles.intro}>
          <div>
            Hi!&nbsp;
            <span role="img" aria-labelledby="Wave" className="wave">👋</span>
          </div>
          <div>I'm Arish Rahil Shah.</div>
          <br />
          <div>
            I'm a Computer Science Engineering student and Web enthusiast,
            currently working on JS.
          </div>
          <div>
            <span role="img" aria-labelledby="Icons">🏙️️ ⚛️️ 👨‍💻 🚀</span>
          </div>
        </h1>
        <div className={styles.info}>
          See what I worked on
        </div>
      </div>
    </div>
  );
}

export default Home;