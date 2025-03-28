import './descPage.css';
// import termsLogo from '../assets/termsLogo.png';

const descPage = () => {
  return (
    <div className="description-section">
      <div className="description-content">
        <h2 className="desc-title">About Our Website</h2>
        <div className="description-text">
          <p>
            Terms and conditions often bind you to agreements you may not want to make, 
            so <strong>Before You Scroll</strong> is dedicated to transforming internet platforms' terms and conditions into something more accessible.
             The length and use of heavy jargon often seen in terms and conditions intimidates people, 
             so we wish to transform them into words the everyday user can read easily. 
             Knowing your rights is important, so we made it easy.
          </p>
        </div>
        {/* <div className="description-image">
          <img 
            src={termsLogo} 
            alt="Terms and Conditions" 
            className="terms-logo" 
          />
        </div> */}
      </div>
    </div>
  );
};

export default descPage;
