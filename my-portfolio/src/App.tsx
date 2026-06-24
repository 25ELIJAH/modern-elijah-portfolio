import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Ticker from './sections/Ticker';
import About from './sections/About';
import Work from './sections/Work';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import './styles/globals.css';

export default function App() {
  return (
    <div style={{ background: '#0c0c0c', color: '#f2f2f2', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
