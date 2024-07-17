import Proptypes from 'prop-types';
import { useParams } from 'react-router-dom';
export default function PostDetailsPage() {
  const { postId } = useParams();

  // hardcode post data
  const post = {
    id: postId,
    title:
      'Landmark 81 sieu sang chanh danh cho gioi thuong luu, phai ghe it nhat 1 lan trong doi',
    address: 'Nguyễn Huệ, Quận 1',
    category: 'Tham quan',
    postedDate: '01/07/2024',
    views: 500,
    reviews: 100,
    imagesList: [
      '/images/about-us/poster-1.jpg',
      '/images/about-us/poster-2.jpg',
      '/images/about-us/poster-2.jpg',
      '/images/about-us/poster-2.jpg',
      '/images/about-us/poster-2.jpg',
      '/images/about-us/poster-2.jpg',
    ],
    introduction: '',
    contact: {
      phone: '0123456789',
      email: 'example@gmail.com',
      website: 'https://xploresaigon.me',
      facebook: 'https://facebook.com/xploresaigon',
    },
    reviewsList: [
      {
        id: 1,
        name: 'Nguyen Van A',
        reviewDate: '01/07/2024',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
      },
      {
        id: 1,
        name: 'Nguyen Van A',
        reviewDate: '01/07/2024',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
      },
      {
        id: 1,
        name: 'Nguyen Van A',
        reviewDate: '01/07/2024',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
      },
      {
        id: 1,
        name: 'Nguyen Van A',
        reviewDate: '01/07/2024',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
      },
    ],
  };
  return (
    <div>
      <h1>{post.id}</h1>
    </div>
  );
}

PostDetailsPage.propTypes = {
  post: Proptypes.object,
};
