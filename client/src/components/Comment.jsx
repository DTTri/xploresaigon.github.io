import Proptypes from 'prop-types';

export default function Comment({ comment }) {
  return (
    <div className='comment--items mb-4'>
      <div className='comment--user'>
        <img src={comment.avatar} alt='User Avatar' className='' />
        <div className='comment--user__info'>
          <h3 className=''>{comment.name}</h3>
          <span>{comment.reviewDate}</span>
        </div>
      </div>
      <p className='comment--content mb-1'>{comment.content}</p>
      <button className='comment__button--like flex items-center gap-1'>
        <box-icon name='heart'></box-icon>
        <span>{comment.likes}</span>
      </button>
    </div>
  );
}

Comment.propTypes = {
  comment: Proptypes.object.isRequired,
};
