import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* App Download Section */}
          <div className="footer-section app-download">
            <h3 className="footer-title">Download Our Mobile App</h3>
            <p className="footer-description">
              Experience Eferno on the go with our mobile app. Shop smarter with AI-powered features.
            </p>
            
            <div className="download-badges">
              <a 
                href="#app-store" 
                className="badge-link"
                aria-label="Download on the App Store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1280966400" 
                  alt="Download on the App Store" 
                  className="store-badge"
                  style={{ height: '40px' }}
                />
              </a>
              <a 
                href="#google-play" 
                className="badge-link"
                aria-label="Get it on Google Play"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="store-badge"
                  style={{ height: '60px' }}
                />
              </a>
            </div>
          </div>

          {/* QR Codes Section */}
          <div className="footer-section qr-codes">
            <h4 className="qr-title">Scan to Download</h4>
            <div className="qr-container">
              <div className="qr-item">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://apps.apple.com/app/eferno&color=667eea&bgcolor=ffffff" 
                  alt="QR code for App Store" 
                  className="qr-code"
                  loading="lazy"
                />
                <span className="qr-label">iOS</span>
              </div>
              <div className="qr-item">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://play.google.com/store/apps/details?id=com.eferno.app&color=667eea&bgcolor=ffffff" 
                  alt="QR code for Google Play" 
                  className="qr-code"
                  loading="lazy"
                />
                <span className="qr-label">Android</span>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="footer-section company-info">
            <div className="footer-brand">
              <img src="/efernowithname.png" alt="Eferno" className="footer-logo" />
            </div>
            <p className="company-tagline">AI-Powered Shopping Platform</p>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Eferno. All rights reserved.
          </p>
          <p className="built-by">
            Built with ❤️ by the Eferno Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
