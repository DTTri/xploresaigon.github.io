import { useTranslation } from '../i18n';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('isDarkMode', newDarkMode);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode') === 'true';
    setIsDarkMode(savedDarkMode);

    if (savedDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    const updateBoxIconsColor = () => {
      const boxIcons = document.querySelectorAll('box-icon');
      boxIcons.forEach((icon) => {
        icon.setAttribute('color', isDarkMode ? 'white' : 'black');
      });
    };

    // Update box-icons color initially
    updateBoxIconsColor();

    const observer = new MutationObserver(updateBoxIconsColor);
    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [isDarkMode]);

  return (
    <>
      <header className='px-12 py-4 flex justify-between bg-background dark:bg-darkBackground'>
        <a href=''>XploreSaigon</a>

        <div className='flex gap-10 dark:text-white'>
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
            <div className='settings-menu absolute top-full right-8 bg-white border dark:bg-secondDarkBackground dark:text-white border-gray-400 shadow-md rounded-xl z-50 w-40 p-2 flex flex-col gap-1'>
              <div className='settings-menu--item'>
                <span>{t('settings.dark-mode')}</span>
                <input
                  type='checkbox'
                  id='dark-mode__toggle'
                  onChange={toggleDarkMode}
                  checked={isDarkMode}
                />
                <label htmlFor='dark-mode__toggle'></label>
              </div>
              <div className='settings-menu--item'>
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
