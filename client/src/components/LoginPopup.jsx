import Proptypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from '../i18n';
export default function LoginPopup({ onClose }) {
  const [isActive, setIsActive] = useState(false);

  const { t } = useTranslation();

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='relative bg-background rounded-3xl shadow-lg overflow-hidden w-full max-w-3xl min-h-[480px]'>
        <button className='absolute top-2 right-2 z-50' onClick={onClose}>
          <box-icon
            name='x'
            type='regular'
            size='md'
            color='#343841'
          ></box-icon>
        </button>
        <div
          className={`form-container sign-up absolute top-0 h-full w-1/2 opacity-0 transition-all duration-600 ease-in-out z-10 ${
            isActive ? 'translate-x-full opacity-100 z-50' : 'opacity-0 z-10'
          }`}
        >
          <form className='flex flex-col items-center justify-center h-full p-10'>
            <h1 className='text-2xl font-bold mb-4'>
              {t('login.sign-up.title')}
            </h1>
            <div className='social-icons flex space-x-3 mb-4'>
              <a
                href='#'
                className='icon border border-gray-300 rounded-full flex items-center justify-center w-10 h-10'
              >
                <box-icon type='logo' name='google-plus'></box-icon>
              </a>
              <a
                href='#'
                className='icon border border-gray-300 rounded-full flex items-center justify-center w-10 h-10'
              >
                <box-icon name='facebook' type='logo'></box-icon>
              </a>
            </div>
            <span className='text-sm mb-4 text-textSecondary'>
              {t('login.sign-up.other')}
            </span>
            <input
              type='text'
              placeholder={t('login.sign-up.full-name')}
              className='bg-input border-none mb-2 p-2 rounded w-full'
            />
            <input
              type='email'
              placeholder={t('login.sign-up.email')}
              className='bg-input border-none mb-2 p-2 rounded w-full'
            />
            <input
              type='password'
              placeholder={t('login.sign-up.password')}
              className='bg-input border-none mb-2 p-2 rounded w-full'
            />
            <input
              type='password'
              placeholder={t('login.sign-up.confirm-password')}
              className='bg-input border-none mb-2 p-2 rounded w-full'
            />
            <button className='bg-primary text-text text-sm py-2 px-10 rounded font-semibold mt-4'>
              {t('login.sign-up.title')}
            </button>
          </form>
        </div>
        <div
          className={`form-container sign-in absolute top-0 h-full w-1/2 transition-all duration-600 ease-in-out ${
            isActive ? 'translate-x-full opacity-0' : 'translate-x-0 z-20'
          }`}
        >
          <form className='flex flex-col items-center justify-center h-full p-10'>
            <h1 className='text-2xl font-bold mb-4'>
              {t('login.sign-in.title')}
            </h1>
            <div className='social-icons flex space-x-3 mb-4'>
              <a
                href='#'
                className='icon border border-gray-300 rounded-full flex items-center justify-center w-10 h-10'
              >
                <box-icon type='logo' name='google-plus'></box-icon>
              </a>
              <a
                href='#'
                className='icon border border-gray-300 rounded-full flex items-center justify-center w-10 h-10'
              >
                <box-icon name='facebook' type='logo'></box-icon>
              </a>
            </div>
            <span className='text-sm mb-4 text-textSecondary'>
              {t('login.sign-in.other')}
            </span>
            <input
              type='email'
              placeholder={t('login.sign-in.email')}
              className='bg-input border-none mb-2 p-2 rounded w-full'
            />
            <input
              type='password'
              placeholder={t('login.sign-in.password')}
              className='bg-input border-none mb-2 p-2 rounded w-full'
            />
            <a href='#' className='text-sm text-textSecondary mt-2'>
              {t('login.sign-in.forgot-password')}
            </a>
            <button className='bg-primary text-text text-sm py-2 px-10 rounded font-semibold mt-4'>
              {t('login.sign-in.title')}
            </button>
          </form>
        </div>
        <div
          className={`toggle-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-600 ease-in-outz-50
            ${
              isActive
                ? '-translate-x-full rounded-r-poster'
                : 'translate-x-0 rounded-l-poster'
            }`}
        >
          <div
            className={`toggle bg-primary h-full bg-gradient-to-r from-primary to-blue-500 text-text absolute left-[-100%] h-full w-[200%] transition-all duration-600 ease-in-out ${
              isActive ? 'translate-x-1/2' : 'translate-x-0'
            }`}
          >
            <div
              className={`toggle-panel toggle-left absolute w-1/2 h-full flex flex-col items-center justify-center p-8 text-center top-0 transition-all duration-600 ease-in-out ${
                isActive ? 'translate-x-0' : '-translate-x-mdouble'
              }`}
            >
              <h1 className='text-2xl font-bold mb-4'>
                {t('login.sign-up.toggle.title')}
              </h1>
              <p className='text-sm mb-4'>
                {t('login.sign-up.toggle.content')}
              </p>
              <button
                className='bg-transparent border border-black text-black text-sm py-2 px-10 rounded font-semibold'
                onClick={() => setIsActive(false)}
              >
                {t('login.sign-up.title')}
              </button>
            </div>
            <div
              className={`toggle-panel toggle-right absolute w-1/2 h-full flex flex-col items-center justify-center p-8 text-center top-0 right-0 transition-all duration-600 ease-in-out ${
                isActive ? 'translate-x-double' : 'translate-x-0'
              }`}
            >
              <h1 className='text-2xl font-bold mb-4'>
                {t('login.sign-in.toggle.title')}
              </h1>
              <p className='text-sm mb-4'>
                {t('login.sign-in.toggle.content')}
              </p>
              <button
                className='bg-transparent border border-black text-black text-sm py-2 px-10 rounded font-semibold'
                onClick={() => setIsActive(true)}
              >
                {t('login.sign-in.title')}
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
