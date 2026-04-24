import { useState, useEffect } from 'react';
import { profile, stats, skills, researchAreas, publications, projects, education, experience, awards } from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function ScrollTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <button
      className={`scroll-top ${visible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      id="scroll-to-top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}

export default function App() {
  // All data is static — no API calls, no loading, no errors.
  // To update content, edit src/data.js directly.
  return (
    <>
      <Navbar />
      <main>
        <Hero profile={profile} stats={stats} />
        <About profile={profile} skills={skills} researchAreas={researchAreas} />
        <Publications publications={publications} />
        <Projects projects={projects} />
        <Timeline education={education} experience={experience} />
        <Awards awards={awards} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
      <ScrollTop />
    </>
  );
}
