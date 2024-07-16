import Proptypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from '../i18n';
export default function LoginPopup({ onClose }) {
  const [isActive, setIsActive] = useState(false);

  const { t } = useTranslation();

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='relative bg-background rounded-3xl shadow-lg overflow-hidden w-full max-w-4xl min-h-[480px]'>
        <button className='absolute top-2 right-2 z-50' onClick={onClose}>
          <box-icon
            name='x'
            type='regular'
            size='md'
            color='#343841'
          ></box-icon>
        </button>
        <div
          className={`form-container sign-up ${
            isActive ? 'translate-x-full opacity-100 z-40' : 'opacity-0 z-10'
          }`}
        >
          <form className='form-container--form'>
            <h1 className=''>{t('login.sign-up.title')}</h1>
            <div className='social-icons'>
              <a href='#' className='icon'>
                <box-icon type='logo' name='google-plus'></box-icon>
              </a>
              <a href='#' className='icon'>
                <box-icon name='facebook' type='logo'></box-icon>
              </a>
            </div>
            <span className='form-container--form__other'>
              {t('login.sign-up.other')}
            </span>
            <input
              type='text'
              placeholder={t('login.sign-up.full-name')}
              className='form__inputs'
            />
            <input
              type='email'
              placeholder={t('login.sign-up.email')}
              className='form__inputs'
            />
            <input
              type='password'
              placeholder={t('login.sign-up.password')}
              className='form__inputs'
            />
            <input
              type='password'
              placeholder={t('login.sign-up.confirm-password')}
              className='form__inputs'
            />
            <button className='form__confirm-buttons' onClick=''>
              {t('login.sign-up.title')}
            </button>
          </form>
        </div>
        <div
          className={`form-container sign-in z-20 ${
            isActive ? 'translate-x-full opacity-0' : 'translate-x-0'
          }`}
        >
          <form className='form-container--form'>
            <h1 className=''>{t('login.sign-in.title')}</h1>
            <div className='social-icons'>
              <a href='#' className='icon'>
                <box-icon type='logo' name='google-plus'></box-icon>
              </a>
              <a href='#' className='icon'>
                <box-icon name='facebook' type='logo'></box-icon>
              </a>
            </div>
            <span className='form-container--form__other'>
              {t('login.sign-in.other')}
            </span>
            <input
              type='email'
              placeholder={t('login.sign-in.email')}
              className='form__inputs'
            />
            <input
              type='password'
              placeholder={t('login.sign-in.password')}
              className='form__inputs'
            />
            <a href='#' className='text-base text-textSecondary mt-2'>
              {t('login.sign-in.forgot-password')}
            </a>
            <button className='form__confirm-buttons' onClick=''>
              {t('login.sign-in.title')}
            </button>
          </form>
        </div>
        <div
          className={`toggle-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-300 ease-in-out z-40
            ${
              isActive
                ? '-translate-x-full rounded-r-poster'
                : 'translate-x-0 rounded-l-poster'
            }`}
        >
          <div
            className={`toggle bg-primary h-full bg-gradient-to-r from-primary to-blue-500 text-text absolute left-[-100%] h-full w-[200%] transition-all duration-300 ease-in-out ${
              isActive ? 'translate-x-1/2' : 'translate-x-0'
            }`}
          >
            <div
              className={`toggle-panel toggle-left ${
                isActive ? 'translate-x-0' : '-translate-x-mdouble'
              }`}
            >
              <h1 className='toggle-panel__title'>
                {t('login.sign-up.toggle.title')}
              </h1>
              <p className='toggle-panel__content'>
                {t('login.sign-up.toggle.content')}
              </p>
              <button
                className='toggle-panel--button'
                onClick={() => setIsActive(false)}
              >
                {t('login.sign-in.title')}
              </button>
            </div>
            <div
              className={`toggle-panel toggle-right right-0 ${
                isActive ? 'translate-x-double' : 'translate-x-0'
              }`}
            >
              <h1 className='toggle-panel__title'>
                {t('login.sign-in.toggle.title')}
              </h1>
              <p className='toggle-panel__content'>
                {t('login.sign-in.toggle.content')}
              </p>
              <button
                className='toggle-panel--button'
                onClick={() => setIsActive(true)}
              >
                {t('login.sign-up.title')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
LoginPopup.propTypes = {
  onClose: Proptypes.func.isRequired,
};
