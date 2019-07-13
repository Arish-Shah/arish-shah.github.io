import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.container}>
        <h1 className={styles.intro}>
          <div>
            Hi!&nbsp;
            <span role="img" aria-labelledby="Wave">👋</span>
          </div>
          <div>I'm Arish Rahil Shah.</div>
          <br />
          <div>I like to work with everything related to JavaScript.</div>
          <div>
            <span role="img" aria-labelledby="Icons">🌁 👨‍💻 🚀 🐳</span>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Home;