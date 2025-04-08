import './youtubeStyle.css';
import youtube from '../assets/youtube.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const YouTubePage = () => {
  const [activeTab, setActiveTab] = useState('account');
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
            className={`youtube-tab-btn ${activeTab === 'account' ? 'youtube-active' : ''}`}
            onClick={() => setActiveTab('account')}
          >
            <i className="youtube-tab-icon fas fa-user"></i>
            Account
          </button>
          <button 
            className={`youtube-tab-btn ${activeTab === 'activity' ? 'youtube-active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            <i className="youtube-tab-icon fas fa-running"></i>
            Activity
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
            className={`youtube-tab-btn ${activeTab === 'legal' ? 'youtube-active' : ''}`}
            onClick={() => setActiveTab('legal')}
          >
            <i className="youtube-tab-icon fas fa-gavel"></i>
            Legal
          </button>
        </div>

        {/* Tab Content */}
        <div className="youtube-tab-content">
          {activeTab === 'account' && (
            <div className="youtube-tab-pane youtube-fade-in">
              <h2><i className="fas fa-user youtube-header-icon"></i> Account Information</h2>
              
              <div className="youtube-content-card">
                <h3><i className="fas fa-users youtube-icon"></i> Age Requirements</h3>
                <ul className="youtube-list">
                  <li className="youtube-list-item">
                    You must be 13 or older to create an account on YouTube, though children of all ages can use the platform when permitted by a parent or guardian.
                    <span className="youtube-source-badge">Terms of Service</span>
                  </li>
                  <li className="youtube-list-item">
                    If you use YouTube on behalf of a company or organization, that group is also bound to YouTube's terms of service.
                    <span className="youtube-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="youtube-tab-pane youtube-fade-in">
              <h2><i className="fas fa-running youtube-header-icon"></i> User Activity</h2>
              
              <div className="youtube-content-card">
                <h3><i className="fas fa-ban youtube-icon"></i> Content Removal</h3>
                <ul className="youtube-list">
                  <li className="youtube-list-item">
                    YouTube is allowed to delete content if it violates the law or YouTube's community guidelines.
                    <span className="youtube-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>

              <div className="youtube-content-card">
                <h3><i className="fas fa-user-slash youtube-icon"></i> Account Termination</h3>
                <ul className="youtube-list">
                  <li className="youtube-list-item">
                    YouTube is allowed to terminate your account if you use it to do any of the following:
                    <ul className="youtube-nested-list">
                      <li className="youtube-list-item">Redistribute or reuse parts of YouTube's services or content without express permission.</li>
                      <li className="youtube-list-item">Interfere with or disable parts of YouTube's services.</li>
                      <li className="youtube-list-item">Access YouTube through automated means, such as botnets or scrapers, without given permission.</li>
                      <li className="youtube-list-item">Collect personally identifiable information on other users unless given permission.</li>
                      <li className="youtube-list-item">Engage in spam or mass solicitation.</li>
                      <li className="youtube-list-item">Manipulate site metrics, including view count, like count, or channel subscribers.</li>
                      <li className="youtube-list-item">Perform false claims while reporting content or appealing reports on your own content.</li>
                      <li className="youtube-list-item">Run contests which do not comply with YouTube's contest policies.</li>
                      <li className="youtube-list-item">Publicly stream or screen content from YouTube.</li>
                      <li className="youtube-list-item">Sell advertising, sponsorships, or promotions outside of YouTube's advertising policies.</li>
                      <li className="youtube-list-item">Upload content which includes intellectual property from third parties without consent or legal entitlement.</li>
                    </ul>
                    <span className="youtube-source-badge">Terms of Service</span>
                  </li>
                  <li className="youtube-list-item">
                    YouTube may use automated systems to detect and report content which violates its Terms of Service or Community Guidelines.
                    <span className="youtube-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'data' && (
            <div className="youtube-tab-pane youtube-fade-in">
              <h2><i className="fas fa-database youtube-header-icon"></i> Use of User Data</h2>
              
              <div className="youtube-content-card">
                <h3><i className="fas fa-chart-line youtube-icon"></i> Data Collection</h3>
                <ul className="youtube-list">
                  <li className="youtube-list-item">
                    YouTube collects information on your activity while using its services. These include:
                    <ul className="youtube-nested-list">
                      <li className="youtube-list-item">Keywords you search for</li>
                      <li className="youtube-list-item">Videos you watch</li>
                      <li className="youtube-list-item">Ads you watch or click on</li>
                      <li className="youtube-list-item">Your voice (if you use Google Assistant)</li>
                      <li className="youtube-list-item">Purchase activity</li>
                      <li className="youtube-list-item">People with whom you communicate</li>
                      <li className="youtube-list-item">Activity on third-party sites and apps which use YouTube services</li>
                      <li className="youtube-list-item">Browser history (if you use Google Chrome)</li>
                    </ul>
                    <span className="youtube-source-badge">Privacy Policy</span>
                  </li>
                </ul>
              </div>

              <div className="youtube-content-card">
                <h3><i className="fas fa-cogs youtube-icon"></i> Data Usage</h3>
                <ul className="youtube-list">
                  <li className="youtube-list-item">
                    YouTube may use your information for any of the following:
                    <ul className="youtube-nested-list">
                      <li className="youtube-list-item">Suggesting content</li>
                      <li className="youtube-list-item">Troubleshooting current services</li>
                      <li className="youtube-list-item">Developing new services</li>
                      <li className="youtube-list-item">Providing personalized advertisements, if enabled by the user</li>
                      <li className="youtube-list-item">Measuring and optimizing site performance</li>
                      <li className="youtube-list-item">Detecting harmful content</li>
                    </ul>
                    <span className="youtube-source-badge">Privacy Policy</span>
                  </li>
                </ul>
              </div>

              <div className="youtube-content-card">
                <h3><i className="fas fa-user-cog youtube-icon"></i> Data Control</h3>
                <ul className="youtube-list">
                  <li className="youtube-list-item">
                    You can control the amount of information Google, and by extent, YouTube, collects or uses from you through Activity Controls, Ad Settings, and Shared Endorsements.
                    <span className="youtube-source-badge">Privacy Policy</span>
                  </li>
                  <li className="youtube-list-item">
                    You can also request to have your collected data sent to you, or deleted.
                    <span className="youtube-source-badge">Privacy Policy</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="youtube-tab-pane youtube-fade-in">
              <h2><i className="fas fa-copyright youtube-header-icon"></i> Ownership of Content</h2>
              
              <div className="youtube-content-card">
                <h3><i className="fas fa-upload youtube-icon"></i> Content License</h3>
                <ul className="youtube-list">
                  <li className="youtube-list-item">
                    By uploading content to YouTube, you grant the company rights to reuse your content for its own business.
                    <span className="youtube-source-badge">Terms of Service</span>
                  </li>
                  <li className="youtube-list-item">
                    You also grant other users on YouTube the right to access, share or otherwise redistribute, and reproduce your content.
                    <span className="youtube-source-badge">Terms of Service</span>
                  </li>
                  <li className="youtube-list-item">
                    YouTube also has the right to retain copies of any videos you delete, though they may not display or distribute these videos.
                    <span className="youtube-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'legal' && (
            <div className="youtube-tab-pane youtube-fade-in">
              <h2><i className="fas fa-gavel youtube-header-icon"></i> Legal Information</h2>
              
              <div className="youtube-content-card">
                <h3><i className="fas fa-exclamation-circle youtube-icon"></i> Liability</h3>
                <ul className="youtube-list">
                  <li className="youtube-list-item">
                    YouTube is not responsible for damages or legal repercussions caused by misusing its services.
                    <span className="youtube-source-badge">Terms of Service</span>
                  </li>
                  <li className="youtube-list-item">
                    If YouTube does not take immediate action on your violation of its Terms of Service, that does not mean that they are unable to act in the future.
                    <span className="youtube-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>

              <div className="youtube-content-card">
                <h3><i className="fas fa-dollar-sign youtube-icon"></i> Compensation Limits</h3>
                <ul className="youtube-list">
                  <li className="youtube-list-item">
                    In the event that YouTube is held liable for claims related to its services, the maximum amount of money they will reimburse you with is equal to the following, depending on which is greater:
                    <ul className="youtube-nested-list">
                      <li className="youtube-list-item">The amount of revenue YouTube has paid you through the service for the past 12 months prior to you taking legal action</li>
                      <li className="youtube-list-item">500 US Dollars.</li>
                    </ul>
                    <span className="youtube-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>

              <div className="youtube-content-card">
                <h3><i className="fas fa-landmark youtube-icon"></i> Legal Jurisdiction</h3>
                <ul className="youtube-list">
                  <li className="youtube-list-item">
                    Any legal disputes concerning YouTube or its terms of service will be governed by California law, and will be litigated in the federal or state courts of Santa Clara, California.
                    <span className="youtube-source-badge">Terms of Service</span>
                  </li>
                  <li className="youtube-list-item">
                    Any cause for legal dispute must be brought to a court within one year of the cause's occurrence. Otherwise, it will be barred.
                    <span className="youtube-source-badge">Terms of Service</span>
                  </li>
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