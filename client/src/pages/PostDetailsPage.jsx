import Proptypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useTranslation } from '../i18n';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import PostItem from '../components/PostItem';
const NextArrow = (props) => {
  const { arrowClassName, arrowStyle, arrowOnClick } = props;
  return (
    <div
      className={`${arrowClassName} rounded-full bg-white`}
      style={{ ...arrowStyle, display: 'block' }}
    >
      <box-icon name='chevron-right' onClick={arrowOnClick}></box-icon>
    </div>
  );
};

const PrevArrow = (props) => {
  const { arrowClassName, arrowStyle, arrowOnClick } = props;
  return (
    <div
      className={`${arrowClassName} rounded-full bg-white`}
      style={{ ...arrowStyle, display: 'block' }}
      onClick={arrowOnClick}
    >
      <box-icon name='chevron-left'></box-icon>
    </div>
  );
};

export default function PostDetailsPage() {
  const { postId } = useParams();

  const { t } = useTranslation();
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
    introduction:
      'Bánh xèo ở quán không chỉ hấp dẫn người ăn bởi màu vàng đặc trưng mà còn khiến bạn ngây ngất vì hương vị thơm ngon, đậm đà của nó. Vẫn với tép tươi, thịt ba rọi, giá sống, củ hành, phần nhân bánh ở miền Nam đặc biệt có thêm đậu xanh nên béo và bùi hơn. Kích thước của chiếc bánh xèo khá to, người đầu bếp tại đây khéo léo đổ bột trên từng chiếc khuôn để tạo  cho bánh có lớp rìa mỏng tang và giòn xốp, mãn nhãn cả về phần nhìn lẫn thưởng thức. Chiếc bánh ra lò có kích thước bằng cái đĩa lớn, được tráng mỏng, vàng giòn, không ngấm nhiều dầu chiên. Mỗi chiếc bánh sau khi tráng xong nóng hổi, thơm phức, rìa bánh vàng giòn, nhân bánh trải đều được nhìn thấy rõ trên thân bánh đã được gập đôi sau khi chiên. Lắng tai nghe tiếng rôm rốp giòn tan khi bẻ và nhai bánh, khứu giác hít hà hương thơm lựng, mắt nhìn được đủ sắc màu vàng óng của bánh, xanh mượt mà của rau và đỏ au của nước mắm ớt. ',
    contact: {
      phone: '0123456789',
      email: 'example@gmail.com',
      website: 'https://xploresaigon.me',
      facebook: 'https://facebook.com/xploresaigon',
    },
    commentsList: [
      {
        id: 1,
        name: 'Nguyen Van A',
        reviewDate: '01/07/2024',
        avatar: '/images/about-us/poster-2.jpg',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
      },
      {
        id: 1,
        name: 'Nguyen Van A',
        reviewDate: '01/07/2024',
        avatar: '/images/about-us/poster-2.jpg',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
      },
      {
        id: 1,
        name: 'Nguyen Van A',
        reviewDate: '01/07/2024',
        avatar: '/images/about-us/poster-2.jpg',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
      },
      {
        id: 1,
        name: 'Nguyen Van A',
        reviewDate: '01/07/2024',
        avatar: '/images/about-us/poster-2.jpg',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
      },
      {
        id: 1,
        name: 'Nguyen Van A',
        reviewDate: '01/07/2024',
        avatar: '/images/about-us/poster-2.jpg',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
      },
    ],
    otherPosts: [
      {
        id: 1,
        title:
          'Landmark 81 sieu sang chanh danh cho gioi thuong luu, phai ghe it nhat 1 lan trong doi',
        address: 'Nguyễn Huệ, Quận 1',
        imageUrl:
          'https://i.pinimg.com/564x/c9/7e/b4/c97eb4364b2f247a03427c9ed3e1a7ba.jpg',
        views: 500,
      },
      {
        id: 1,
        title:
          'Landmark 81 sieu sang chanh danh cho gioi thuong luu, phai ghe it nhat 1 lan trong doi',
        address: 'Nguyễn Huệ, Quận 1',
        imageUrl:
          'https://i.pinimg.com/564x/c9/7e/b4/c97eb4364b2f247a03427c9ed3e1a7ba.jpg',
        views: 500,
      },
      {
        id: 1,
        title:
          'Landmark 81 sieu sang chanh danh cho gioi thuong luu, phai ghe it nhat 1 lan trong doi',
        address: 'Nguyễn Huệ, Quận 1',
        imageUrl:
          'https://i.pinimg.com/564x/c9/7e/b4/c97eb4364b2f247a03427c9ed3e1a7ba.jpg',
        views: 500,
      },
      {
        id: 1,
        title:
          'Landmark 81 sieu sang chanh danh cho gioi thuong luu, phai ghe it nhat 1 lan trong doi',
        address: 'Nguyễn Huệ, Quận 1',
        imageUrl:
          'https://i.pinimg.com/564x/c9/7e/b4/c97eb4364b2f247a03427c9ed3e1a7ba.jpg',
        views: 500,
      },
      {
        id: 1,
        title:
          'Landmark 81 sieu sang chanh danh cho gioi thuong luu, phai ghe it nhat 1 lan trong doi',
        address: 'Nguyễn Huệ, Quận 1',
        imageUrl:
          'https://i.pinimg.com/564x/c9/7e/b4/c97eb4364b2f247a03427c9ed3e1a7ba.jpg',
        views: 500,
      },
      {
        id: 1,
        title:
          'Landmark 81 sieu sang chanh danh cho gioi thuong luu, phai ghe it nhat 1 lan trong doi',
        address: 'Nguyễn Huệ, Quận 1',
        imageUrl:
          'https://i.pinimg.com/564x/c9/7e/b4/c97eb4364b2f247a03427c9ed3e1a7ba.jpg',
        views: 500,
      },
      {
        id: 1,
        title:
          'Landmark 81 sieu sang chanh danh cho gioi thuong luu, phai ghe it nhat 1 lan trong doi',
        address: 'Nguyễn Huệ, Quận 1',
        imageUrl:
          'https://i.pinimg.com/564x/c9/7e/b4/c97eb4364b2f247a03427c9ed3e1a7ba.jpg',
        views: 500,
      },
      {
        id: 1,
        title:
          'Landmark 81 sieu sang chanh danh cho gioi thuong luu, phai ghe it nhat 1 lan trong doi',
        address: 'Nguyễn Huệ, Quận 1',
        imageUrl:
          'https://i.pinimg.com/564x/c9/7e/b4/c97eb4364b2f247a03427c9ed3e1a7ba.jpg',
        views: 500,
      },
      {
        id: 1,
        title:
          'Landmark 81 sieu sang chanh danh cho gioi thuong luu, phai ghe it nhat 1 lan trong doi',
        address: 'Nguyễn Huệ, Quận 1',
        imageUrl:
          'https://i.pinimg.com/564x/c9/7e/b4/c97eb4364b2f247a03427c9ed3e1a7ba.jpg',
        views: 500,
      },
      {
        id: 1,
        title:
          'Landmark 81 sieu sang chanh danh cho gioi thuong luu, phai ghe it nhat 1 lan trong doi',
        address: 'Nguyễn Huệ, Quận 1',
        imageUrl:
          'https://i.pinimg.com/564x/c9/7e/b4/c97eb4364b2f247a03427c9ed3e1a7ba.jpg',
        views: 500,
      },
    ],
  };
  const slickSettings = {
    dots: true,
    infinite: true,
    draggable: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
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
    <div className='post-details-page px-28 py-6 bg-background'>
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

      <div className='images--container flex justify-between gap-2 h-96 overflow-hidden mb-8'>
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

      <div className='introduction--container px-6 pt-4 pb-10 mb-8 relative shadow-md w-full rounded-2xl bg-white'>
        <h2 className='text-3xl font-bold mb-1'>
          {t('post-details.introduction')}
        </h2>
        <hr className='mb-4' />
        <div className='introduction--general px-2 mb-4'>
          <h3 className='text-2xl font-medium mb-1'>
            {t('post-details.general')}
          </h3>
          <p className='text-xl'>{post.introduction}</p>
        </div>
        <div className='introduction--contact px-2'>
          <h3 className='text-2xl font-medium mb-1'>
            {t('post-details.contact')}
          </h3>
          <div className='contact--container flex flex-col gap-1'>
            <div className='contact--items'>
              <box-icon name='info-circle'></box-icon>
              <span>
                Cách thức đặt hàng: trực tiếp/ gọi điện thoại/ ứng dụng
              </span>
            </div>
            <div className='contact--items'>
              <box-icon name='phone'></box-icon>
              <span>Hotline: {post.contact.phone}</span>
            </div>
            <div className='contact--items'>
              <box-icon name='envelope'></box-icon>
              <span>Email: {post.contact.email}</span>
            </div>
            <div className='contact--items'>
              <box-icon name='globe'></box-icon>
              <span>Website: {post.contact.website}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='review--container px-6 py-4 mb-8 relative shadow-md w-full rounded-2xl bg-white'>
        <button className='absolute top-3 right-12 bg-primary text-black font-semibold text-lg px-2 py-1 rounded-lg'>
          Viết bình luận
        </button>
        <h2 className='text-3xl font-bold mb-1'>{t('post-details.comment')}</h2>
        <hr className='mb-4' />

        <div className='comment--container flex flex-col gap-1 mb-4'>
          <div className='comment--items'>
            <div className='comment--user'>
              <img
                src={post.commentsList[0].avatar}
                alt='User Avatar'
                className=''
              />
              <div className='comment--user__info'>
                <h3 className=''>{post.commentsList[0].name}</h3>
                <span>{post.commentsList[0].reviewDate}</span>
              </div>
            </div>
            <p className='comment--content'>{post.commentsList[0].content}</p>
          </div>
          <div className='comment--items'>
            <div className='comment--user'>
              <img
                src={post.commentsList[0].avatar}
                alt='User Avatar'
                className=''
              />
              <div className='comment--user__info'>
                <h3 className=''>{post.commentsList[0].name}</h3>
                <span>{post.commentsList[0].reviewDate}</span>
              </div>
            </div>
            <p className='comment--content'>{post.commentsList[0].content}</p>
          </div>
          <div className='comment--items'>
            <div className='comment--user'>
              <img
                src={post.commentsList[0].avatar}
                alt='User Avatar'
                className=''
              />
              <div className='comment--user__info'>
                <h3 className=''>{post.commentsList[0].name}</h3>
                <span>{post.commentsList[0].reviewDate}</span>
              </div>
            </div>
            <p className='comment--content'>{post.commentsList[0].content}</p>
          </div>
        </div>
        <a className='text-textSecondary' href='#'>
          Xem tất cả đánh giá
        </a>
      </div>

      <div className='other-posts--container px-6 pt-4 pb-8 mb-8 relative shadow-md w-full rounded-2xl bg-white'>
        <h2 className='text-3xl font-bold mb-1'>
          {t('post-details.other-posts')}
        </h2>
        <hr className='mb-4' />
        <Slider {...slickSettings}>
          {post.otherPosts.map((otherPost) => (
            <div key={otherPost.id} className='px-2'>
              <PostItem post={otherPost} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

PostDetailsPage.propTypes = {
  post: Proptypes.object,
};
NextArrow.propTypes = {
  arrowClassName: Proptypes.string,
  arrowStyle: Proptypes.object,
  arrowOnClick: Proptypes.func,
};
PrevArrow.propTypes = {
  arrowClassName: Proptypes.string,
  arrowStyle: Proptypes.object,
  arrowOnClick: Proptypes.func,
};
