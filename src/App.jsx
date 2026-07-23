import React from 'react';
import { HeaderHero } from './components/HeaderHero';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Terminal, Code, Cpu, Mail } from 'lucide-react';
import './App.css';

export function App() {
  return (
    <div className="portfolio-app">
      {/* Sticky Retro Terminal Navigation Bar */}
      <header className="sticky-nav-bar">
        <div className="container nav-container">
          <a href="#" className="nav-logo">
            <Terminal size={18} className="logo-icon" />
            <span className="logo-text">ALEX_MORGAN // DEV_PORTFOLIO</span>
          </a>

          <nav className="nav-links">
            <a href="#" className="nav-item active">
              <Code size={14} /> ~/ Hero.ext
            </a>
            <a href="#projects" className="nav-item">
              <Cpu size={14} /> ~/ Projects.md
            </a>
            <a href="#contact" className="nav-item">
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
