import { useState } from 'react';
import CreatePostPopup from '../../components/CreatePostPopup';

export default function PostsTab() {
  const district = [
    'Quận 1',
    'Quận 2',
    'Quận 3',
    'Quận 4',
    'Quận 5',
    'Quận 6',
    'Quận 7',
    'Quận 8',
    'Quận 9',
    'Quận 10',
    'Quận 11',
    'Quận 12',
    'Quận Bình Tân',
    'Quận Bình Thạnh',
    'Quận Gò Vấp',
    'Quận Phú Nhuận',
    'Quận Tân Bình',
    'Quận Tân Phú',
    'Quận Thủ Đức',
    'Huyện Bình Chánh',
    'Huyện Cần Giờ',
    'Huyện Củ Chi',
    'Huyện Hóc Môn',
    'Huyện Nhà Bè',
  ];

  const postsList = [
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
    {
      id: 1,
      date: '2024-10-10',
      title: 'Bài viết 1',
      author: 'Tường',
      category: 'Ăn uống',
      district: 'Quận 1',
      views: 100,
      comments: 10,
      likes: 50,
      shares: 20,
    },
  ];

  const [isCreatePostPopupOpen, setIsCreatePostPopupOpen] = useState(false);

  const handleOpenCreatePostPopup = () => {
    setIsCreatePostPopupOpen(true);
  };

  const handleCloseCreatePostPopup = () => {
    setIsCreatePostPopupOpen(false);
  };
  return (
    <div className='posts-tab'>
      <div className='filters--container flex gap-2 flex-wrap justify-between items-center'>
        <div className='filters--items filter--search-by-name'>
          <select
            name='searchByName'
            id='searchByName'
            className='filter--search-by-name__select'
          >
            <option value='title'>Tên bài viết</option>
            <option value='id'>ID</option>
          </select>
          <input
            type='text'
            className='filter--search-by-name__input min-w-80'
            placeholder='Tên bài viết/ID'
          />
        </div>
        <div className='filters--items filter--author'>
          <label htmlFor='author'>Tác giả</label>
          <input type='text' id='author' placeholder='Tác giả' />
        </div>
        <div className='filters--items filter--posted-date'>
          <label htmlFor='posted-date'>Khoảng thời gian đăng</label>
          <input type='date' id='posted-date' />
        </div>
        <div className='filters--items filter--category'>
          <label htmlFor='category'>Danh mục</label>
          <select name='category' id='category'>
            <option value='all'>Tất cả</option>
            <option value='food'>Ẩm thực</option>
            <option value='stay'>Lưu trú</option>
            <option value='visit'>Địa điểm tham quan</option>
            <option value='festival'>Lễ hội</option>
          </select>
        </div>
        <div className='filters--items filter--district'>
          <label htmlFor='district'>Quận/Huyện</label>
          <select name='district' id='district'>
            <option value='all'>Tất cả</option>
            {district.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className='filters--items filter--sort'>
          <label htmlFor='sort'>Sắp xếp theo</label>
          <select name='sort' id='sort'>
            <option value='newest'>Mới nhất</option>
            <option value='oldest'>Cũ nhất</option>
            <option value='most-viewed'>Nhiều lượt xem nhất</option>
            <option value='least-viewed'>Ít lượt xem nhất</option>
            <option value='most-liked'>Nhiều lượt thích nhất</option>
            <option value='least-liked'>Ít lượt thích nhất</option>
          </select>
        </div>
        <button
          className='new-post__button bg-primary font-bold p-2 rounded-md'
          onClick={() => handleOpenCreatePostPopup()}
        >
          Thêm bài viết mới
        </button>
      </div>
      <div className='posts-list-container mt-8  max-h-[400px] overflow-auto'>
        <table className='posts-list w-full'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ngày đăng</th>
              <th>Tiêu đề</th>
              <th>Người đăng</th>
              <th>Lĩnh vực</th>
              <th>Quận</th>
              <th>Xem</th>
              <th>Bình luận</th>
              <th>Yêu thích</th>
              <th>Chia sẻ</th>
            </tr>
          </thead>
          <tbody>
            {postsList.map((post) => (
              <tr key={post.id}>
                <td className=''>{post.id}</td>
                <td className='w-1/12'>{post.date}</td>
                <td className='w-3/12'>{post.title}</td>
                <td className='w-1/12'>{post.author}</td>
                <td className='w-1/12'>{post.category}</td>
                <td className='w-1/12'>{post.district}</td>
                <td className='w-1/12'>{post.views}</td>
                <td className='w-1/12'>{post.comments}</td>
                <td className='w-1/12'>{post.likes}</td>
                <td className='w-1/12'>{post.shares}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isCreatePostPopupOpen && (
        <CreatePostPopup onClose={() => handleCloseCreatePostPopup()} />
      )}
    </div>
  );
}
