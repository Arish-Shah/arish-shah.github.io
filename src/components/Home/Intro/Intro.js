import React from 'react';
import styles from './Intro.module.css';

function Intro() {
  const handleClick = () => {
    window.innerWidth < 600 ?
      window.scrollTo({ top: 800, left: 0, behavior: 'smooth' }) :
      window.scrollTo({ top: 655, left: 0, behavior: 'smooth' });
  }

  return (
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
      <div className={styles.info} onClick={handleClick}>
        See what I worked on
      </div>
    </div>
  );
}

export default Intro;