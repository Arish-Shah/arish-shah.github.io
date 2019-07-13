import React, { useState } from 'react';
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
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/" onClick={handleTheme}>
            <span role="img" aria-labelledby="Theme">
              {theme === 'dark' ? ' ☀️' : ' 🌙'}
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default TopBar;