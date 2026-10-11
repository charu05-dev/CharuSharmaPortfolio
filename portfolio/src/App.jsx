import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-sky text-carbon selection:bg-sunburst selection:text-carbon">
      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Main Content with Slush Full-Width Color Bands */}
      <main>
        {/* Section 1: Hero (#dceeff Sky Wash) */}
        <Hero />

        {/* Section 2: About (#ffffff Paper White) */}
        <About />

        {/* Section 3: Tech Stack (#e9e9e9 Soft Mist) */}
        <TechStack />

        {/* Section 4: Projects (#ffffff Paper White) */}
        <Projects />

        {/* Section 5: Experience (#dceeff Sky Wash) */}
        <Experience />

        {/* Contact (#dceeff Sky Wash) */}
        <Contact onTriggerToast={showToast} />
      </main>

      {/* Section 8: Footer (#000000 Carbon Black) */}
      <Footer />

      {/* Global Tactile Toast */}
      <Toast message={toastMessage} show={!!toastMessage} />
    </div>
  );
}
