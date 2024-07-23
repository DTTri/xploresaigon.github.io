export default function TagsTab() {
  const tagsList = [
    {
      id: 1,
      title: '5 sao',
      category: 'Ăn uống',
    },
    {
      id: 1,
      title: '5 sao',
      category: 'Ăn uống',
    },
    {
      id: 1,
      title: '5 sao',
      category: 'Ăn uống',
    },
    {
      id: 1,
      title: '5 sao',
      category: 'Ăn uống',
    },
    {
      id: 1,
      title: '5 sao',
      category: 'Ăn uống',
    },
    {
      id: 1,
      title: '5 sao',
      category: 'Ăn uống',
    },
    {
      id: 1,
      title: '5 sao',
      category: 'Ăn uống',
    },
    {
      id: 1,
      title: '5 sao',
      category: 'Ăn uống',
    },
    {
      id: 1,
      title: '5 sao',
      category: 'Ăn uống',
    },
  ];

  return (
    <div className='tags-tab'>
      <div className='filters--container flex gap-8 flex-wrap justify-start items-center'>
        <div className='filters--items filter--search-by-name'>
          <select
            name='searchByName'
            id='searchByName'
            className='filter--search-by-name__select'
          >
            <option value='title'>Tên thẻ</option>
            <option value='id'>ID</option>
          </select>
          <input
            type='text'
            className='filter--search-by-name__input min-w-80'
            placeholder='Tên thẻ/ID'
          />
        </div>

        <div className='filters--items filter--category'>
          <label htmlFor='category'>Lĩnh vực</label>
          <select name='category' id='category'>
            <option value='all'>Tất cả</option>
            <option value='food'>Ẩm thực</option>
            <option value='stay'>Lưu trú</option>
            <option value='visit'>Địa điểm tham quan</option>
            <option value='festival'>Lễ hội</option>
          </select>
        </div>

        <button className='new-tag__button bg-primary font-bold p-2 rounded-md'>
          Thêm thẻ mới
        </button>
      </div>
      <div className='tags-list-container mt-8  max-h-[400px] overflow-auto'>
        <table className='tags-list w-full'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên thẻ</th>
              <th>Lĩnh vực</th>
            </tr>
          </thead>
          <tbody>
            {tagsList.map((tag) => (
              <tr key={tag.id}>
                <td>{tag.id}</td>
                <td>{tag.title}</td>
                <td>{tag.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
