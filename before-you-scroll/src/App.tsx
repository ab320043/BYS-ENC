import { Routes, Route } from 'react-router-dom'
import PageHome from '../src/Main/HomePage'
import InstagramPage from './Main/instagramPage';
import SnapchatPage from './Main/snapchatPage';
import YouTubePage from './Main/youtubePage';
import FaqPage from './Main/faqPage';

const App = () => {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/instagram-terms" element={<InstagramPage />} />
        <Route path="/snapchat-terms" element={<SnapchatPage />} />
        <Route path="/youtube-terms" element={<YouTubePage />} />
        <Route path="/faq-page" element={<FaqPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  )
}

export default App