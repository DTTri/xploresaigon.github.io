import { useTranslation } from '../i18n';

export default function FilterBar() {
  const { t } = useTranslation();

  return (
    <div className='filter-bar flex justify-center gap-4 p-4 px-12 '>
      {/* Search Input */}
      <div className='filters filters__search basis-1/3'>
        <box-icon name='search' class='absolute left-3'></box-icon>
        <input
          type='text'
          placeholder={t('filters.search')}
          className='pl-8 outline-none w-full bg-transparent'
        />
      </div>

      {/* ComboBox 1 */}
      <div className='filters basis-1/6 '>
        <box-icon name='home' class='absolute left-3'></box-icon>
        <select name='district' className='filters--select'>
          <option value=''>{t('filters.district')}</option>
        </select>
      </div>

      {/* ComboBox 2 */}
      <div className='filters basis-1/6'>
        <box-icon name='sort' class='absolute left-3'></box-icon>
        <select name='sort-by' className='filters--select'>
          <option value=''>{t('filters.sort.newest')}</option>
        </select>
      </div>

      {/* ComboBox 3 */}
      <div className='filters basis-1/6'>
        <box-icon name='filter-alt' class='absolute left-3'></box-icon>
        <select name='other-filter' className='filters--select'>
          <option value=''>{t('filters.other')}</option>
        </select>
      </div>
    </div>
  );
}
