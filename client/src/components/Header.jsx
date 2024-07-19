import { useTranslation } from '../i18n';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LoginPopup from './LoginPopup';
export default function Header() {
  const { t } = useTranslation();

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const handleLoginClick = () => {
    setIsLoginPopupOpen(true);
  };

  const handleCloseLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  return (
    <>
      <header className='px-12 py-4 flex justify-between bg-background'>
        <a href=''>XploreSaigon</a>

        <div className='flex gap-10'>
          <div>
            <Link to='/' className='header-nav'>
              {t('nav.explore')}
            </Link>
          </div>
          <div>
            <Link to='/about-us' href='' className='header-nav'>
              {t('nav.about')}
            </Link>
          </div>
        </div>

        <div className='flex gap-4'>
          <button>
            <box-icon name='cog' size='sm'></box-icon>
          </button>

          <button className='button--login' onClick={handleLoginClick}>
            <box-icon name='log-in-circle' size='sm'></box-icon>
          </button>
        </div>
      </header>
      {isLoginPopupOpen && <LoginPopup onClose={handleCloseLoginPopup} />}
    </>
  );
}
