import propTypes from 'prop-types';

export default function CreateTagPopup({ onClose }) {
  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='create-tag-popup p-10  relative bg-background dark:bg-secondDarkBackground dark:text-white rounded-3xl shadow-lg overflow-auto w-full  max-w-[80vw] max-h-[90vh]'>
        <form className='form--container flex flex-wrap -mx-2'>
          <div className='form__item form--content basis-1/2'>
            <label htmlFor='content' className='form__label'>
              Nội dung thẻ
            </label>
            <input type='text' id='content' className='form__input' />
          </div>
          <div className='form__item form--category basis-1/2'>
            <label htmlFor='category' className='form__label'>
              Lĩnh vực
            </label>
            <select id='category' className='form__input'>
              <option value='food'>Ẩm thực</option>
              <option value='stay'>Lưu trú</option>
              <option value='visit'>Địa điểm tham quan</option>
              <option value='festival'>Lễ hội</option>
            </select>
          </div>
        </form>

        <div className='buttons--container basis-full flex gap-4 justify-end'>
          <button
            onClick={onClose}
            className='button--cancel text-lg font-semibold bg-white text-text border border-primary px-4 py-1 rounded-lg shadow-md'
          >
            Đóng
          </button>
          <button
            onClick={onClose}
            className='button--submit text-lg font-semibold bg-primary text-text px-4 py-1 rounded-lg shadow-md'
          >
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
}

CreateTagPopup.propTypes = {
  onClose: propTypes.func,
};
