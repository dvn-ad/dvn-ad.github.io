import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Mail, Activity } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import './Footer.css';

export const Footer = () => {
  const { developer } = portfolioData;

  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="brand-logo">
            <Terminal size={18} />
            <span>{developer.name}</span>
          </div>
          <p className="footer-tagline">
            Building reliable distributed architectures & intelligent agent pipelines.
          </p>
        </div>

        <div className="footer-system-status">
          <div className="status-ping">
            <span className="ping-dot"></span>
            <span>SYSTEM UPTIME: 99.998%</span>
          </div>
          <div className="system-meta">
            <span>PORT: 443 (HTTPS)</span> // <span>PROTOCOL: HTTP/3</span>
          </div>
        </div>

        <div className="footer-socials">
          <a href={developer.social.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={developer.social.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href={developer.social.twitter} target="_blank" rel="noreferrer" className="social-link" aria-label="Twitter">
            <TwitterIcon size={18} />
          </a>
          <a href={`mailto:${developer.social.email}`} className="social-link" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} {developer.name}. All rights reserved. Solarized Amber & Industrial Rust Theme.
        </p>
      </div>
    </footer>
  );
};
