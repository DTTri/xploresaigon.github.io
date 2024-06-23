import './App.css'
import { useTranslation } from 'react-i18next';
import './i18n';
function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <header>
      <h1>{t('title')}</h1>
      <nav>
        <ul>
          <li><a href="#">{t('nav.explore')}</a></li>
        </ul>
      </nav>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
      <h1>Hello</h1>
    </header>
  )
}

export default App
