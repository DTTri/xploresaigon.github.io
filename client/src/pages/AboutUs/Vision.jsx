import { useTranslation } from '../../i18n';

export default function Vision() {
  const { t } = useTranslation();
  return (
    <>
      <div className='h-screen min-h-[520px] flex items-center justify-between flex-wrap overflow-hidden dark:text-white  '>
        <div className='vision--image basis-1/2'>
          <img
            className='h-screen max-h-screen rounded-r-poster'
            src='/images/about-us/poster-2.jpg'
            alt='Introduction'
          />
        </div>
        <div className='vision--content flex flex-col gap-8 basis-1/2 pl-28'>
          <h1 className='w-3/5 text-5xl font-bold'>
            {t('about-us.vision.title')}
          </h1>
          <p className='w-5/6 text-xl font-medium'>
            {t('about-us.vision.content')}
          </p>
        </div>
      </div>
    </>
  );
}
