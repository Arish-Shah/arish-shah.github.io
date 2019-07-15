import React from 'react';
import styles from './Project.module.css';

function Project({ title, description, img, link }) {
  const handleClick = () => {
    window.location.href = link;
  }

  return (
    <div className={styles.Project} onClick={handleClick}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.infoContainer}>
          <h2>{title}</h2>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Project;