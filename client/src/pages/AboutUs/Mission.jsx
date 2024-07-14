import { useTranslation } from '../../i18n';

export default function Mission() {
  const { t } = useTranslation();
  return (
    <>
      <div className='h-screen max-h-screen relative'>
        <div className='mission--image absolute'>
          <img
            className='h-screen w-screen object-cover'
            src='/images/about-us/poster-4.jpg'
            alt='Mission'
          />
        </div>
        <div className='mission--content absolute w-1/2 pt-20 flex flex-col items-center'>
          <h1 className='text-5xl font-bold'>{t('about-us.mission.title')}</h1>
          <p className='text-xl font-medium w-1/2'>
            {t('about-us.mission.content')}
          </p>
        </div>
      </div>
    </>
  );
}
