import { useTranslation } from '../../i18n';

export default function Mission() {
  const { t } = useTranslation();
  return (
    <>
      <div className='h-screen min-h-[520px] relative'>
        <div className='mission--image absolute'>
          <img
            className='h-screen min-h-[520px] w-screen object-cover opacity-70'
            src='/images/about-us/poster-4.jpg'
            alt='Mission'
          />
        </div>
        <div className='mission--content absolute w-1/2 pt-20 flex flex-col items-center gap-8'>
          <h1 className='text-5xl font-bold'>{t('about-us.mission.title')}</h1>
          <p className='text-xl font-medium w-2/3'>
            {t('about-us.mission.content')}
          </p>
        </div>
      </div>
    </>
  );
}
