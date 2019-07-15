import React from 'react';
import styles from './Skills.module.css';

function Skills() {
  const skills = [
    { type: 'Languages', lang: 'Java, C, C++, JavaScript(ES5 + ES6), Python, PHP, HTML, CSS, SASS' },
    { type: 'Front-End Frameworks', lang: 'React, Redux, Svelte' },
    { type: 'Back-End', lang: 'Node.js, Express, PHP, MySQL, Firebase Realtime Database' },
    { type: 'Technologies', lang: 'Git/GitHub, npm, JSON, Firebase, BootStrap' }
  ]

  return (
    <div className={styles.Skills}>
      <div className={styles.container}>
        <h2>Skills</h2>
        <ul className={styles.ul}>
          {skills.map(({ type, lang }, index) => (
            <Skill type={type} lang={lang} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Skill({ type, lang }) {
  return (
    <li className={styles.li}>
      <h3>{type}:</h3>
      <div>{lang}</div>
    </li>
  );
}

export default Skills;