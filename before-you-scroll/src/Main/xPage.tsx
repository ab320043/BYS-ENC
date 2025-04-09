import './xPageStyle.css';
import xLogo from '../assets/xLogo.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const XPage = () => {
  const [activeTab, setActiveTab] = useState('account');
  const navigate = useNavigate();

  /* Header Scroll Animation */
  useEffect(() => {
    const header = document.querySelector('.x-header-container');
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
    <div className="x-page">
      {/* Fixed Header Section */}
      <div className="x-header-container">
        <header className="x-header">
          <button className="x-back-button" onClick={handleBackClick}>
            <span className="x-arrow">←</span> Back
          </button>
          
          <div className="x-logo-container">
            <img src={xLogo} alt="X Logo" className="x-logo" />
          </div>
          
          <a 
            href="https://x.com/tos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="x-original-terms-btn"
          >
            Original Terms
          </a>
        </header>
      </div>

      {/* Main Content - starts below header */}
      <main className="x-content">
        {/* Tab Navigation */}
        <div className="x-tabs-container">
          <button 
            className={`x-tab-btn ${activeTab === 'account' ? 'active' : ''}`}
            onClick={() => setActiveTab('account')}
          >
            <i className="x-tab-icon fas fa-user-circle"></i>
            Account
          </button>
          <button 
            className={`x-tab-btn ${activeTab === 'activity' ? 'active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            <i className="x-tab-icon fas fa-chart-line"></i>
            Activity
          </button>
          <button 
            className={`x-tab-btn ${activeTab === 'content' ? 'active' : ''}`}
            onClick={() => setActiveTab('content')}
          >
            <i className="x-tab-icon fas fa-copyright"></i>
            Content
          </button>
          <button 
            className={`x-tab-btn ${activeTab === 'legal' ? 'active' : ''}`}
            onClick={() => setActiveTab('legal')}
          >
            <i className="x-tab-icon fas fa-gavel"></i>
            Legal
          </button>
        </div>

        {/* Tab Content */}
        <div className="x-tab-content">
          {activeTab === 'account' && (
            <div className="x-tab-pane fade-in">
              <h2><i className="fas fa-user-circle x-header-icon"></i> Account Information</h2>
              
              <div className="x-content-card">
                <h3><i className="fas fa-shield-alt x-icon"></i> User Responsibilities</h3>
                <ul>
                  <li>
                    <strong>Account Security:</strong> Users must safeguard login credentials and are responsible for all account activity.
                    <span className="x-source-badge">Using the Services</span>
                  </li>
                  <li>
                    <strong>Content Compliance:</strong> Users must ensure posts comply with X's policies (no hate speech, illegal content, or harassment).
                    <span className="x-source-badge">Content on the Services</span>
                  </li>
                  <li>
                    <strong>Age Restrictions:</strong> Users must be at least 13 years old (or the legal minimum age in their country).
                    <span className="x-source-badge">Who May Use the Services</span>
                  </li>
                  <li>
                    <strong>Parental Guidance:</strong> Parents/guardians must monitor underage users' activity.
                    <span className="x-source-badge">Who May Use the Services</span>
                  </li>
                </ul>
              </div>

              <div className="x-content-card">
                <h3><i className="fas fa-ban x-icon"></i> Account Termination</h3>
                <ul>
                  <li>
                    <strong>Violations:</strong> Accounts may be suspended/terminated for policy breaches (e.g., illegal content, spam, impersonation).
                    <span className="x-source-badge">Ending These Terms</span>
                  </li>
                  <li>
                    <strong>No Prior Notice:</strong> X may remove accounts without warning.
                    <span className="x-source-badge">Ending These Terms</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="x-tab-pane fade-in">
              <h2><i className="fas fa-chart-line x-header-icon"></i> User Activity</h2>
              
              <div className="x-content-card">
                <h3><i className="fas fa-exclamation-triangle x-icon"></i> Prohibited Actions</h3>
                <ul>
                  <li>
                    <strong>Scraping/Disruption:</strong> Unauthorized scraping, circumventing technical limits, or disrupting services is banned.
                    <span className="x-source-badge">Summary of Terms</span>
                  </li>
                  <li>
                    <strong>Misuse:</strong> Harassment, spam, platform manipulation, and deceptive behavior are prohibited.
                    <span className="x-source-badge">Misuse of the Services</span>
                  </li>
                  <li>
                    X may charge <strong>$15,000 per 1M posts</strong> for excessive scraping.
                    <span className="x-source-badge">Liquidated Damages</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="x-tab-pane fade-in">
              <h2><i className="fas fa-copyright x-header-icon"></i> Data & Content</h2>
              
              <div className="x-content-card">
                <h3><i className="fas fa-copyright x-icon"></i> Content Ownership</h3>
                <ul>
                  <li>
                    <strong>User Rights:</strong> You retain ownership of your content.
                    <span className="x-source-badge">Your Rights and Grant of Rights</span>
                  </li>
                  <li>
                    <strong>X's License:</strong> By posting, you grant X a global, royalty-free license to use, modify, and distribute your content (including for AI/model training).
                    <span className="x-source-badge">Your Rights and Grant of Rights</span>
                  </li>
                </ul>
              </div>

              <div className="x-content-card">
                <h3><i className="fas fa-database x-icon"></i> Data Collection</h3>
                <ul>
                  <li>
                    <strong>Usage Data:</strong> X collects personal data, usage patterns, and shares it with third parties (e.g., advertisers).
                    <span className="x-source-badge">Privacy</span>
                  </li>
                  <li>
                    <strong>Global Transfers:</strong> Data may be stored/processed in the U.S., Ireland, or other countries.
                    <span className="x-source-badge">Privacy</span>
                  </li>
                  <li>
                    <strong>Privacy Controls:</strong> Users should adjust settings via the <a href="https://x.com/privacy" target="_blank">Privacy Policy</a>.
                    <span className="x-source-badge">Privacy</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'legal' && (
            <div className="x-tab-pane fade-in">
              <h2><i className="fas fa-gavel x-header-icon"></i> Legal Information</h2>
              
              <div className="x-content-card">
                <h3><i className="fas fa-balance-scale x-icon"></i> Arbitration</h3>
                <ul>
                  <li>
                    <strong>Binding Arbitration:</strong> Disputes must be resolved via arbitration (no class actions).
                    <span className="x-source-badge">General</span>
                  </li>
                  <li>
                    <strong>Waiver:</strong> Users forfeit the right to sue in court or join class actions.
                    <span className="x-source-badge">General</span>
                  </li>
                </ul>
              </div>

              <div className="x-content-card">
                <h3><i className="fas fa-copyright x-icon"></i> Intellectual Property</h3>
                <ul>
                  <li>
                    <strong>Copyright Compliance:</strong> Users must respect copyrights/trademarks. Infringing content may be removed.
                    <span className="x-source-badge">Content on the Services</span>
                  </li>
                  <li>
                    <strong>Reporting:</strong> Copyright claims can be filed <a href="https://help.x.com/forms/dmca" target="_blank">here</a>.
                    <span className="x-source-badge">Content on the Services</span>
                  </li>
                </ul>
              </div>

              <div className="x-content-card">
                <h3><i className="fas fa-exclamation-circle x-icon"></i> Liability</h3>
                <ul>
                  <li>
                    <strong>"AS IS" Service:</strong> X disclaims warranties; users access content at their own risk.
                    <span className="x-source-badge">Disclaimers</span>
                  </li>
                  <li>
                    <strong>Cap on Damages:</strong> X's liability is limited to $100 or fees paid in the past 6 months.
                    <span className="x-source-badge">Limitation of Liability</span>
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

export default XPage;