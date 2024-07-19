import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function PostItem({ post }) {
  return (
    <Link to={`/post/${post.id}`} className='post-item'>
      <div className='gallery__item overflow-hidden'>
        <div className='gallery__item--image-wrapper relative w-full overflow-hidden pt-full'>
          <img
            src='/images/about-us/poster-1.jpg'
            alt={post.title}
            className='gallery__item--image absolute top-0 left-0 w-full object-cover rounded-xl'
          />
        </div>
        <div className='gallery__item--content pt-1 overflow-hidden'>
          <h3 className='text-lg font-semibold pl-1 line-clamp-2'>
            {post.title}
          </h3>
          <div className='flex items-center gap-1'>
            <box-icon name='map' size='sm'></box-icon>
            <p className='text-lg line-clamp-1'>{post.address}</p>
          </div>
          <div className='flex items-center gap-1'>
            <box-icon name='mouse-alt' size='sm'></box-icon>
            <p className='text-lg line-clamp-1'>{post.views} lượt truy cập</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

PostItem.propTypes = {
  post: Proptypes.object,
};
