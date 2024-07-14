import { useTranslation } from '../../i18n';

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <>
      <div className='min-h-screen flex items-center justify-between bg-yellow-100'>
        <div className='flex flex-col'>
          <h1 className=''>{t('about-us.introduction.title')}</h1>
          <p className=''>{t('about-us.introduction.content')}</p>
        </div>
        <div className=''>
          <img src='/images/about-us/poster-1.jpg' alt='Introduction' />
        </div>
      </div>
    </>
  );
}
