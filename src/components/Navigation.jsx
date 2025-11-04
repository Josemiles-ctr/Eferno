import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';

const Navigation = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    // Check for saved theme preference or default to 'system'
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    
    if (newTheme === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', newTheme);
    }
  };

  const toggleTheme = () => {
    const themes = ['system', 'light', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return 'light_mode';
      case 'dark':
        return 'dark_mode';
      default:
        return 'contrast';
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="material-icons brand-icon">local_fire_department</span>
          <span className="brand-name">Eferno</span>
        </div>

        <div className="nav-right">
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => handleNavClick('home')}>
              <span className="material-icons">home</span>
              <span>Home</span>
            </a>
            <a href="#features" onClick={() => handleNavClick('features')}>
              <span className="material-icons">psychology</span>
              <span>AI Features</span>
            </a>
            <a href="#services" onClick={() => handleNavClick('services')}>
              <span className="material-icons">electric_bolt</span>
              <span>Services</span>
            </a>
            <a href="#team" onClick={() => handleNavClick('team')}>
              <span className="material-icons">groups</span>
              <span>Team</span>
            </a>
            <a href="#partners" onClick={() => handleNavClick('partners')}>
              <span className="material-icons">handshake</span>
              <span>Partners</span>
            </a>
          </div>

          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={`Current: ${theme} theme`}
          >
            <span className="material-icons">{getThemeIcon()}</span>
          </button>

          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  onNavigate: PropTypes.func
};

export default Navigation;
