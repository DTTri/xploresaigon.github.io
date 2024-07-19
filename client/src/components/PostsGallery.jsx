import Proptypes from 'prop-types';
import PostItem from './PostItem';
export default function PostsGallery({ posts }) {
  return (
    <>
      <div className='gallery grid grid-cols-4 px-14 gap-6 py-4'>
        {posts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </div>
    </>
  );
}

PostsGallery.propTypes = {
  posts: Proptypes.array,
};
