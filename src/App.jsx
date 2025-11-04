import { useState } from 'react';
import './App.css';
import NeuralBackground from './components/NeuralBackground';
import Navigation from './components/Navigation';
import Tabs from './components/Tabs';
import Hero from './components/Hero';
import AIFeatures from './components/AIFeatures';
import Services from './components/Services';
import Team from './components/Team';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'features', label: 'AI Features', icon: 'psychology' },
    { id: 'services', label: 'Services', icon: 'electric_bolt' },
    { id: 'team', label: 'Our Team', icon: 'groups' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 140; // Account for sticky header and tabs
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app">
      <NeuralBackground />
      <div className="app-content">
        <Navigation onNavigate={scrollToSection} />
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={scrollToSection} />
        
        <main>
          <section id="home">
            <Hero />
          </section>
          
          <section id="features">
            <AIFeatures />
          </section>
          
          <section id="services">
            <Services />
          </section>
          
          <section id="team">
            <Team />
          </section>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="footer-logo">
                <span className="material-icons" style={{ fontSize: '2rem', verticalAlign: 'middle', marginRight: '0.5rem' }}>
                  local_fire_department
                </span>
                Eferno
              </h3>
              <p className="footer-tagline">AI-Powered Shopping Experience</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#services">Services</a>
                <a href="#team">Team</a>
              </div>
              
              <div className="footer-section">
                <h4>Company</h4>
                <a href="#about">About Us</a>
                <a href="#contact">Contact</a>
                <a href="#careers">Careers</a>
              </div>
              
              <div className="footer-section">
                <h4>Legal</h4>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Eferno. All rights reserved.</p>
            <p className="footer-team">
              <span className="material-icons" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.25rem' }}>
                favorite
              </span>
              Built with passion by the Eferno Team
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
