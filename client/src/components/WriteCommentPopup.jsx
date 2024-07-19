import propTypes from 'prop-types';
import PostItem from './PostItem';
import { useTranslation } from '../i18n';
export default function WriteCommentPopup({ post, onClose }) {
  const { t } = useTranslation();

  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='px-10  relative bg-background rounded-3xl shadow-lg overflow-hidden w-full max-w-4xl max-h-[480px]'>
        <button className='absolute top-2 right-2 z-50' onClick={onClose}>
          <box-icon
            name='x'
            type='regular'
            size='md'
            color='#343841'
          ></box-icon>
        </button>
        <div className='buttons--container absolute right-16 bottom-4 flex gap-4'>
          <button
            onClick={onClose}
            className='button--cancel text-lg font-semibold bg-white text-text border border-primary px-4 py-1 rounded-lg shadow-md'
          >
            {t('post-details.close')}
          </button>
          <button
            onClick={onClose}
            className='button--submit text-lg font-semibold bg-primary text-text px-4 py-1 rounded-lg shadow-md'
          >
            {t('post-details.submit-comment')}
          </button>
        </div>
        <div className='flex justify-start h-full'>
          <div className='post--container basis-1/3 py-12'>
            <PostItem post={post} />
          </div>
          <hr className='direction-vertical bg-gray-800 w-0.5 h-screen mx-8' />
          <div className='py-8 px-1 basis-2/3 overflow-hidden max-h-full'>
            <h3 className='text-2xl font-semibold mb-4'>
              {t('post-details.write-comment')}
            </h3>
            <textarea className='resize-none w-full h-1/2 p-4 bg-white rounded-2xl shadow-lg'></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

WriteCommentPopup.propTypes = {
  post: propTypes.object,
  onClose: propTypes.func,
};
