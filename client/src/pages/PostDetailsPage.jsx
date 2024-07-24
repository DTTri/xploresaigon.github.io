import Proptypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useTranslation } from '../i18n';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import PostItem from '../components/PostItem';
import Comment from '../components/Comment';
import ViewAllCommentsPopup from '../components/ViewAllCommentsPopup';
import { useState } from 'react';
import WriteCommentPopup from '../components/WriteCommentPopup';
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
    title: 'Landmark 81 -  tòa nhà chọc trời tại Thành phố Hồ Chí Minh',
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
      'Landmark 81 là một biểu tượng kiến trúc nổi bật tại Thành phố Hồ Chí Minh, Việt Nam. Được hoàn thành vào năm 2018, tòa nhà này có chiều cao 461,2 mét với 81 tầng, trở thành tòa nhà cao nhất Việt Nam và Đông Nam Á. Nằm trong khu đô thị Vinhomes Central Park, Landmark 81 không chỉ là một điểm nhấn về mặt kiến trúc mà còn là một biểu tượng của sự phát triển và hiện đại hóa của thành phố.\n\nTòa nhà Landmark 81 được thiết kế bởi công ty kiến trúc Atkins và xây dựng bởi Tập đoàn Coteccons. Công trình này bao gồm nhiều tiện ích đa dạng như khách sạn, căn hộ cao cấp, trung tâm thương mại, văn phòng, và khu vui chơi giải trí. Với thiết kế hiện đại và tiện nghi cao cấp, Landmark 81 đã thu hút nhiều du khách và người dân địa phương đến tham quan và trải nghiệm.\n\nLandmark 81 không chỉ nổi bật với kiến trúc độc đáo mà còn mang đến nhiều dịch vụ và tiện ích cao cấp. Du khách có thể tận hưởng không gian mua sắm tại trung tâm thương mại Vincom Center, thưởng thức ẩm thực tại các nhà hàng sang trọng, và chiêm ngưỡng toàn cảnh thành phố từ đài quan sát SkyView trên tầng cao nhất. Với những tiện ích và dịch vụ hàng đầu, Landmark 81 đã trở thành một điểm đến hấp dẫn, thu hút sự quan tâm của cả người dân địa phương và du khách quốc tế.',
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
        likes: 40,
        content:
          'Bài viết khá hay và chi tiết, mình đã đến đây và cảm thấy rất hài lòng với dịch vụ, mọi người nên ghé thử nơi này!',
      },
      {
        id: 1,
        name: 'Nguyen Van A',
        reviewDate: '01/07/2024',
        avatar: '/images/about-us/poster-2.jpg',
        likes: 40,
        content:
          'Bài viết khá chi tiết, mình đã đến đây và cảm thấy rất hài lòng với dịch vụ, mọi người nên ghé thử nơi này!',
      },
      {
        id: 1,
        name: 'Nguyen Van A',
        reviewDate: '01/07/2024',
        avatar: '/images/about-us/poster-2.jpg',
        likes: 40,
        content:
          'Bài viết khá chi tiết, mình đã đến đây và cảm thấy rất hài lòng với dịch vụ, mọi người nên ghé thử nơi này!',
      },
      {
        id: 1,
        name: 'Nguyen Van A',
        reviewDate: '01/07/2024',
        avatar: '/images/about-us/poster-2.jpg',
        likes: 40,
        content:
          'Bài viết khá chi tiết, mình đã đến đây và cảm thấy rất hài lòng với dịch vụ, mọi người nên ghé thử nơi này!',
      },
      {
        id: 1,
        name: 'Nguyen Van A',
        reviewDate: '01/07/2024',
        avatar: '/images/about-us/poster-2.jpg',
        likes: 40,
        content:
          'Bài viết khá chi tiết, mình đã đến đây và cảm thấy rất hài lòng với dịch vụ, mọi người nên ghé thử nơi này!',
      },
      {
        id: 1,
        name: 'Nguyen Van A',
        reviewDate: '01/07/2024',
        avatar: '/images/about-us/poster-2.jpg',
        likes: 40,
        content:
          'Bài viết khá chi tiết, mình đã đến đây và cảm thấy rất hài lòng với dịch vụ, mọi người nên ghé thử nơi này!',
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

  const [isViewAllCommentsPopupOpen, setIsViewAllCommentsPopupOpen] =
    useState(false);
  const handleOpenViewAllCommentsPopup = () => {
    setIsViewAllCommentsPopupOpen(true);
  };
  const handleCloseViewAllCommentsPopup = () => {
    setIsViewAllCommentsPopupOpen(false);
  };

  const [isWriteCommentPopupOpen, setIsWriteCommentPopupOpen] = useState(false);
  const handleOpenWriteCommentPopup = () => {
    setIsWriteCommentPopupOpen(true);
  };
  const handleCloseWriteCommentPopup = () => {
    setIsWriteCommentPopupOpen(false);
  };
  return (
    <>
      <div className='post-details-page px-28 py-6 bg-background dark:bg-darkBackground'>
        <h1 className='text-4xl font-bold mb-3 dark:text-white'>
          {post.title}
        </h1>
        <div className='information--container flex justify-between flex-wrap mb-8'>
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
              <span>
                {t('post-details.posted-date')}: {post.postedDate}
              </span>
            </div>
            <div className='information--items'>
              <box-icon name='mouse-alt'></box-icon>
              <span>
                {t('post-details.views')}: {post.views}
              </span>
            </div>
            <div className='information--items'>
              <box-icon name='message-alt-edit'></box-icon>
              <span>
                {t('post-details.comments')}: {post.reviews}
              </span>
            </div>
          </div>

          <div className='information--block buttons--container basis-1/6'>
            <button className='information--items information__buttons'>
              <box-icon name='heart' size='sm'></box-icon>
              <span>{t('post-details.like')}</span>
            </button>
            <button className='information--items information__buttons'>
              <box-icon name='share' size='sm'></box-icon>
              <span>{t('post-details.share')}</span>
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

        <div className='introduction--container px-6 pt-4 pb-10 mb-8 relative shadow-md w-full rounded-2xl bg-white dark:bg-secondDarkBackground dark:text-white'>
          <h2 className='text-3xl font-bold my-2'>
            {t('post-details.introduction')}
          </h2>
          <hr className='mb-4' />
          <div className='introduction--general px-2 mb-4'>
            <h3 className='text-2xl font-medium mb-1'>
              {t('post-details.general')}
            </h3>
            <p
              className='text-xl'
              dangerouslySetInnerHTML={{
                __html: post.introduction.replace(/\n/g, '<br>'),
              }}
            />
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

        <div className='review--container px-6 py-4 mb-8 relative shadow-md w-full rounded-2xl bg-white dark:bg-secondDarkBackground dark:text-white'>
          <button
            className='absolute top-4 right-12 bg-primary text-black font-semibold text-lg px-2 py-1 rounded-lg'
            onClick={handleOpenWriteCommentPopup}
          >
            Viết bình luận
          </button>
          <h2 className='text-3xl font-bold my-2'>
            {t('post-details.comment')}
          </h2>
          <hr className='mb-4' />

          <div className='comment--container flex flex-col gap-1 mb-4'>
            <Comment comment={post.commentsList[0]} />
            <Comment comment={post.commentsList[0]} />
            <Comment comment={post.commentsList[0]} />
          </div>
          <button
            className='text-textSecondary'
            onClick={handleOpenViewAllCommentsPopup}
            //
          >
            Xem tất cả đánh giá
          </button>
        </div>

        <div className='other-posts--container px-6 pt-4 pb-8 mb-8 relative shadow-md w-full rounded-2xl bg-white dark:bg-secondDarkBackground dark:text-white'>
          <h2 className='text-3xl font-bold my-2'>
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
      {isViewAllCommentsPopupOpen && (
        <ViewAllCommentsPopup
          comments={post.commentsList}
          onClose={handleCloseViewAllCommentsPopup}
        />
      )}
      {isWriteCommentPopupOpen && (
        <WriteCommentPopup onClose={handleCloseWriteCommentPopup} post={post} />
      )}
    </>
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
