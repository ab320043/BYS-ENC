import { Routes, Route } from 'react-router-dom'
import PageHome from '../src/Main/HomePage'
import InstagramPage from './Main/instagramPage';
import SnapchatPage from './Main/snapchatPage';
import YouTubePage from './Main/youtubePage';
import XPage from './Main/xPage';
import FaqPage from './Main/faqPage';
// import MainPage from '../Main/MainPage';
import Footer from './Compnents/footer';

const App = () => {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<PageHome />} />
        {/* <Route path="/main" element={<MainPage />} /> */}
        <Route path="/instagram-terms" element={<InstagramPage />} />
        <Route path="/snapchat-terms" element={<SnapchatPage />} />
        <Route path="/x-terms" element={<XPage />} />
        <Route path="/youtube-terms" element={<YouTubePage />} />
        <Route path="/faq-page" element={<FaqPage />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App