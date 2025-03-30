import './MainPageStyle.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// logos
import snapLogo from '../assets/snapLogo.png';
import instaLogo from '../assets/instaLogo.png';
import youtubeLogo from '../assets/youtubeLogo.png';

import DescPage from '../Main/descPage';
import FAQTeaser from '../Compnents/FAQTeaser';

const MainPage = () => {

  const navigate = useNavigate();

  const handleInstagramClick = () => {
    navigate('/instagram-terms'); // Make sure this matches your route
  };

  const handleSnapClick = () => {
    navigate('/snapchat-terms');
  };

  const handleYoutubeClick = () => {
    navigate('/youtube-terms');
  };

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
          <div className="platform-item" onClick={handleSnapClick}>
            <div className="platform-link">
              <img src={snapLogo} alt="Snapchat" className="platform-logo" />
              <p className="platform-name">Snapchat</p>
            </div>
          </div>
          
          <div className="platform-item" onClick={handleInstagramClick}>
            <div className="platform-link">
              <img src={instaLogo} alt="Instagram" className="platform-logo" />
              <p className="platform-name">Instagram</p>
            </div>
        </div>
          
          <div className="platform-item">
            <div onClick={handleYoutubeClick} className="platform-link">
              <img src={youtubeLogo} alt="YouTube" className="platform-logo" />
              <p className="platform-name">YouTube</p>
            </div>
          </div>
        </div>

        {/* New Description Section */}
        <DescPage/>

        <FAQTeaser/>

      </div>
    );
  };
  
  export default MainPage;