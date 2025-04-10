import { useState } from 'react';
import { FiChevronDown, FiLock, FiShield, FiUser, FiGlobe, FiAlertCircle, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './FAQPage.css';

const FAQPage = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const navigate = useNavigate();

  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How do social media platforms protect my personal data?",
      answer: "Platforms use encryption, secure servers, and access controls. However, always check their privacy policy as protection levels vary.",
      icon: <FiShield className="faq-icon" />,
      category: "security"
    },
    {
      question: "What rights do I have under platform terms of service?",
      answer: "You retain copyright to your content but typically grant platforms a license to use it. You can usually delete your data, but some metadata may remain.",
      icon: <FiUser className="faq-icon" />,
      category: "terms"
    },
    {
      question: "How can I make my social media accounts more secure?",
      answer: "Use strong unique passwords, enable two-factor authentication, review app permissions regularly, and be cautious with third-party apps.",
      icon: <FiLock className="faq-icon" />,
      category: "security"
    },
    {
      question: "What happens to my data when I delete an account?",
      answer: "Most platforms retain some data for legal compliance. Full deletion may take up to 90 days, and some data (like messages sent to others) may persist.",
      icon: <FiAlertCircle className="faq-icon" />,
      category: "privacy"
    },
    {
      question: "Are my private messages really private?",
      answer: "While encrypted in transit, most platforms can access message content for moderation and legal requests. End-to-end encrypted platforms like Signal offer more privacy.",
      icon: <FiLock className="faq-icon" />,
      category: "privacy"
    },
    {
      question: "How do platforms use my data for advertising?",
      answer: "They create profiles based on your activity, interests, and connections to serve targeted ads. You can usually opt out of personalized ads in settings.",
      icon: <FiGlobe className="faq-icon" />,
      category: "terms"
    },
    {
      question: "What should I do if my account is hacked?",
      answer: "Immediately use the platform's recovery process, enable 2FA, check connected apps, and scan your device for malware. Notify contacts about potential scams.",
      icon: <FiAlertCircle className="faq-icon" />,
      category: "security"
    },
    {
      question: "Can social media platforms sell my data?",
      answer: "They typically don't sell raw data but sell access to targeted advertising. Third-party data brokers may combine your social data with other sources.",
      icon: <FiUser className="faq-icon" />,
      category: "privacy"
    },
    {
      question: "Why do terms of service change so frequently?",
      answer: "Platforms update terms to comply with new laws, introduce features, or respond to security threats. Most require you to accept updates to continue using the service.",
      icon: <FiGlobe className="faq-icon" />,
      category: "terms"
    },
    {
      question: "What cybersecurity threats are common on social media?",
      answer: "Phishing scams, malicious links, fake profiles, credential stuffing attacks, and malware disguised as media files are frequent threats. Always verify before clicking.",
      icon: <FiShield className="faq-icon" />,
      category: "security"
    }
  ];

  return (
    <div className="faq-container">
      <header className="faq-header">
        <button className="home-button" onClick={() => navigate('/')}>
          <FiArrowLeft size={24} />
          <span>Back</span>
        </button>
        <h1>Frequently Asked Questions</h1>
        <div className="header-spacer"></div> {/* For balance */}
      </header>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={`faq-card ${expandedCards.includes(index) ? 'expanded' : ''} ${faq.category}`}
          >
            <div 
              className="faq-card-header"
              onClick={() => toggleCard(index)}
              aria-expanded={expandedCards.includes(index)}
            >
              <div className="faq-icon-container">
                {faq.icon}
              </div>
              <h3 className="faq-question">{faq.question}</h3>
              <div className={`chevron-container ${expandedCards.includes(index) ? 'expanded' : ''}`}>
                <FiChevronDown className="chevron" />
              </div>
            </div>
            
            <div className="faq-answer-wrapper">
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;