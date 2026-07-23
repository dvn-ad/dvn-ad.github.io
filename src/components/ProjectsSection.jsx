import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, ExternalLink, Layers, Smartphone, Terminal, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import './ProjectsSection.css';

export const ProjectsSection = () => {
  const { projects } = portfolioData;

  // Carousel State Management for Web Project 1
  const project1 = projects.find(p => p.id === 'project-1');
  const [p1ActiveSlide, setP1ActiveSlide] = useState(0);

  const nextP1Slide = () => {
    if (!project1?.screenshots) return;
    setP1ActiveSlide((prev) => (prev + 1) % project1.screenshots.length);
  };

  const prevP1Slide = () => {
    if (!project1?.screenshots) return;
    setP1ActiveSlide((prev) => (prev - 1 + project1.screenshots.length) % project1.screenshots.length);
  };

  // Mobile Project 2
  const project2 = projects.find(p => p.id === 'project-2');

  // API Project 3
  const project3 = projects.find(p => p.id === 'project-3');

  return (
    <section className="projects-section section" id="projects">
      <div className="container">
        {/* Section Header */}
        <h2 className="section-header">
          <Terminal size={24} /> ~/ Projects.md
        </h2>

        <div className="projects-list">
          {/* PROJECT CARD 1: Web Application (Split: Screenshot Carousel Left, Info Right) */}
          {project1 && (
            <div className="project-card web-project-card mac-window">
              <div className="window-bar">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-amber"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="window-title">
                  <Layers size={14} /> {project1.title.split('-')[0].trim()}.ext
                </div>
                <span className="project-type-badge">TYPE: WEB_APP</span>
              </div>

              <div className="project-card-body grid-2-col">
                {/* Left: Interactive Carousel */}
                <div className="carousel-container">
                  <div className="carousel-slide-wrapper">
                    <img 
                      src={project1.screenshots[p1ActiveSlide].url} 
                      alt={project1.screenshots[p1ActiveSlide].caption} 
                      className="carousel-image"
                    />
                    <div className="carousel-caption">
                      {project1.screenshots[p1ActiveSlide].caption}
                    </div>
                  </div>

                  {project1.screenshots.length > 1 && (
                    <div className="carousel-controls">
                      <button className="carousel-arrow" onClick={prevP1Slide} aria-label="Previous Slide">
                        <ChevronLeft size={18} />
                      </button>
                      <div className="carousel-dots">
                        {project1.screenshots.map((_, idx) => (
                          <span 
                            key={idx} 
                            className={`carousel-dot ${idx === p1ActiveSlide ? 'active' : ''}`}
                            onClick={() => setP1ActiveSlide(idx)}
                          />
                        ))}
                      </div>
                      <button className="carousel-arrow" onClick={nextP1Slide} aria-label="Next Slide">
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Right: Info */}
                <div className="project-info">
                  <h3 className="project-title">{project1.title}</h3>
                  <div className="tech-tags">{project1.techStack}</div>
                  <p className="project-description">{project1.description}</p>

                  <div className="project-actions">
                    {project1.links?.demo && (
                      <a href={project1.links.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {project1.links?.github && (
                      <a href={project1.links.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                        <GithubIcon size={16} /> View Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PROJECT CARD 2: Mobile Application (Split: Info Left, Mobile Mockup Frame Right) */}
          {project2 && (
            <div className="project-card mobile-project-card mac-window">
              <div className="window-bar">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-amber"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="window-title">
                  <Smartphone size={14} /> {project2.title.split('-')[0].trim()}.ext
                </div>
                <span className="project-type-badge">TYPE: EDGE_MOBILE</span>
              </div>

              <div className="project-card-body grid-2-col mobile-layout-reversed">
                {/* Left: Info */}
                <div className="project-info">
                  <h3 className="project-title">{project2.title}</h3>
                  <div className="tech-tags">{project2.techStack}</div>
                  <p className="project-description">{project2.description}</p>

                  <div className="project-actions">
                    {project2.links?.github && (
                      <a href={project2.links.github} target="_blank" rel="noreferrer" className="btn btn-rust">
                        <GithubIcon size={16} /> View Source
                      </a>
                    )}
                    {project2.links?.store && (
                      <a href={project2.links.store} target="_blank" rel="noreferrer" className="btn btn-secondary">
                        <ExternalLink size={16} /> Store Listing
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Mobile Mockup Frame Carousel */}
                <div className="mobile-frame-wrapper">
                  <div className="mobile-phone-container">
                    <div className="phone-screen">
                      <img 
                        src={project2.mockupImage} 
                        alt={project2.title} 
                        className="mobile-mockup-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PROJECT CARD 3: Distributed Knowledge API */}
          {project3 && (
            <div className="project-card api-project-card mac-window">
              <div className="window-bar">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-amber"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="window-title">
                  <Cpu size={14} /> {project3.title.split('-')[0].trim()}.ext
                </div>
                <span className="project-type-badge">TYPE: HIGH_PERF_API</span>
              </div>

              <div className="project-card-body grid-2-col">
                <div className="carousel-container">
                  <img 
                    src={project3.screenshots[0].url} 
                    alt={project3.screenshots[0].caption} 
                    className="carousel-image"
                  />
                  <div className="carousel-caption">
                    {project3.screenshots[0].caption}
                  </div>
                </div>

                <div className="project-info">
                  <h3 className="project-title">{project3.title}</h3>
                  <div className="tech-tags">{project3.techStack}</div>
                  <p className="project-description">{project3.description}</p>

                  <div className="project-actions">
                    <a href={project3.links.github} target="_blank" rel="noreferrer" className="btn btn-rust">
                      <GithubIcon size={16} /> View Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
