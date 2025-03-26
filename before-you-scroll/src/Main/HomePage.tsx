import { useRef, useState, useEffect } from "react";

import Header from '../Compnents/Header';
import landingVideo from '../assets/landingVideo.mp4';
import MainPage from '../Main/MainPage';
import './pageHomeStyle.css';

const HomePage = () => {
    const bodyRef = useRef<HTMLDivElement>(null);
    const [showButton, setShowButton] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);

    const handleScroll = () => {
        bodyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        setShowButton(false);
        setTimeout(() => setShowButton(false), 100);
      };


      useEffect(() => {
        const handleScrollEvent = () => {
            // Only show button if scrolled all the way to top (video section)
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
    

  return (
    <>
    {/* Header component */}
      <Header />

    {/* Video background */}
    <div 
        className="video-container"
      >
        <video 
          className="background-video"
          src={landingVideo}
          autoPlay
          loop
          muted
        />
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