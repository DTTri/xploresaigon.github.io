import propTypes from 'prop-types';
import Comment from './Comment';
export default function ViewAllCommentsPopup({ comments, onClose }) {
  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='p-4 relative bg-background rounded-3xl shadow-lg overflow-hidden w-full max-w-4xl h-[480px]'>
        <button className='absolute top-2 right-2 z-50' onClick={onClose}>
          <box-icon
            name='x'
            type='regular'
            size='md'
            color='#343841'
          ></box-icon>
        </button>
        <div className='comment--container'>
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
