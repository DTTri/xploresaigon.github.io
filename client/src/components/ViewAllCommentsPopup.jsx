import propTypes from 'prop-types';
import Comment from './Comment';
export default function ViewAllCommentsPopup({ comments, onClose }) {
  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='py-4 px-6 relative bg-background dark:bg-secondDarkBackground dark:text-white rounded-3xl shadow-lg overflow-hidden w-full max-w-4xl max-h-[480px]'>
        <button className='absolute top-2 right-2 z-50' onClick={onClose}>
          <box-icon
            name='x'
            type='regular'
            size='md'
            color='#343841'
          ></box-icon>
        </button>
        <div className='sort-by__combo-box w-1/5 relative flex items-center border border-gray-400 rounded-xl px-2 mb-4'>
          <box-icon name='sort' class='absolute left-3' size='sm'></box-icon>
          <select
            name='sort-by'
            className='filters--select w-full outline-none text-center text-base text-text dark:text-white bg-transparent pl-4'
          >
            <option value=''>Mới nhất</option>
          </select>
        </div>
        <div className='comment--container max-h-[400px] overflow-y-auto'>
          {comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

ViewAllCommentsPopup.propTypes = {
  comments: propTypes.array,
  onClose: propTypes.func,
};
