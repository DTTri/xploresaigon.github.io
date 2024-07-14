import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/about-us' element={<AboutUsPage />} />
    </Routes>
  );
}

export default App;
