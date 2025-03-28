
import beforeLogo from '../assets/beforeLogo.png';
import './headerStyle.css';

const Header = () => {
    return (
        <header className="header">
            <img src={beforeLogo} alt="Before You Scroll Logo" className="header__logo" />
        </header>
    );
};

export default Header;
