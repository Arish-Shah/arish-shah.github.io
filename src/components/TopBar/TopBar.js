import React, { useState } from 'react';
import { url, twitterUrl } from '../../URL';
import { NavLink } from 'react-router-dom';
import styles from './TopBar.module.css';

function TopBar() {
  const [theme, setTheme] = useState('dark');

  const handleTheme = () => {
    const html = document.querySelector('html');
    html.classList.toggle('dark');
    html.classList.toggle('light');
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <div className={styles.TopBar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <NavLink to="/">a</NavLink>
        </div>
        <div className={styles.links}>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <button onClick={handleTheme}>
            <span role="img" aria-labelledby="Theme">
              {theme === 'dark' ? ' ☀️' : ' 🌙'}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopBar;