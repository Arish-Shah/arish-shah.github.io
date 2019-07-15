import React from 'react';
import Project from './Project/Project';
import { url } from '../../../URL';
import react from '../../../assets/react.png';
import js from '../../../assets/js.png';
import java from '../../../assets/java.png';
import php from '../../../assets/php.png';
import html from '../../../assets/html.png';

function Projects() {
  const projects = [
    { title: 'Hooks CRUD App', desc: 'Application supporting Create, Read, Update and Delete. Built using React Hooks', img: react, link: url + 'hooks-crud-app' },
    { title: 'Burger Builder', desc: 'A dynamic burger builder app built using React, Redux and Firebase', img: react, link: url + 'react-burger-app' },
    { title: 'Calculator', desc: 'Calculator app built using React which performs all the basic operations', img: react, link: url + 'calculator' },
    { title: 'Enigma', desc: 'Encryption/Decryption software built as a part of Mini Project.', img: java, link: url + 'enigma' },
    { title: 'Remainder App', desc: 'Calendar app to keep an account of upcoming events', img: js, link: url + 'remainder-app' },
    { title: 'OpenLeaks', desc: 'Website for posting sensitive information anonymously', img: php, link: 'OpenLeaks' },
    { title: 'AgroFork', desc: 'Web application to fork traceability of farm produce by generating a QR Code', img: php, link: 'agrofork-alpha' },
    { title: 'MJ Hack-Revolution 2019', desc: 'Website created to register candidates for Hackathon', img: html, link: 'mjHack2019' }
  ];

  return (
    <React.Fragment>
      <div style={{ paddingTop: '30px' }}>
        {projects.map(({ title, desc, img, link }, index) =>
          <Project key={index} title={title} description={desc} img={img} link={link} />
        )}
      </div>
    </React.Fragment>
  );
}

export default Projects;