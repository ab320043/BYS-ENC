import './snapStyle.css';
import Snapchat from '../assets/snapchat.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SnapchatPage = () => {
  const [activeTab, setActiveTab] = useState('user');
  const navigate = useNavigate();

  /* Header Scroll Animation */
  useEffect(() => {
    const header = document.querySelector('.snap-header-container');
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header?.classList.add('snap-scrolled');
      } else {
        header?.classList.remove('snap-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="snap-page">
      {/* Fixed Header Section */}
      <div className="snap-header-container">
        <header className="snap-header">
          <button className="snap-back-button" onClick={handleBackClick}>
            <span className="snap-arrow">←</span> Back
          </button>
          
          <div className="snap-logo-container">
            <img src={Snapchat} alt="Snapchat Logo" className="snap-logo" />
          </div>
          
          <a 
            href="https://www.snap.com/terms" 
            target="_blank" 
            rel="noopener noreferrer"
            className="snap-original-terms-btn"
          >
            Original Terms
          </a>
        </header>
      </div>

      {/* Main Content - starts below header */}
      <main className="snap-content">
        {/* Tab Navigation */}
        <div className="snap-tabs-container">
          <button 
            className={`snap-tab-btn ${activeTab === 'user' ? 'snap-active' : ''}`}
            onClick={() => setActiveTab('user')}
          >
            <i className="snap-tab-icon fas fa-user"></i>
            User
          </button>
          <button 
            className={`snap-tab-btn ${activeTab === 'data' ? 'snap-active' : ''}`}
            onClick={() => setActiveTab('data')}
          >
            <i className="snap-tab-icon fas fa-database"></i>
            Data
          </button>
          <button 
            className={`snap-tab-btn ${activeTab === 'content' ? 'snap-active' : ''}`}
            onClick={() => setActiveTab('content')}
          >
            <i className="snap-tab-icon fas fa-copyright"></i>
            Content
          </button>
          <button 
            className={`snap-tab-btn ${activeTab === 'safety' ? 'snap-active' : ''}`}
            onClick={() => setActiveTab('safety')}
          >
            <i className="snap-tab-icon fas fa-shield-alt"></i>
            Safety
          </button>
          <button 
            className={`snap-tab-btn ${activeTab === 'legal' ? 'snap-active' : ''}`}
            onClick={() => setActiveTab('legal')}
          >
            <i className="snap-tab-icon fas fa-gavel"></i>
            Legal
          </button>
        </div>

        {/* Tab Content */}
        <div className="snap-tab-content">
          {activeTab === 'user' && (
            <div className="snap-tab-pane snap-fade-in">
              <h2><i className="fas fa-user snap-header-icon"></i> User</h2>
              
              <div className="snap-content-card">
                <h3><i className="fas fa-exclamation-triangle snap-icon"></i> Respecting the Services and Snap's Rights</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">If Snapchat believes any actions you make on the app can harm others, Snapchat has the right to suspend or remove your account.</li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-ban snap-icon"></i> Safety</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">If any actions you make on the app can be considered dangerous (sexual content, bullying, illegal activities, terrorism, violence, false claims, and self-harm) Snapchat can remove this content from the platform.</li>
                  <li className="snap-list-item">If you continue to post 'dangerous' content, Snapchat can either limit who can see your account or terminate your account.</li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-user-slash snap-icon"></i> Termination and Suspension</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">You are allowed to stop using the app and terminate your account at any time.</li>
                  <li className="snap-list-item">Snapchat can also terminate or suspend your account if they believe you have violated the Terms and Conditions.</li>
                  <li className="snap-list-item">You will be given notice of your account's termination or suspension.</li>
                  <li className="snap-list-item">You are allowed to appeal if you think your account was wrongly terminated.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Other tab sections follow the same pattern with snap- prefixed classes */}
          {/* Data Tab */}
          {activeTab === 'data' && (
            <div className="snap-tab-pane snap-fade-in">
              <h2><i className="fas fa-database snap-header-icon"></i> Data</h2>
              
              <div className="snap-content-card">
                <h3><i className="fas fa-mobile-alt snap-icon"></i> Data charges and mobile phones</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">Snapchat is allowed to send you text messages; any mobile charges are your responsibility.</li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-ad snap-icon"></i> Selling of information</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">Snapchat is allowed to use and sell any information it has about you to give you targeted advertisements.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Content Tab */}
          {activeTab === 'content' && (
            <div className="snap-tab-pane snap-fade-in">
              <h2><i className="fas fa-copyright snap-header-icon"></i> Ownership of content</h2>
              
              <div className="snap-content-card">
                <h3><i className="fas fa-upload snap-icon"></i> Rights you grant us</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">You have the right to upload your content, but Snapchat and its affiliates are allowed to use and change your content in any way for free.</li>
                  <li className="snap-list-item">This includes the name and likeness of anyone featured in the video (for public content only, both commercial and non-commercial).</li>
                  <li className="snap-list-item">They are also allowed to screen, delete, review, and access your content at any time.</li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-trademark snap-icon"></i> Respecting the Services and Snap's Rights</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">If any Snapchat content (Bitmojis and branding) is used outside of Snapchat, Snapchat has the right to that content.</li>
                  <li className="snap-list-item">The same follows if you post any branded content within Snapchat.</li>
                  <li className="snap-list-item">If you violate any branding guidelines, Snapchat can suspend or remove your account.</li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-user-check snap-icon"></i> Respecting Others Rights</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">All content you post on the app must be your own.</li>
                  <li className="snap-list-item">If any content posted by another user on the app is your own, you may contact Snapchat for its removal.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Safety Tab */}
          {activeTab === 'safety' && (
            <div className="snap-tab-pane snap-fade-in">
              <h2><i className="fas fa-shield-alt snap-header-icon"></i> Safety</h2>
              
              <div className="snap-content-card">
                <h3><i className="fas fa-eye-slash snap-icon"></i> Content Moderation</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">While Snapchat has the right to review all content, it is not its responsibility to do so.</li>
                  <li className="snap-list-item">Snapchat does not claim any responsibility for harmful content.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Legal Tab */}
          {activeTab === 'legal' && (
            <div className="snap-tab-pane snap-fade-in">
              <h2><i className="fas fa-gavel snap-header-icon"></i> Legal Concerns</h2>
              
              <div className="snap-content-card">
                <h3><i className="fas fa-balance-scale snap-icon"></i> Arbitration, Class action waiver, and jury waiver</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">If any disputes between you and Snapchat arise, you can not take them to small claims court.</li>
                  <li className="snap-list-item">Issues will be settled through arbitration (neutral third party resolves claims).</li>
                  <li className="snap-list-item">Both you and Snapchat can start the arbitration process.</li>
                  <li className="snap-list-item">You cannot place a class-action lawsuit.</li>
                  <li className="snap-list-item">Snapchat will try to settle any issues before starting arbitration.</li>
                  <li className="snap-list-item">If Snapchat initiates arbitration, they pay the fees; if you initiate, you pay the fees.</li>
                  <li className="snap-list-item">You can opt out any time as long as it is 30 days before.</li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-file-invoice-dollar snap-icon"></i> Indemnity</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">If either you or Snapchat takes legal action against the other, you will have to pay compensation for court fees.</li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-landmark snap-icon"></i> Exclusive Venue</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">Legal claims must be held at the United States District Court for the Central District of California.</li>
                  <li className="snap-list-item">If the central district doesn't hold authority, claims go to Superior Court of California, County of Los Angeles.</li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-exclamation-circle snap-icon"></i> Limitation of Liability</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">Snapchat is not liable for your ability to access services or content posted by other users.</li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-balance-scale snap-icon"></i> Choice of Law</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">These terms fall under California law.</li>
                  <li className="snap-list-item">Legal issues will be dealt with within California's legal system.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SnapchatPage;