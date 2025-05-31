import { useState, useEffect } from 'react';
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Loader from './pages/Loader';
import Cursor from './pages/Cursor';
import Experience from './pages/Experience';
import AchievementsCertifications from './pages/Acheivments';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="app">
          <Cursor />
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <AchievementsCertifications/>
          <Contact />
         
        </div>
      )}
    </>
  );
}

export default App;

