import { useTranslation } from '../../i18n';

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <>
      <div className='min-h-[520px] h-screen flex items-center justify-between flex-wrap overflow-hidden dark:text-white'>
        <div className='intro--content flex flex-col gap-6 basis-1/2 pl-28'>
          <h1 className='w-4/5 text-5xl font-bold'>
            {t('about-us.introduction.title')}
          </h1>
          <p className='w-full text-xl font-medium'>
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
