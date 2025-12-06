import './Header.css';

function Header({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'profiles', label: 'Women Drivers' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'initiatives', label: 'Initiatives' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo" onClick={() => onNavigate('home')}>
          <span className="logo-text">F1</span>
          <span className="logo-subtext">Women in Racing</span>
        </div>
        <nav className="header-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;

