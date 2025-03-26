import abys from '../assets/abys.png';
import './headerStyle.css';

const Header = () => {
    return (
        <header className="header">
            <img src={abys} alt="Before You Scroll Logo" className="header__logo" />
        </header>
    );
};

export default Header;
