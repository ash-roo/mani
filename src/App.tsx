import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Founder from './components/Founder-Venture';
import Education from './components/Education';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      <main>
        <Summary />
        <Skills />
        <Projects />
        <Experience />
        <Founder />
        <Education />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;