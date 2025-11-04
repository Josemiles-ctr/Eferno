import { useState } from 'react';
import './App.css';
import NeuralBackground from './components/NeuralBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AIFeatures from './components/AIFeatures';
import Services from './components/Services';
import Team from './components/Team';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for sticky header
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
