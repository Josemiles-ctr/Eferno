import Button from './Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">Eferno</span>
          </h1>
          <p className="hero-subtitle">
            AI-Powered Shopping Experience
          </p>
          <p className="hero-description">
            Transform the way you shop online with our cutting-edge artificial intelligence platform. 
            Eferno delivers personalized recommendations, smart search, and seamless shopping experiences 
            tailored just for you.
          </p>
          <div className="hero-buttons">
            <Button variant="primary" size="large">Get Started</Button>
            <a href="https://eferno-nine.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Button variant="outline" size="large">Demonstration</Button>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <span className="material-icons card-icon">shopping_cart</span>
            <span className="card-text">Smart Shopping</span>
          </div>
          <div className="floating-card card-2">
            <span className="material-icons card-icon">psychology</span>
            <span className="card-text">AI Powered</span>
          </div>
          <div className="floating-card card-3">
            <span className="material-icons card-icon">bolt</span>
            <span className="card-text">Lightning Fast</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
