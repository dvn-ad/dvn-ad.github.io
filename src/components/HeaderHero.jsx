import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FileText, Play, Terminal, CheckCircle2, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './HeaderHero.css';

export const HeaderHero = () => {
  const { developer, skillsPayload } = portfolioData;
  const [isExecuting, setIsExecuting] = useState(false);
  const [lastExecutedTime, setLastExecutedTime] = useState('0.42ms');
  const [statusMsg, setStatusMsg] = useState('200 OK');

  const handleExecuteApi = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setLastExecutedTime(`${(Math.random() * 0.5 + 0.15).toFixed(2)}ms`);
      setStatusMsg('200 OK (CACHE_HIT)');
    }, 400);
  };

  return (
    <section className="hero-section section" id="hero">
      <div className="container hero-grid">
        {/* Left Column: Developer Profile */}
        <div className="hero-profile-col">
          <div className="profile-badge">
            <span className="badge-pulse"></span>
            SYSTEM_ONLINE // BACKEND_NODE
          </div>

          <div className="avatar-frame-wrapper">
            <img 
              src={developer.avatar} 
              alt={developer.name} 
              className="developer-avatar"
            />
            <div className="avatar-tech-overlay">
              <Code2 size={16} />
            </div>
          </div>

          <h1 className="hero-name">{developer.name}</h1>
          <h2 className="hero-role">&gt; {developer.role}</h2>
          
          <p className="hero-bio">{developer.bio}</p>

          <div className="hero-ctas">
            <a href={developer.cvUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              <FileText size={18} /> View CV
            </a>
            <a 
              href={developer.social.github} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-secondary"
            >
              <GithubIcon size={18} /> GitHub
            </a>
            <a 
              href={developer.social.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-secondary"
            >
              <LinkedinIcon size={18} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column: Interactive API Window */}
        <div className="hero-api-col">
          <div className="mac-window api-window">
            {/* Window Bar */}
            <div className="window-bar">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-amber"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title">
                <Terminal size={14} /> HeaderController.ext
              </div>
              <div className="window-actions">
                <span className="env-badge">ENV: PROD</span>
              </div>
            </div>

            {/* API Request Bar */}
            <div className="api-execution-bar">
              <div className="endpoint-wrapper">
                <span className="badge-post">POST</span>
                <span className="endpoint-url">https://alexmorgan.dev/api/v1/profile</span>
              </div>
              <button 
                className={`execute-btn ${isExecuting ? 'executing' : ''}`}
                onClick={handleExecuteApi}
                disabled={isExecuting}
              >
                <Play size={14} fill="currentColor" />
                {isExecuting ? 'Running...' : 'Execute'}
              </button>
            </div>

            {/* Response Meta Header */}
            <div className="response-status-bar">
              <div className="status-indicator">
                <CheckCircle2 size={13} className="status-icon" />
                <span className="status-code">{statusMsg}</span>
              </div>
              <div className="response-metrics">
                <span>Time: {lastExecutedTime}</span>
                <span>Size: 1.2 KB</span>
              </div>
            </div>

            {/* Code Display Area (Monospace JSON) */}
            <div className="code-display-area">
              <pre className="json-code-block">
                <code>
                  <span className="json-key">{"{"}</span>{'\n'}
                  {'  '}<span className="json-key">"status"</span>: <span className="json-string">"success"</span>,{'\n'}
                  {'  '}<span className="json-key">"developer"</span>: <span className="json-string">"{developer.name}"</span>,{'\n'}
                  {'  '}<span className="json-key">"categorized_skills"</span>: <span className="json-key">{"{"}</span>{'\n'}
                  {Object.entries(skillsPayload).map(([category, skills], idx, arr) => (
                    <React.Fragment key={category}>
                      {'    '}<span className="json-key">"{category}"</span>: [
                      {skills.map((skill, sIdx) => (
                        <span key={skill}>
                          <span className="json-string">"{skill}"</span>
                          {sIdx < skills.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                      ]{idx < arr.length - 1 ? ',' : ''}{'\n'}
                    </React.Fragment>
                  ))}
                  {'  '}<span className="json-key">{"}"}</span>{'\n'}
                  <span className="json-key">{"}"}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
