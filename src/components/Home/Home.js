import React from 'react';

import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Resume from './Resume/Resume';

import styles from './Home.module.css';

function Home() {
  return (
    <main className={styles.Home}>
      <div className={styles.container}>
        <Intro />
        <Projects />
        <hr align="left" />
        <Skills />
        <hr align="left" />
        <Resume />
      </div>
    </main>
  );
}

export default Home;