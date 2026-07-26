import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, ExternalLink, Layers, Smartphone, Terminal, Cpu, ZoomIn, Play } from 'lucide-react';
import { GithubIcon } from './Icons';
import './ProjectsSection.css';

export const ProjectsSection = () => {
  const { projects } = portfolioData;

  // Lightbox Zoom State
  const [zoomedImage, setZoomedImage] = useState(null);

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
          {/* PROJECT CARD 1: Web Application */}
          {project1 && (
            <div className="project-card web-project-card mac-window">
              <div className="window-bar">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-amber"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="window-title">
                  <Layers size={14} /> {project1.smalltitle}.ext
                </div>
                <span className="project-type-badge">TYPE: AI_DOCUMENT_PIPELINE</span>
              </div>

              <div className="project-card-body grid-2-col">
                {/* Left: Interactive Carousel */}
                <div className="carousel-container zoomable-image-container" onClick={() => setZoomedImage(project1.screenshots[p1ActiveSlide])}>
                  <div className="carousel-slide-wrapper">
                    <img 
                      src={project1.screenshots[p1ActiveSlide].url} 
                      alt={project1.screenshots[p1ActiveSlide].caption} 
                      className="carousel-image"
                    />
                    <div className="zoom-overlay">
                      <ZoomIn size={24} />
                    </div>
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
                    {project1.links?.video && (
                      <button 
                        onClick={() => setZoomedImage({ type: 'video', url: project1.links.video, caption: `${project1.title} - Video Demo` })} 
                        className="btn btn-primary"
                      >
                        <Play size={16} /> Watch Demo
                      </button>
                    )}
                    {project1.links?.demo && (
                      <a href={project1.links.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {project1.links?.github && (
                      <a href={project1.links.github} target="_blank" rel="noreferrer" className="btn btn-rust">
                        <GithubIcon size={16} /> View Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PROJECT CARD 2: Web Application (Deterministic AI receipt parser - same layout as project 1) */}
          {project2 && (
            <div className="project-card web-project-card mac-window">
              <div className="window-bar">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-amber"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="window-title">
                  <Smartphone size={14} /> {project2.smalltitle}.ext
                </div>
                <span className="project-type-badge">TYPE: DETERMINISTIC_AI_BACKEND</span>
              </div>

              <div className="project-card-body grid-2-col">
                {/* Left: Interactive Carousel (Single Image/Gif) */}
                <div className="carousel-container zoomable-image-container" onClick={() => setZoomedImage(project2.screenshots[0])}>
                  <div className="carousel-slide-wrapper">
                    <img 
                      src={project2.screenshots[0].url} 
                      alt={project2.screenshots[0].caption} 
                      className="carousel-image"
                    />
                    <div className="zoom-overlay">
                      <ZoomIn size={24} />
                    </div>
                    <div className="carousel-caption">
                      {project2.screenshots[0].caption}
                    </div>
                  </div>
                </div>

                {/* Right: Info */}
                <div className="project-info">
                  <h3 className="project-title">{project2.title}</h3>
                  <div className="tech-tags">{project2.techStack}</div>
                  <p className="project-description">{project2.description}</p>

                  <div className="project-actions">
                    {project2.links?.video && (
                      <button 
                        onClick={() => setZoomedImage({ type: 'video', url: project2.links.video, caption: `${project2.title} - Video Demo` })} 
                        className="btn btn-primary"
                      >
                        <Play size={16} /> Watch Demo
                      </button>
                    )}
                    {project2.links?.demo && (
                      <a href={project2.links.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {project2.links?.github && (
                      <a href={project2.links.github} target="_blank" rel="noreferrer" className="btn btn-rust">
                        <GithubIcon size={16} /> View Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PROJECT CARD 3: Community Service Project */}
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
                <span className="project-type-badge">TYPE: COMMUNITY_WEB_PORTAL</span>
              </div>

              <div className="project-card-body">
                <div className="project-info" style={{ padding: '1rem 0' }}>
                  <h3 className="project-title">{project3.title}</h3>
                  <div className="tech-tags">{project3.techStack}</div>
                  <p className="project-description">{project3.description}</p>

                  <div className="project-actions">
                    {project3.links?.video && (
                      <button 
                        onClick={() => setZoomedImage({ type: 'video', url: project3.links.video, caption: `${project3.title} - Video Demo` })} 
                        className="btn btn-primary"
                      >
                        <Play size={16} /> Watch Demo
                      </button>
                    )}
                    {project3.links?.github && (
                      <a href={project3.links.github} target="_blank" rel="noreferrer" className="btn btn-rust">
                        <GithubIcon size={16} /> View Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {zoomedImage && (
        <div className="lightbox-overlay" onClick={() => setZoomedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {zoomedImage.type === 'video' ? (
              <iframe
                src={zoomedImage.url}
                title={zoomedImage.caption || "Video Demo"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="lightbox-video"
              ></iframe>
            ) : (
              <img src={zoomedImage.url} alt={zoomedImage.caption} className="lightbox-image" />
            )}
            {zoomedImage.caption && <div className="lightbox-caption">{zoomedImage.caption}</div>}
            <button className="lightbox-close" onClick={() => setZoomedImage(null)}>&times;</button>
          </div>
        </div>
      )}
    </section>
  );
};
