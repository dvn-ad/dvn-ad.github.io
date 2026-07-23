import React, { useState } from 'react';
import { Terminal, Send, CheckCircle, AlertCircle } from 'lucide-react';
import './ContactSection.css';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseLog, setResponseLog] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setResponseLog(null);

    // Simulate POST API Request execution latency
    setTimeout(() => {
      setIsSubmitting(false);
      const msgId = `MSG_${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      setResponseLog({
        status: 201,
        statusText: "CREATED",
        timestamp: new Date().toISOString(),
        payload: {
          status: "DISPATCHED",
          message_id: msgId,
          recipient: "davin.adisuryo@gmail.com",
          sender: formData.email,
          latency: `${(Math.random() * 10 + 8).toFixed(1)}ms`
        }
      });
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        {/* Section Header */}
        <h2 className="section-header">
          <Terminal size={24} /> ~/ Contact.sh
        </h2>

        {/* macOS Style Window: ContactController.ext */}
        <div className="mac-window contact-window">
          <div className="window-bar">
            <div className="window-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-amber"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="window-title">
              <Terminal size={14} /> ContactController.ext
            </div>
            <span className="api-badge-method">ENDPOINT: /api/v1/messages</span>
          </div>

          <div className="contact-container">
            <div className="contact-intro">
              <span className="badge-post">POST</span>
              <p className="intro-prompt">
                "Send payload to initiate connection or discuss architectural opportunities."
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  NAME <span className="amber-asterisk">*</span>
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Elena Rostova" 
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  EMAIL <span className="amber-asterisk">*</span>
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. elena@techcorp.io" 
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  MESSAGE <span className="amber-asterisk">*</span>
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, distributed backend needs, or collaboration idea..." 
                  className="form-textarea"
                  required
                />
              </div>

              <div className="form-submit-row">
                <button 
                  type="submit" 
                  className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  <Send size={16} /> 
                  {isSubmitting ? 'Sending Request...' : 'POST Request'}
                </button>
              </div>
            </form>

            {/* Terminal Response Output Log */}
            {responseLog && (
              <div className="terminal-response-box">
                <div className="response-header">
                  <span className="http-status">
                    <CheckCircle size={14} /> HTTP {responseLog.status} {responseLog.statusText}
                  </span>
                  <span className="response-time">{responseLog.timestamp}</span>
                </div>
                <pre className="response-json">
                  <code>
                    {JSON.stringify(responseLog.payload, null, 2)}
                  </code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
