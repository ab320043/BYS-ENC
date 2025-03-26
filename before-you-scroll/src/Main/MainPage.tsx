import './MainPageStyle.css';
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';

// logos
import snapLogo from '../assets/snapLogo.png';
import instaLogo from '../assets/instaLogo.png';
import youtubeLogo from '../assets/youtubeLogo.png';

import DescPage from '../Main/descPage';

const MainPage = () => {
    // Animation effect for the title
    useEffect(() => {
      const title = document.querySelector('.main-title');
      if (title) {
        title.classList.add('animate');
      }
    }, []);
  
    return (
      <div className="main-content">
        <h1 className="main-title">Supported Platforms</h1>
        
        <div className="platforms-container">
          <div className="platform-item">
            <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
              <img src={snapLogo} alt="Snapchat" className="platform-logo" />
              <p className="platform-name">Snapchat</p>
            </a>
          </div>
          
          <div className="platform-item">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instaLogo} alt="Instagram" className="platform-logo" />
              <p className="platform-name">Instagram</p>
            </a>
          </div>
          
          <div className="platform-item">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={youtubeLogo} alt="YouTube" className="platform-logo" />
              <p className="platform-name">YouTube</p>
            </a>
          </div>
        </div>

        {/* New Description Section */}
        <DescPage/>


      </div>
    );
  };
  
  export default MainPage;