import { useRef } from "react";
import Header from '../Compnents/Header';
import MainPage from '../Main/MainPage';

const HomePage = () => {
    const bodyRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Header />

            <div className="spacer"></div>

            {/* BodyPage component */}
            <div ref={bodyRef} className="body-container">
                <MainPage/>
            </div>
        </>
    );
};

export default HomePage;