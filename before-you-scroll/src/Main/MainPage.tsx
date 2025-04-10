import { useEffect, useRef } from 'react';
import { To, useNavigate } from 'react-router-dom';
import './MainPageStyle.css';

// logos
import snapLogo from '../assets/snapLogo.png';
import instaLogo from '../assets/instaLogo.png';
import youtubeLogo from '../assets/youtubeLogo.png';
import xLogo from '../assets/xLogo.png';

import DescPage from '../Main/descPage';
import FAQTeaser from '../Compnents/FAQTeaser';

const platformData = [
  {
    id: 'snapchat',
    logo: snapLogo,
    name: 'Snapchat',
    effectiveDate: '2025-04-7',
    lastUpdated: '2025-04-9',
    route: '/snapchat-terms'
  },
  {
    id: 'instagram',
    logo: instaLogo,
    name: 'Instagram',
    effectiveDate: '2025-01-1',
    lastUpdated: '2025-04-9',
    route: '/instagram-terms'
  },
  {
    id: 'x',
    logo: xLogo,
    name: 'X (Twitter)',
    effectiveDate: '2024-11-15',
    lastUpdated: '2025-04-9',
    route: '/x-terms'
  },
  {
    id: 'youtube',
    logo: youtubeLogo,
    name: 'YouTube',
    effectiveDate: '2021-06-1',
    lastUpdated: '2025-04-9',
    route: '/youtube-terms'
  }
];

const MainPage = () => {
  const navigate = useNavigate();
  const platformRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  // Animation effects
  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      titleRef.current.classList.add('animate');
    }

    // Intersection Observer for platform cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRefs = platformRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handlePlatformClick = (route: To) => {
    navigate(route);
  };

  const formatDate = (dateString: string | number | Date) => {
    const options = { year: "numeric", month: "short", day: "numeric" } as const;
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="main-content">
      <h1 ref={titleRef} className="main-title">
        Explore Terms & Conditions For
      </h1>
      
      <div className="platforms-container">
        {platformData.map((platform, index) => (
          <div 
            key={platform.id}
            ref={(el) => { platformRefs.current[index] = el; }}
            className="platform-card"
            onClick={() => handlePlatformClick(platform.route)}
          >
            <div className="platform-content">
              <div className="platform-logo-container">
                <img 
                  src={platform.logo} 
                  alt={platform.name} 
                  className="platform-logo" 
                />
              </div>
              <div className="platform-info">
                <h3 className="platform-name">{platform.name}</h3>
                <div className="platform-meta">
                  <div className="meta-badge">
                    <span className="meta-label">Effective since</span>
                    <span className="meta-value">{formatDate(platform.effectiveDate)}</span>
                  </div>
                  <div className="meta-badge">
                    <span className="meta-label">Last updated</span>
                    <span className="meta-value">{formatDate(platform.lastUpdated)}</span>
                  </div>
                </div>
                <div className="view-terms-button">
                  <span>View Terms</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" 
                          strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <DescPage/>
      <FAQTeaser/>
    </div>
  );
};

export default MainPage;