import './descPage.css';
import termsLogo from '../assets/termsLogo.png';

const descPage = () => {
  return (
    <div className="description-section">
      <div className="description-content">
        <h2 className="desc-title">About Our Website</h2>
        <div className="description-text">
          <p>
            Lorem ipsum dolor sit amet. Ut sequi odit et explicabo commodi quo voluptatem adipisci. 
            Et exercitationem eveniet et nisi reprehenderit et incidunt reprehenderit ut sequi illum.
            Ea nisi rerum ad impedit omnis in dolore dicta sit delectus eveniet qui voluptatibus 
            dolor et aspernatur voluptatum. Qui consequatur quia non esse omnis aut galisum quia
            aut obcaecati quos. Nam sapiente explicabo rem iure autem cum corrupti amet est dicta dolor. 
            Eos sint nemo quo earum labore sed similique itaque rem illo internos est modi molestias 
            ut corrupti cumque est eveniet voluptatem.
          </p>
        </div>
        <div className="description-image">
          <img 
            src={termsLogo} 
            alt="Terms and Conditions" 
            className="terms-logo" 
          />
        </div>
      </div>
    </div>
  );
};

export default descPage;
