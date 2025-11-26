import React from 'react';
import Navbar from './components/Navbar';
import PortfolioPremium from './components/PortfolioPremium';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App(){
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PortfolioPremium />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}