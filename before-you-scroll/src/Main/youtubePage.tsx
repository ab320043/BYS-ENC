import './youtubeStyle.css';
import youtube from '../assets/youtube.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const YouTubePage = () => {
  const [activeTab, setActiveTab] = useState('user');
  const navigate = useNavigate();

  /* Header Scroll Animation */
  useEffect(() => {
    const header = document.querySelector('.youtube-header-container');
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header?.classList.add('youtube-scrolled');
      } else {
        header?.classList.remove('youtube-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="youtube-page">
      {/* Fixed Header Section */}
      <div className="youtube-header-container">
        <header className="youtube-header">
          <button className="youtube-back-button" onClick={handleBackClick}>
            <span className="youtube-arrow">←</span> Back
          </button>
          
          <div className="youtube-logo-container">
            <img src={youtube} alt="YouTube Logo" className="youtube-logo" />
          </div>
          
          <a 
            href="https://www.youtube.com/static?template=terms" 
            target="_blank" 
            rel="noopener noreferrer"
            className="youtube-original-terms-btn"
          >
            Original Terms
          </a>
        </header>
      </div>

      {/* Main Content - starts below header */}
      <main className="youtube-content">
        {/* Tab Navigation */}
        <div className="youtube-tabs-container">
          <button 
            className={`youtube-tab-btn ${activeTab === 'user' ? 'youtube-active' : ''}`}
            onClick={() => setActiveTab('user')}
          >
            <i className="youtube-tab-icon fas fa-user"></i>
            User
          </button>
          <button 
            className={`youtube-tab-btn ${activeTab === 'data' ? 'youtube-active' : ''}`}
            onClick={() => setActiveTab('data')}
          >
            <i className="youtube-tab-icon fas fa-database"></i>
            Data
          </button>
          <button 
            className={`youtube-tab-btn ${activeTab === 'content' ? 'youtube-active' : ''}`}
            onClick={() => setActiveTab('content')}
          >
            <i className="youtube-tab-icon fas fa-copyright"></i>
            Content
          </button>
          <button 
            className={`youtube-tab-btn ${activeTab === 'safety' ? 'youtube-active' : ''}`}
            onClick={() => setActiveTab('safety')}
          >
            <i className="youtube-tab-icon fas fa-shield-alt"></i>
            Safety
          </button>
        </div>

        {/* Tab Content */}
        <div className="youtube-tab-content">
          {activeTab === 'user' && (
            <div className="youtube-tab-pane youtube-fade-in">
              <h2><i className="fas fa-user youtube-header-icon"></i> User</h2>
              
              <div className="youtube-content-card">
                <h3><i className="fas fa-exclamation-triangle youtube-icon"></i> Account Termination</h3>
                <ul className="youtube-list">
                  <li className="youtube-list-item">YouTube reserves the right to terminate your access to services if you use them to upload harmful material, distribute personally identifying information, engage in fraudulent activities, or engage in botting or spam.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'data' && (
            <div className="youtube-tab-pane youtube-fade-in">
              <h2><i className="fas fa-database youtube-header-icon"></i> Data</h2>
              
              <div className="youtube-content-card">
                <h3><i className="fas fa-chart-line youtube-icon"></i> Data Collection</h3>
                <ul className="youtube-list">
                  <li className="youtube-list-item">YouTube collects data about how you interact with the platform, including watch history, search queries, and device information to improve your experience.</li>
                  <li className="youtube-list-item">This data may be used to personalize recommendations and advertisements.</li>
                </ul>
              </div>

              <div className="youtube-content-card">
                <h3><i className="fas fa-server youtube-icon"></i> Data Storage</h3>
                <ul className="youtube-list">
                  <li className="youtube-list-item">Your data is stored securely on Google's servers and is protected by advanced security measures.</li>
                  <li className="youtube-list-item">Some data may be retained even after account deletion for legal or operational reasons.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="youtube-tab-pane youtube-fade-in">
              <h2><i className="fas fa-copyright youtube-header-icon"></i> Ownership of content</h2>
              
              <div className="youtube-content-card">
                <h3><i className="fas fa-upload youtube-icon"></i> Content License</h3>
                <ul className="youtube-list">
                  <li className="youtube-list-item">By uploading content to YouTube, you grant the company rights to reuse your content for its own business.</li>
                  <li className="youtube-list-item">You also grant other users on YouTube the right to access, share or otherwise redistribute, and reproduce your content.</li>
                  <li className="youtube-list-item">YouTube also has the right to retain copies of any videos you delete, though they may not display or distribute these videos.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'safety' && (
            <div className="youtube-tab-pane youtube-fade-in">
              <h2><i className="fas fa-shield-alt youtube-header-icon"></i> Safety</h2>
              
              <div className="youtube-content-card">
                <h3><i className="fas fa-exclamation-circle youtube-icon"></i> Liability</h3>
                <ul className="youtube-list">
                  <li className="youtube-list-item">YouTube is not responsible for damages or legal repercussions caused by misusing its services.</li>
                </ul>
              </div>

              <div className="youtube-content-card">
                <h3><i className="fas fa-dollar-sign youtube-icon"></i> Compensation Limits</h3>
                <ul className="youtube-list">
                  <li className="youtube-list-item">In the event that YouTube is held liable for claims related to its services, the maximum amount of money they will reimburse you with is equal to the following, depending on which is greater:</li>
                  <ul className="youtube-nested-list">
                    <li className="youtube-list-item">The amount of revenue YouTube has paid you through the service for the past 12 months prior to you taking legal action</li>
                    <li className="youtube-list-item">500 US Dollars.</li>
                  </ul>
                </ul>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default YouTubePage;