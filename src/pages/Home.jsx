import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

export default function Home({ onOpenResume, onSelectProject }) {
  return (
    <>
      <Hero onOpenResume={onOpenResume} />
      <About />
      <Skills />
      <Projects onSelectProject={onSelectProject} />
      <Education />
      <Achievements />
      <Contact onOpenResume={onOpenResume} />
    </>
  );
}
