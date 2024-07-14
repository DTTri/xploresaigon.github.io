import { useTranslation } from '../../i18n';

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <>
      <div className='h-screen max-h-screen flex items-center justify-between flex-wrap overflow-hidden'>
        <div className='intro--content flex flex-col gap-8 basis-1/2 pl-28'>
          <h1 className='w-3/5 text-5xl font-bold'>
            {t('about-us.introduction.title')}
          </h1>
          <p className='w-5/6 text-xl font-medium'>
            {t('about-us.introduction.content')}
          </p>
        </div>
        <div className='intro--image basis-1/2 flex justify-end'>
          <img
            className='h-screen rounded-l-poster'
            src='/images/about-us/poster-1.jpg'
            alt='Introduction'
          />
        </div>
      </div>
    </>
  );
}
