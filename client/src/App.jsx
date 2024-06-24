import './App.css'
import { useTranslation } from 'react-i18next';
import './i18n';
function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <header className="px-12 py-8 flex justify-between">
      <a href="">
        XploreSaigon
      </a>
      <div className='flex gap-10'>
        <div><a href="" className='header-nav'>{t('nav.explore')}</a></div>
        <div><a href="" className='header-nav'>{t('nav.about')}</a></div>
      </div>
      <div className='flex pr-12 gap-4'>
        <button>
        <box-icon name='cog' size="md" ></box-icon>

        </button>

        <button>
        <box-icon name='log-in-circle' size="md"></box-icon>
        </button>
      </div>
    </header>
  )
}

export default App
