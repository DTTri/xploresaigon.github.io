import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import PostDetailsPage from './pages/PostDetailsPage';
import Header from './components/Header';
import AdminPage from './pages/AdminPage';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/post/:postId' element={<PostDetailsPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
