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
    openingHours: '8:00 - 22:00',
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

  let iconName;
  switch (post.category) {
    case 'Ăn uống':
      iconName = 'dish';
      break;
    case 'Tham quan':
      iconName = 'camera';
      break;
    case 'Lưu trú':
      iconName = 'bed';
      break;
    default:
      iconName = 'party';
      break;
  }

  return (
    <div className='post-details-page px-28 py-6'>
      <h1 className='text-3xl font-bold mb-3'>{post.title}</h1>
      <div className='information--container flex justify-between items-center mb-8'>
        <div className='information--block information--block-left basis-1/2'>
          <div className='information--items'>
            <box-icon name={iconName}></box-icon>
            <span>{post.category}</span>
          </div>
          <div className='information--items'>
            <box-icon name='map'></box-icon>
            <span>{post.address}</span>
          </div>
          <div className='information--items'>
            <box-icon name='door-open'></box-icon>
            <span>Mở cửa: {post.openingHours}</span>
          </div>
        </div>

        <div className='information--block information--block-right basis-1/3'>
          <div className='information--items'>
            <box-icon name='calendar'></box-icon>
            <span>Ngày đăng: {post.postedDate}</span>
          </div>
          <div className='information--items'>
            <box-icon name='mouse-alt'></box-icon>
            <span>Lượt xem: {post.views}</span>
          </div>
          <div className='information--items'>
            <box-icon name='message-alt-edit'></box-icon>
            <span>Lượt đánh giá: {post.reviews}</span>
          </div>
        </div>

        <div className='information--block buttons--container basis-1/6 pl-20'>
          <button className='information--items information__buttons'>
            <box-icon name='heart' size='sm'></box-icon>
            <span>Yêu thích</span>
          </button>
          <button className='information--items information__buttons'>
            <box-icon name='share' size='sm'></box-icon>
            <span>Chia sẻ</span>
          </button>
        </div>
      </div>

      <div className='images--container flex justify-between gap-2 h-96 overflow-hidden'>
        <div className='images--left basis-1/2 overflow-hidden rounded-lg'>
          <div className='images-wrapper'>
            <img
              src={post.imagesList[0]}
              alt={post.title}
              className='images--left__image'
            />
          </div>
        </div>

        <div className='images--right basis-1/2 grid grid-cols-2 gap-2 overflow-hidden'>
          <div className='images-wrapper'>
            <img
              src={post.imagesList[1]}
              alt={post.title}
              className='images--right__image'
            />
          </div>
          <div className='images-wrapper'>
            <img
              src={post.imagesList[2]}
              alt={post.title}
              className='images--right__image'
            />
          </div>
          <div className='images-wrapper'>
            <img
              src={post.imagesList[3]}
              alt={post.title}
              className='images--right__image'
            />
          </div>
          <div className='images-wrapper'>
            <img
              src={post.imagesList[4]}
              alt={post.title}
              className='images--right__image'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

PostDetailsPage.propTypes = {
  post: Proptypes.object,
};
