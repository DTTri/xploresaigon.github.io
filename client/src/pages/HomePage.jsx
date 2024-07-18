import CategoryBar from '../components/CategoryBar';
import FilterBar from '../components/FilterBar';
import PostsGallery from '../components/PostsGallery';
import { useTranslation } from '../i18n';

export default function HomePage() {
  const { t } = useTranslation();

  // hardcode post list
  const postList = [
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
  ];
  return (
    <>
      <div className='home-page flex flex-col px-10'>
        <h1 className='text-center text-4xl font-bold mt-10 mb-10'>
          {t('title')}
        </h1>
        <CategoryBar />
        <FilterBar />
        <PostsGallery posts={postList} />
      </div>
    </>
  );
}
