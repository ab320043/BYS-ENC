import './footerStyle.css';
import { FaSnapchat, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiHelpCircle, FiHome } from 'react-icons/fi';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getFooterStyle = () => {
    if (location.pathname === '/snapchat-terms') {
      return { 
        background: '#FFFC00', 
        color: 'black',
        buttonBackground: 'rgba(0, 0, 0, 0.1)',
        buttonHover: 'rgba(0, 0, 0, 0.2)'
      };
    } else if (location.pathname === '/instagram-terms') {
      return { 
        background: 'linear-gradient(90deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888,#f09433)',
        color: 'white',
        buttonBackground: 'rgba(255, 255, 255, 0.1)',
        buttonHover: 'rgba(255, 255, 255, 0.2)'
      };
    } else if (location.pathname === '/youtube-terms') {
      return { 
        background: '#FF0000',
        color: 'white',
        buttonBackground: 'rgba(255, 255, 255, 0.1)',
        buttonHover: 'rgba(255, 255, 255, 0.2)'
      };
    }
    // Default style
    return { 
      background: 'linear-gradient(135deg, #7209b7 0%, #480ca8 100%)',
      color: 'white',
      buttonBackground: 'rgba(255, 255, 255, 0.1)',
      buttonHover: 'rgba(255, 255, 255, 0.2)'
    };
  };

  const currentStyle = getFooterStyle();

  return (
    <footer className="footer-container" style={{ 
      background: currentStyle.background,
      color: currentStyle.color
    }}>
      <div className="footer-content">
        <div className="footer-links">
          <h3 className="quick-links-title" style={{ color: currentStyle.color }}>Quick Links</h3>
          <div className="social-links">
            <Link to="/snapchat-terms" className="social-link" style={{ color: currentStyle.color }}>
              <FaSnapchat className="social-icon" style={{ color: currentStyle.color }} />
              <span className="social-text">Snapchat</span>
            </Link>
            <Link to="/instagram-terms" className="social-link" style={{ color: currentStyle.color }}>
              <FaInstagram className="social-icon" style={{ color: currentStyle.color }} />
              <span className="social-text">Instagram</span>
            </Link>
            <Link to="/youtube-terms" className="social-link" style={{ color: currentStyle.color }}>
              <FaYoutube className="social-icon" style={{ color: currentStyle.color }} />
              <span className="social-text">YouTube</span>
            </Link>
          </div>
          
          <div className="page-links">
            <button 
              className="footer-nav-button"
              onClick={() => navigate('/')}
              style={{ 
                background: currentStyle.buttonBackground,
                color: currentStyle.color
              }}
            >
              <FiHome className="button-icon" style={{ color: currentStyle.color }} />
              Home
            </button>
            <Link 
              to="/faq-page" 
              className="footer-nav-button"
              style={{ 
                background: currentStyle.buttonBackground,
                color: currentStyle.color
              }}
            >
              <FiHelpCircle className="button-icon" style={{ color: currentStyle.color }} />
              FAQ's
            </Link>
          </div>
        </div>

        <div className="creator-links">
          <h3 className="creator-title" style={{ color: currentStyle.color }}>Created by</h3>
          <p className="creator-item" style={{ color: currentStyle.color }}>Website Developer - Abdallah Hussein</p>
          <p className="creator-item" style={{ color: currentStyle.color }}>Snapchat Editor - Jadyn Alcorn</p>
          <p className="creator-item" style={{ color: currentStyle.color }}>Instagram Editor - John Mosquea</p>
          <p className="creator-item" style={{ color: currentStyle.color }}>YouTube Editor - Alex Davidson</p>
        </div>
      </div>
      
      <div className="footer-bottom" style={{ color: currentStyle.color }}>
        <p>© {new Date().getFullYear()} Before You Scroll. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;