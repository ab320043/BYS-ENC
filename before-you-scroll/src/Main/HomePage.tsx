import { useRef, useState, useEffect } from "react";
import Header from '../Compnents/Header';
import MainPage from '../Main/MainPage';
import './pageHomeStyle.css';

const HomePage = () => {
    const bodyRef = useRef<HTMLDivElement>(null);
    const [showButton, setShowButton] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const [typedText, setTypedText] = useState("");
    const fullText = "Never click 'Agree' blindly again Read simplified terms from major platforms like Instagram, X and Snapchat in plain English.";
    const [showSubtitle, setShowSubtitle] = useState(false);

    const handleScroll = () => {
        bodyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        setShowButton(false);
        setTimeout(() => setShowButton(false), 100);
    };

    useEffect(() => {
        const handleScrollEvent = () => {
            if (window.scrollY === 0) {
                setShowButton(true);
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }
        };

        window.addEventListener("scroll", handleScrollEvent);
        return () => window.removeEventListener("scroll", handleScrollEvent);
    }, []);

    // Typing animation effect
    useEffect(() => {
        setShowSubtitle(true);
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setTypedText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100); // Adjust typing speed here

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <>
            <Header />
            
            {/* Animated text section replacing the video */}
            <div className="text-container">
                <div className={`animated-subtitle ${showSubtitle ? 'visible' : ''}`}>
                    <h1 className="main-word">
                        {typedText.substring(0, 33)} 
                    </h1>
                    <p className="subtitle-text">
                        {typedText.substring(33)}
                        {/* <span className="cursor">|</span> */}
                    </p>
                </div>
            </div>

            {/* move down Button */}
            <div className={`button-container ${isAtTop && showButton ? 'visible' : 'hidden'}`}>
                <button className="get-started-btn" onClick={handleScroll}>
                    Get Started
                </button>
            </div>

            <div className="spacer"></div>

            {/* BodyPage component */}
            <div ref={bodyRef} className="body-container">
                <MainPage/>
            </div>
        </>
    );
};

export default HomePage;