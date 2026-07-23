import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './CertificationsSection.css';

export const CertificationsSection = () => {
  const { certifications } = portfolioData;

  if (!certifications || certifications.length === 0) return null;

  return (
    <section className="certifications-section section" id="certifications">
      <div className="container">
        <h2 className="section-header">
          <Terminal size={24} /> ~/ Certifications.env
        </h2>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="mac-window cert-card" key={index}>
              <div className="window-bar">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-amber"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="window-title">
                  <ShieldCheck size={14} /> CERT_0{index + 1}.key
                </div>
                <span className="cert-status-badge">
                  <CheckCircle2 size={12} /> VERIFIED
                </span>
              </div>

              <div className="cert-card-body">
                <div className="cert-header">
                  <div className="cert-icon-wrapper">
                    <Award size={22} />
                  </div>
                  <h3 className="cert-title">{cert.title}</h3>
                </div>
                <p className="cert-description">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
