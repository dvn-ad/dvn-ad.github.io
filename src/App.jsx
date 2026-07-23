import React, { useState, useEffect } from 'react';
import { HeaderHero } from './components/HeaderHero';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Terminal, Code, Cpu, Mail } from 'lucide-react';
import './App.css';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'projects', 'contact'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app">
      {/* Sticky Retro Terminal Navigation Bar */}
      <header className="sticky-nav-bar">
        <div className="container nav-container">
          <a 
            href="#hero" 
            className="nav-logo"
            onClick={(e) => handleNavClick(e, 'hero')}
          >
            <Terminal size={18} className="logo-icon" />
            <span className="logo-text">DAVIN_ADIPUTRA // DEV_PORTFOLIO</span>
          </a>

          <nav className="nav-links">
            <a 
              href="#hero" 
              className={`nav-item ${activeSection === 'hero' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'hero')}
            >
              <Code size={14} /> ~/ Hero.ext
            </a>
            <a 
              href="#projects" 
              className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'projects')}
            >
              <Cpu size={14} /> ~/ Projects.md
            </a>
            <a 
              href="#contact" 
              className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              <Mail size={14} /> ~/ Contact.sh
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Sections */}
      <main>
        <HeaderHero />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
