import './snapStyle.css';
import Snapchat from '../assets/Snapchat.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SnapchatPage = () => {
  const [activeTab, setActiveTab] = useState('account');
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
            className={`snap-tab-btn ${activeTab === 'account' ? 'snap-active' : ''}`}
            onClick={() => setActiveTab('account')}
          >
            <i className="snap-tab-icon fas fa-user"></i>
            Account
          </button>
          <button 
            className={`snap-tab-btn ${activeTab === 'data' ? 'snap-active' : ''}`}
            onClick={() => setActiveTab('data')}
          >
            <i className="snap-tab-icon fas fa-database"></i>
            Data
          </button>
          <button 
            className={`snap-tab-btn ${activeTab === 'activity' ? 'snap-active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            <i className="snap-tab-icon fas fa-running"></i>
            Activity
          </button>
          <button 
            className={`snap-tab-btn ${activeTab === 'content' ? 'snap-active' : ''}`}
            onClick={() => setActiveTab('content')}
          >
            <i className="snap-tab-icon fas fa-copyright"></i>
            Content
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
          {/* Account Tab */}
          {activeTab === 'account' && (
            <div className="snap-tab-pane snap-fade-in">
              <h2><i className="fas fa-user snap-header-icon"></i> Account Information</h2>
              
              <div className="snap-content-card">
                <h3><i className="fas fa-users snap-icon"></i> Who Can Use The Services</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    You must be 13 or older to use Snapchat. If Snapchat finds out you are under the age of 13, they will terminate your account.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-user-edit snap-icon"></i> Access and Update Your Information</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    You can update your basic information anytime in your settings.
                    <span className="snap-source-badge">Privacy Policy</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-envelope snap-icon"></i> Opt out of personal messages</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    You can opt out of text messages and emails from Snapchat at any time.
                    <span className="snap-source-badge">Privacy Policy</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Data Tab */}
          {activeTab === 'data' && (
            <div className="snap-tab-pane snap-fade-in">
              <h2><i className="fas fa-database snap-header-icon"></i> Use of User Data</h2>
              
              <div className="snap-content-card">
                <h3><i className="fas fa-mobile-alt snap-icon"></i> Data charges and mobile phones</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    Snapchat is allowed to send you text messages; any mobile charges are your responsibility.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-ad snap-icon"></i> Rights you grant us & Personalized recommendations</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    Snapchat is allowed to use and sell any information it has about you to give you targeted advertisements.
                    <span className="snap-source-badge">Terms of Service & Privacy Policy</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-trash-alt snap-icon"></i> Delete your information</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    Even if you delete your account, not all your information will be deleted from Snapchat's database.
                    <span className="snap-source-badge">Privacy Policy</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-adjust snap-icon"></i> Set advertising preferences</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    You can change your settings so Snapchat will not use your information to give personalized advertisements.
                    <span className="snap-source-badge">Privacy Policy</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-chart-line snap-icon"></i> Information we generate using our services</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    Snapchat collects data on what services within the app you use, the content you interact with, the content you create, your messages with other users, what features you use the most, your operating system, the apps you have installed on your phone, and your IP address.
                    <span className="snap-source-badge">Privacy Policy</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-cogs snap-icon"></i> How we use information</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    The data Snapchat collects will be used to give you personalized ads, personalize the content you see on the app, recommend you friends, categorize your memories, develop and improve features on the app, teach any AI Snapchat is working on, and for Snapchat's in-house research.
                    <span className="snap-source-badge">Privacy Policy</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-clock snap-icon"></i> How long we keep your information</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    Snapchat will keep information for up to 24 hours unless you or a court asks them to keep the information for longer. For example, if you save a message with another user, that information will stay on the app until you unsave the message.
                    <span className="snap-source-badge">Privacy Policy</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-child snap-icon"></i> Our audience</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    Snapchat limits data collection on users under the age of 18.
                    <span className="snap-source-badge">Privacy Policy</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* User Activity Tab */}
          {activeTab === 'activity' && (
            <div className="snap-tab-pane snap-fade-in">
              <h2><i className="fas fa-running snap-header-icon"></i> User Activity</h2>
              
              <div className="snap-content-card">
                <h3><i className="fas fa-exclamation-triangle snap-icon"></i> Respecting the Services and Snap's Rights</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    If Snapchat believes any actions you make on the app can harm others, Snapchat has the right to suspend or remove your account.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-shield-alt snap-icon"></i> Safety</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    If any actions you make on the app can be considered dangerous (sexual content, bullying, illegal activities, terrorism, violence, false claims, and self-harm), Snapchat can remove this content from the platform.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                  <li className="snap-list-item">
                    If you continue to post 'dangerous' content, Snapchat can either limit who can see your account or terminate your account.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-user-slash snap-icon"></i> Termination and Suspension</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    You are allowed to stop using the app and terminate your account at any time.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                  <li className="snap-list-item">
                    Snapchat can also terminate or suspend your account if they believe you have violated the Terms and Conditions.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                  <li className="snap-list-item">
                    You will be given notice of your account's termination or suspension.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                  <li className="snap-list-item">
                    You are allowed to appeal if you think your account was wrongly terminated.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-eye snap-icon"></i> Content Moderation</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    While Snapchat has the right to review all content, it is not its responsibility to do so.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                  <li className="snap-list-item">
                    Snapchat does not claim any responsibility for harmful content.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Content Tab */}
          {activeTab === 'content' && (
            <div className="snap-tab-pane snap-fade-in">
              <h2><i className="fas fa-copyright snap-header-icon"></i> Ownership of Content</h2>
              
              <div className="snap-content-card">
                <h3><i className="fas fa-upload snap-icon"></i> Rights you grant us</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    You have the right to upload your content, but Snapchat and its affiliates are allowed to use and change your content in any way for free. This includes the name and likeness of anyone featured in the video. This is only for public content. Both commercial and non-commercial.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                  <li className="snap-list-item">
                    They are also allowed to screen, delete, review, and access your content at any time.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-trademark snap-icon"></i> Respecting the Services and Snap's Rights</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    If any Snapchat content (Bitmojis and branding) is used outside of Snapchat, Snapchat has the right to that content. The same follows if you post any branded content within Snapchat.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                  <li className="snap-list-item">
                    If you violate any branding guidelines, Snapchat can suspend or remove your account.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-user-check snap-icon"></i> Respecting Others Rights</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    All content you post on the app must be your own. If any content posted by another user on the app is your own, you may contact Snapchat for its removal.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Legal Tab */}
          {activeTab === 'legal' && (
            <div className="snap-tab-pane snap-fade-in">
              <h2><i className="fas fa-gavel snap-header-icon"></i> Legal Information</h2>
              
              <div className="snap-content-card">
                <h3><i className="fas fa-balance-scale snap-icon"></i> Arbitration, Class action waiver, and jury waiver</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    If any disputes between you and Snapchat arise, you cannot take them to small claims court. Instead, these issues will be settled through arbitration, which means a neutral third party will come and resolve the claims between you and Snapchat.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                  <li className="snap-list-item">
                    Both you and Snapchat can start the arbitration process. You cannot place a class-action lawsuit.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                  <li className="snap-list-item">
                    Snapchat will try to settle any issues before starting arbitration. Snapchat will send you all the documentation you will need.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                  <li className="snap-list-item">
                    If Snapchat initiates arbitration, they will pay the fees; if you initiate, you must pay the fees. You and Snapchat agree to not have a jury and judge.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                  <li className="snap-list-item">
                    You can opt out any time as long as it is 30 days before.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-file-invoice-dollar snap-icon"></i> Indemnity</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    If either you or Snapchat takes legal action against the other, you will have to pay compensation for court fees.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-landmark snap-icon"></i> Exclusive Venue</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    If either you or Snapchat take the other to small claims court, it must be held at the United States District Court for the Central District of California.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                  <li className="snap-list-item">
                    If the central district does not hold authority over the case, the claims will be taken to the Superior Court of California, County of Los Angeles.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-exclamation-circle snap-icon"></i> Limitation of Liability</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    Snapchat is not liable for your ability to access services or content posted by other users.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-balance-scale snap-icon"></i> Choice of Law</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    These terms and conditions fall under California law. This means if any legal issues occur, they will be dealt with within California's legal system.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-info-circle snap-icon"></i> Disclaimers</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    Snapchat is not responsible for any harmful content you see on the app. While Snapchat tries its best to give you a good experience on the app, it is not required to.
                    <span className="snap-source-badge">Terms of Service</span>
                  </li>
                </ul>
              </div>

              <div className="snap-content-card">
                <h3><i className="fas fa-file-contract snap-icon"></i> Severability</h3>
                <ul className="snap-list">
                  <li className="snap-list-item">
                    Any statements in the terms and conditions that are not fair must be removed. The removal of one statement does not change any other statements.
                    <span className="snap-source-badge">Terms of Service</span>
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

export default SnapchatPage;