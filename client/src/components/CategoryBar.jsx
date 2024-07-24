import { useTranslation } from '../i18n';

export default function CategoryBar() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-center gap-1 border px-5 py-2 border-gray-700 rounded-3xl shadow-md m-auto bg-white dark:bg-secondDarkBackground dark:shadow-sky-950'>
      <a className='categories--a bg-primary rounded-3xl'>
        {t('categories.all')}
      </a>
      <a className='categories--a'>{t('categories.destination')}</a>
      <a className='categories--a'>{t('categories.food')}</a>
      <a className='categories--a'>{t('categories.stay')}</a>
      <a className='categories--a'>{t('categories.festival')}</a>
    </div>
  );
}
