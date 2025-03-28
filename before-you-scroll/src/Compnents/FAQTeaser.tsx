import './FAQTeaserStyle.css';
// import { useNavigate } from 'react-router-dom';

const FAQTeaser = () => {
//   const navigate = useNavigate();

//   const handleFAQClick = () => {
//     navigate('/faq'); // Adjust the route as needed
//   };

  return (
    <div className="faq-teaser-section">
      <div className="faq-teaser-content">
        <p className="faq-teaser-text">
          Don't scroll confused—find quick solutions to common questions.
        </p>
        <button 
          className="faq-teaser-button" 
          aria-label="Navigate to FAQ section"
        >
          Solve My Doubts
          <span className="button-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default FAQTeaser;