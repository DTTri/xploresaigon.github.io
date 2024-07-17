import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import PostDetailsPage from './pages/PostDetailsPage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/about-us' element={<AboutUsPage />} />
      <Route path='/post/:postId' element={<PostDetailsPage />} />
    </Routes>
  );
}

export default App;
