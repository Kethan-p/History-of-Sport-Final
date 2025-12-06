import { useState } from 'react';
import './SectionCard.css';

function SectionCard({ number, title, subtitle, children, isOpen, onToggle }) {
  return (
    <div className={`section-card ${isOpen ? 'open' : ''}`}>
      <button 
        className="section-card-header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="section-card-number">{number}</div>
        <div className="section-card-text">
          <h2 className="section-card-title">{title}</h2>
          <p className="section-card-subtitle">{subtitle}</p>
        </div>
        <div className="section-card-arrow">
          {isOpen ? '−' : '+'}
        </div>
      </button>
      {isOpen && (
        <div className="section-card-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default SectionCard;

