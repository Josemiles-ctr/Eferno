import { useState } from 'react';
import './App.css';
import NeuralBackground from './components/NeuralBackground';
import Navigation from './components/Navigation';
import Tabs from './components/Tabs';
import Hero from './components/Hero';
import AIFeatures from './components/AIFeatures';
import Services from './components/Services';
import Team from './components/Team';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'features', label: 'AI Features', icon: 'psychology' },
    { id: 'services', label: 'Services', icon: 'electric_bolt' },
    { id: 'team', label: 'Our Team', icon: 'groups' },
    { id: 'partners', label: 'Partners', icon: 'handshake' }
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
          
          <section id="partners">
            <Partners />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
