import Instagram from '../assets/Instagram.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './instaStyle.css';

const InstagramPage = () => {
  const [activeTab, setActiveTab] = useState('account');
  const navigate = useNavigate();

  /* Header Scroll Animation */
  useEffect(() => {
    const header = document.querySelector('.instagram-header-container');
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="instagram-page">
      {/* Fixed Header Section */}
      <div className="instagram-header-container">
        <header className="instagram-header">
          <button className="back-button" onClick={handleBackClick}>
            <span className="arrow">←</span> Back
          </button>
          
          <div className="logo-container">
            <img src={Instagram} alt="Instagram Logo" className="instagram-logo" />
          </div>
          
          <a 
            href="https://help.instagram.com/termsofuse" 
            target="_blank" 
            rel="noopener noreferrer"
            className="original-terms-btn"
          >
            Original Terms
          </a>
        </header>
      </div>

      {/* Main Content - starts below header */}
      <main className="instagram-content">
        {/* Tab Navigation */}
        <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'account' ? 'active' : ''}`}
            onClick={() => setActiveTab('account')}
          >
            <i className="tab-icon fas fa-user-circle"></i>
            Account
          </button>
          <button 
            className={`tab-btn ${activeTab === 'activity' ? 'active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            <i className="tab-icon fas fa-chart-line"></i>
            Activity
          </button>
          <button 
            className={`tab-btn ${activeTab === 'content' ? 'active' : ''}`}
            onClick={() => setActiveTab('content')}
          >
            <i className="tab-icon fas fa-copyright"></i>
            Content
          </button>
          <button 
            className={`tab-btn ${activeTab === 'legal' ? 'active' : ''}`}
            onClick={() => setActiveTab('legal')}
          >
            <i className="tab-icon fas fa-gavel"></i>
            Legal
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'account' && (
            <div className="tab-pane fade-in">
              <h2><i className="fas fa-user-circle header-icon"></i> Account Information</h2>
              
              <div className="content-card">
                <h3><i className="fas fa-shield-alt icon"></i> User Responsibilities</h3>
                <ul>
                  <li>
                    <strong>Account Security:</strong> Users must maintain the confidentiality of login credentials and are responsible for all activities on their account.
                    <span className="source-badge">Rights Section</span>
                  </li>
                  <li>
                    <strong>Respect for Others:</strong> Users should avoid harmful or discriminatory behavior.
                    <span className="source-badge">Prohibited Activities Section</span>
                  </li>
                  <li>
                    <strong>Content Responsibility:</strong> Users are responsible for their posts, ensuring compliance with Instagram's policies (no hate speech, graphic violence, or illegal activities).
                    <span className="source-badge">Prohibited Activities Section</span>
                  </li>
                  <li>
                    <strong>Privacy Awareness:</strong> Users should be mindful of personal information shared, as Instagram collects data. Reviewing the Privacy Policy is recommended.
                    <span className="source-badge">Privacy Policy Section</span>
                  </li>
                </ul>
              </div>

              <div className="content-card">
                <h3><i className="fas fa-child icon"></i> Age Restrictions</h3>
                <ul>
                  <li>Users must be at least 13 years old (or the legal minimum age in their country) to create an account.
                    <span className="source-badge">Basic Terms Section</span>
                  </li>
                  <li>Accounts operated by underage individuals will be terminated.
                    <span className="source-badge">Basic Terms Section</span>
                  </li>
                  <li>Parents should monitor their children's online activity for compliance.
                    <span className="source-badge">Basic Terms Section</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="tab-pane fade-in">
              <h2><i className="fas fa-chart-line header-icon"></i> User Activity</h2>
              
              <div className="content-card">
                <h3><i className="fas fa-ban icon"></i> Account Suspension and Termination</h3>
                <ul>
                  <li>
                    <strong>Overview:</strong> Instagram can suspend or terminate accounts for violating policies.
                    <span className="source-badge">Rights Section</span>
                  </li>
                  <li>
                    <strong>Implications:</strong> Violations such as posting illegal content, harassment, or intellectual property infringement may lead to account removal, often without prior notice.
                    <span className="source-badge">Rights Section</span>
                  </li>
                </ul>
              </div>

              <div className="content-card">
                <h3><i className="fas fa-exclamation-triangle icon"></i> Prohibited Activities</h3>
                <ul>
                  <li>Instagram prohibits:
                    <ul className="nested-list">
                      <li>Unauthorized advertising</li>
                      <li>Harassment & spamming</li>
                      <li>Posting obscene or violent content</li>
                    </ul>
                    <span className="source-badge">Prohibited Activities Section</span>
                  </li>
                  <li>Violating these policies may result in content removal, suspension, or termination.
                    <span className="source-badge">Prohibited Activities Section</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="tab-pane fade-in">
              <h2><i className="fas fa-copyright header-icon"></i> Use of User Data & Content Ownership</h2>
              
              <div className="content-card">
                <h3><i className="fas fa-copyright icon"></i> Content Ownership and License</h3>
                <ul>
                  <li>Users retain ownership of their content but grant Instagram a non-exclusive, royalty-free, transferable license to use, modify, and distribute it.
                    <span className="source-badge">Rights Section</span>
                  </li>
                  <li>License End: The license ends when content is deleted, but copies may persist in backups.
                    <span className="source-badge">Rights Section</span>
                  </li>
                </ul>
              </div>

              <div className="content-card">
                <h3><i className="fas fa-database icon"></i> Use of User Data</h3>
                <ul>
                  <li>Instagram collects, stores, and shares personal data and usage patterns.
                    <span className="source-badge">Privacy Policy Section</span>
                  </li>
                  <li>Data may be shared with third parties, including advertisers for ad personalization.
                    <span className="source-badge">Privacy Policy Section</span>
                  </li>
                  <li>Users should review the Privacy Policy to adjust their privacy settings.
                    <span className="source-badge">Privacy Policy Section</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'legal' && (
            <div className="tab-pane fade-in">
              <h2><i className="fas fa-gavel header-icon"></i> Legal Information</h2>
              
              <div className="content-card">
                <h3><i className="fas fa-balance-scale icon"></i> Arbitration Agreement & Class Action Waiver</h3>
                <ul>
                  <li>Disputes must be resolved through binding arbitration rather than court.
                    <span className="source-badge">General Conditions Section</span>
                  </li>
                  <li>Users waive the right to participate in class-action lawsuits.
                    <span className="source-badge">General Conditions Section</span>
                  </li>
                  <li>Arbitration decisions are final and cannot typically be appealed.
                    <span className="source-badge">General Conditions Section</span>
                  </li>
                </ul>
              </div>

              <div className="content-card">
                <h3><i className="fas fa-copyright icon"></i> Intellectual Property Rights</h3>
                <ul>
                  <li>Users must respect copyrights, trademarks, and proprietary rights.
                    <span className="source-badge">Rights Section</span>
                  </li>
                  <li>Posting infringing content may result in removal, suspension, or legal action.
                    <span className="source-badge">Rights Section</span>
                  </li>
                  <li>Users should ensure they have proper rights or permissions before sharing content.
                    <span className="source-badge">Rights Section</span>
                  </li>
                </ul>
              </div>

              <div className="content-card">
                <h3><i className="fas fa-edit icon"></i> Modifications to Terms</h3>
                <ul>
                  <li>Instagram can change its Terms of Use at any time.
                    <span className="source-badge">General Conditions Section</span>
                  </li>
                  <li>Continued platform use implies acceptance of modified terms.
                    <span className="source-badge">General Conditions Section</span>
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

export default InstagramPage;