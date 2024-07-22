export default function UsersTab() {
  const usersList = [
    {
      id: 1,
      createdDate: '2024-09-01',
      name: 'Dương Thuận Trí',
      email: 'hehehehe@gmail.com',
      age: 20,
      gender: 'Nam',
      purposes: 'Du lịch',
      level: 'admin',
      interactions: 100,
    },
    {
      id: 1,
      createdDate: '2024-09-01',
      name: 'Dương Thuận Trí',
      email: 'hehehehe@gmail.com',
      age: 20,
      gender: 'Nam',
      purposes: 'Du lịch',
      level: 'admin',
      interactions: 100,
    },
    {
      id: 1,
      createdDate: '2024-09-01',
      name: 'Dương Thuận Trí',
      email: 'hehehehe@gmail.com',
      age: 20,
      gender: 'Nam',
      purposes: 'Du lịch',
      level: 'admin',
      interactions: 100,
    },
    {
      id: 1,
      createdDate: '2024-09-01',
      name: 'Dương Thuận Trí',
      email: 'hehehehe@gmail.com',
      age: 20,
      gender: 'Nam',
      purposes: 'Du lịch',
      level: 'admin',
      interactions: 100,
    },
    {
      id: 1,
      createdDate: '2024-09-01',
      name: 'Dương Thuận Trí',
      email: 'hehehehe@gmail.com',
      age: 20,
      gender: 'Nam',
      purposes: 'Du lịch',
      level: 'admin',
      interactions: 100,
    },
    {
      id: 1,
      createdDate: '2024-09-01',
      name: 'Dương Thuận Trí',
      email: 'hehehehe@gmail.com',
      age: 20,
      gender: 'Nam',
      purposes: 'Du lịch',
      level: 'admin',
      interactions: 100,
    },
    {
      id: 1,
      createdDate: '2024-09-01',
      name: 'Dương Thuận Trí',
      email: 'hehehehe@gmail.com',
      age: 20,
      gender: 'Nam',
      purposes: 'Du lịch',
      level: 'admin',
      interactions: 100,
    },
    {
      id: 1,
      createdDate: '2024-09-01',
      name: 'Dương Thuận Trí',
      email: 'hehehehe@gmail.com',
      age: 20,
      gender: 'Nam',
      purposes: 'Du lịch',
      level: 'admin',
      interactions: 100,
    },
    {
      id: 1,
      createdDate: '2024-09-01',
      name: 'Dương Thuận Trí',
      email: 'hehehehe@gmail.com',
      age: 20,
      gender: 'Nam',
      purposes: 'Du lịch',
      level: 'admin',
      interactions: 100,
    },
    {
      id: 1,
      createdDate: '2024-09-01',
      name: 'Dương Thuận Trí',
      email: 'hehehehe@gmail.com',
      age: 20,
      gender: 'Nam',
      purposes: 'Du lịch',
      level: 'admin',
      interactions: 100,
    },
    {
      id: 1,
      createdDate: '2024-09-01',
      name: 'Dương Thuận Trí',
      email: 'hehehehe@gmail.com',
      age: 20,
      gender: 'Nam',
      purposes: 'Du lịch',
      level: 'admin',
      interactions: 100,
    },
    {
      id: 1,
      createdDate: '2024-09-01',
      name: 'Dương Thuận Trí',
      email: 'hehehehe@gmail.com',
      age: 20,
      gender: 'Nam',
      purposes: 'Du lịch',
      level: 'admin',
      interactions: 100,
    },
    {
      id: 1,
      createdDate: '2024-09-01',
      name: 'Dương Thuận Trí',
      email: 'hehehehe@gmail.com',
      age: 20,
      gender: 'Nam',
      purposes: 'Du lịch',
      level: 'admin',
      interactions: 100,
    },
    {
      id: 1,
      createdDate: '2024-09-01',
      name: 'Dương Thuận Trí',
      email: 'hehehehe@gmail.com',
      age: 20,
      gender: 'Nam',
      purposes: 'Du lịch',
      level: 'admin',
      interactions: 100,
    },
    {
      id: 1,
      createdDate: '2024-09-01',
      name: 'Dương Thuận Trí',
      email: 'hehehehe@gmail.com',
      age: 20,
      gender: 'Nam',
      purposes: 'Du lịch',
      level: 'admin',
      interactions: 100,
    },
    {
      id: 1,
      createdDate: '2024-09-01',
      name: 'Dương Thuận Trí',
      email: 'hehehehe@gmail.com',
      age: 20,
      gender: 'Nam',
      purposes: 'Du lịch',
      level: 'admin',
      interactions: 100,
    },
  ];

  return (
    <div className='users-tab'>
      <div className='filters--container flex gap-1 flex-wrap items-center justify-between'>
        <div className='filters--items filter--search-by-nam'>
          <select
            name='searchByName'
            id='searchByName'
            className='filter--search-by-name__select'
          >
            <option value='name'>Họ tên</option>
            <option value='email'>Email</option>
            <option value='id'>ID</option>
          </select>
          <input
            type='text'
            className='filter--search-by-name__input min-w-40'
            placeholder='Họ tên/Email/ID'
          />
        </div>

        <div className='filters--items filter--created-date w-44'>
          <label htmlFor='posted-date'>Khoảng thời gian tạo</label>
          <input type='date' id='posted-date' />
        </div>
        <div className='filters--items filter--age w-20'>
          <label htmlFor='age'>Độ tuổi</label>
          <input type='number' id='age' />
        </div>
        <div className='filters--items filter--gender basis-1/12'>
          <label htmlFor='gender'>Giới tính</label>
          <select name='gender' id='gender'>
            <option value='all'>Tất cả</option>
            <option value='male'>Nam</option>
            <option value='female'>Nữ</option>
          </select>
        </div>
        <div className='filters--items filter--purposes'>
          <label htmlFor='purposes'>Mục đích sử dụng</label>
          <select name='purposes' id='purposes'>
            <option value='all'>Tất cả</option>
          </select>
        </div>
        <div className='filters--items filter--level'>
          <label htmlFor='level'>Cấp bậc</label>
          <select name='level' id='level'>
            <option value='all'>Tất cả</option>
            <option value='admin'>Bình thường</option>
            <option value='mod'>Đóng góp nhiều</option>
            <option value='user'>Admin</option>
          </select>
        </div>
        <div className='filters--items filter--sort'>
          <label htmlFor='sort'>Sắp xếp theo</label>
          <select name='sort' id='sort'>
            <option value='newest'>Tên</option>
            <option value='oldest'>Tạo gần đây</option>
            <option value='most-viewed'>Tạo lâu nhất</option>
            <option value='least-viewed'>Độ tuổi</option>
            <option value='most-liked'>Tương tác nhiều nhất</option>
            <option value='least-liked'>Tương tác ít nhất</option>
          </select>
        </div>
      </div>
      <div className='users-list-container mt-8  max-h-[440px] overflow-auto'>
        <table className='users-list w-full'>
          <thead>
            <tr>
              <th className='w-1/12'>ID</th>
              <th className='w-1/12'>Ngày tạo</th>
              <th className='w-1/5'>Họ tên</th>
              <th className='w-1/5'>Email</th>
              <th>Độ tuổi</th>
              <th>Giới tính</th>
              <th>Mục đích</th>
              <th>Cấp bậc</th>
              <th>Tương tác</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.createdDate}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.purposes}</td>
                <td>{user.level}</td>
                <td>{user.interactions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
