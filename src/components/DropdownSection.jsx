import { useState } from 'react';
import './DropdownSection.css';

function DropdownSection({ title, children, isOpen: controlledIsOpen, onToggle }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalOpen;
  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  return (
    <div className="dropdown-section">
      <button 
        className={`dropdown-header ${isOpen ? 'open' : ''}`}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={`content-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <h2>{title}</h2>
        <span className="dropdown-icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div 
        id={`content-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className={`dropdown-content ${isOpen ? 'open' : ''}`}
      >
        <div className="dropdown-inner">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DropdownSection;

