import { useTranslation } from './i18n';
import { Link } from 'react-router-dom';
export default function Header() {
  const { t } = useTranslation();

  return (
    <header className='px-12 py-4 flex justify-between'>
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

      <div className='flex pr-12 gap-4'>
        <button>
          <box-icon name='cog' size='sm'></box-icon>
        </button>

        <button>
          <box-icon name='log-in-circle' size='sm'></box-icon>
        </button>
      </div>
    </header>
  );
}
