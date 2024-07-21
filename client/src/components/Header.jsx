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

  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const handleSettingsClick = () => {
    setIsSettingsMenuOpen(!isSettingsMenuOpen);
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

        <div className='flex gap-4 relative'>
          <button className='button-settings' onClick={handleSettingsClick}>
            <box-icon name='cog' size='sm'></box-icon>
          </button>
          {isSettingsMenuOpen && (
            <div className='settings-menu absolute top-full right-8 bg-white border border-gray-400 shadow-md rounded-xl z-50 w-40 p-2 flex flex-col gap-1'>
              <div className='settings-menu--item dark-mode'>
                <span>{t('settings.dark-mode')}</span>
                <input type='checkbox' id='dark-mode__toggle' />
                <label htmlFor='dark-mode__toggle'></label>
              </div>
              <div className='settings-menu--item language'>
                <span>{t('settings.language')}</span>
              </div>
            </div>
          )}

          <button className='button--login' onClick={handleLoginClick}>
            <box-icon name='log-in-circle' size='sm'></box-icon>
          </button>
        </div>
      </header>
      {isLoginPopupOpen && <LoginPopup onClose={handleCloseLoginPopup} />}
    </>
  );
}
