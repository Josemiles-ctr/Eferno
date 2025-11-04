import { useState, useEffect } from 'react';
import './AIFeatures.css';
import Button from './Button';

const AIFeatures = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
    {
      icon: 'smart_toy',
      title: 'AI-Powered Recommendations',
      description: 'Get personalized product suggestions based on your preferences, browsing history, and purchase patterns using advanced machine learning algorithms.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: 'search',
      title: 'Smart Search & Discovery',
      description: 'Find exactly what you need with our intelligent search that understands context, synonyms, and even visual queries to deliver perfect results.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: 'chat',
      title: 'AI Shopping Assistant',
      description: 'Chat with our virtual assistant for instant product information, size recommendations, styling tips, and personalized shopping guidance 24/7.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: 'analytics',
      title: 'Price Prediction & Alerts',
      description: 'AI analyzes price trends to predict optimal buying times and sends smart alerts when your favorite items go on sale or restock.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: 'checkroom',
      title: 'Virtual Try-On',
      description: 'Experience products before buying with AR-powered virtual try-on for clothes, accessories, and home decor items using your device camera.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: 'straighten',
      title: 'Smart Size Finder',
      description: 'Never worry about sizing again! Our AI analyzes your measurements and past purchases to recommend the perfect fit every time.',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <section className="ai-features" id="ai-features">
      <div className="ai-features-container">
        <div className="section-header">
          <h2 className="section-title">AI-Powered Shopping Experience</h2>
          <p className="section-description">
            Discover how artificial intelligence transforms your shopping journey
          </p>
        </div>

        <div className="carousel-wrapper">
          <div className="carousel">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="carousel-slide">
                  <div className="feature-card" style={{ background: feature.gradient }}>
                    <span className="material-icons feature-icon">{feature.icon}</span>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="carousel-button carousel-button--prev" 
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button 
              className="carousel-button carousel-button--next" 
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="carousel-indicators">
            {features.map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentSlide === index ? 'indicator--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="carousel-controls">
            <Button 
              variant="outline" 
              size="small"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              <span className="material-icons" style={{ fontSize: '1rem', marginRight: '0.25rem' }}>
                {isAutoPlaying ? 'pause' : 'play_arrow'}
              </span>
              {isAutoPlaying ? 'Pause' : 'Play'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
