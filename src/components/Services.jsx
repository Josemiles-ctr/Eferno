import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'psychology',
      title: 'AI-Powered Recommendations',
      description: 'Get personalized product suggestions based on your preferences, browsing history, and shopping behavior.'
    },
    {
      icon: 'search',
      title: 'Smart Search',
      description: 'Find exactly what you need with our intelligent search engine that understands natural language queries.'
    },
    {
      icon: 'lock',
      title: 'Secure Payments',
      description: 'Shop with confidence using our encrypted payment system with multiple payment options.'
    },
    {
      icon: 'local_shipping',
      title: 'Fast Delivery',
      description: 'Enjoy lightning-fast delivery with real-time tracking and updates on your orders.'
    },
    {
      icon: 'support_agent',
      title: '24/7 Support',
      description: 'Get instant assistance from our AI chatbot or connect with our support team anytime.'
    },
    {
      icon: 'trending_down',
      title: 'Price Tracking',
      description: 'Never miss a deal with automatic price drop notifications on your favorite items.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Discover the powerful features that make Eferno the smartest way to shop online
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="material-icons service-icon">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
