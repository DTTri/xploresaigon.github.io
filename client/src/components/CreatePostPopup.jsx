import propTypes from 'prop-types';
import { useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import { MultiSelect } from 'react-multi-select-component';

const format = 'DD/MM/YYYY';

export default function CreatePostPopup({ onClose }) {
  const [dayOption, setDayOption] = useState('1');
  const handleDayOptionChange = (event) => {
    setDayOption(event.target.value);
  };
  const [categorySelected, setCategorySelected] = useState('food');
  const handleCategoryChange = (event) => {
    setCategorySelected(event.target.value);
  };

  const [dates, setDates] = useState([]);

  const [days, setDays] = useState([]);

  const weekdays = [
    { label: 'Thứ hai', value: 'monday' },
    { label: 'Thứ ba', value: 'tuesday' },
    { label: 'Thứ tư', value: 'wednesday' },
    { label: 'Thứ năm', value: 'thursday' },
    { label: 'Thứ sáu', value: 'friday' },
    { label: 'Thứ bảy', value: 'saturday' },
    { label: 'Chủ nhật', value: 'sunday' },
  ];

  const [otherContactOptions, setOtherContactOptions] = useState([]);

  const [orderSelected, setOrderSelected] = useState([]);
  const orderOptions = [
    { label: 'Ứng dụng', value: 'app' },
    { label: 'Điện thoại', value: 'phone' },
    { label: 'Website', value: 'website' },
    { label: 'Facebook', value: 'facebook' },
    { label: 'Zalo', value: 'zalo' },
    { label: 'Trực tiếp', value: 'onSite' },
  ];

  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages(imageUrls);
  };

  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='create-post-popup p-10  relative bg-background dark:bg-secondDarkBackground dark:text-white rounded-3xl shadow-lg overflow-auto w-full  max-w-[80vw] max-h-[90vh]'>
        <form className='form--container flex flex-wrap -mx-2'>
          <div className='form__item form--title basis-full'>
            <label htmlFor='title' className='form__label'>
              Tiêu đề
            </label>
            <input type='text' id='title' className='form__input' />
          </div>
          <div className='form__item form--category basis-1/3'>
            <label htmlFor='category' className='form__label'>
              Lĩnh vực
            </label>
            <select
              id='category'
              className='form__input'
              value={categorySelected}
              onChange={handleCategoryChange}
            >
              <option value='food'>Cơ sở ăn uống</option>
              <option value='stay'>Lưu trú</option>
              <option value='visit'>Địa điểm tham quan</option>
              <option value='festival'>Lễ hội</option>
            </select>
          </div>
          <div className='form__item form--address basis-2/3'>
            <label htmlFor='address' className='form__label'>
              Địa chỉ
            </label>
            <input type='text' id='address' className='form__input' />
          </div>
          <div className='form__item form--open-time basis-full'>
            <label htmlFor='open-time' className='form__label'>
              Mở cửa
            </label>
            <input
              type='time'
              id='open-time'
              className='form__input basis-1/5'
              placeholder='Giờ mở cửa'
            />
            <input
              type='time'
              id='close-time'
              className='form__input basis-1/5'
              placeholder='Giờ đóng cửa'
            />
            <select
              id='day'
              className='form__input basis-1/6 ml-8'
              value={dayOption}
              onChange={handleDayOptionChange}
            >
              <option value='1'>Hàng tuần</option>
              <option value='2'>Ngày cụ thể</option>
            </select>
            {dayOption === '1' ? (
              <MultiSelect
                options={weekdays}
                value={days}
                onChange={setDays}
                labelledBy={'Select'}
                className='basis-1/5'
              />
            ) : (
              <DatePicker
                className='form__input'
                style={{
                  width: '100%',
                  height: '100%',
                  padding: '0.5rem',
                  border: '1px solid rgb(156, 163, 175)',
                  borderRadius: '0.375rem',
                }}
                value={dates}
                onChange={setDates}
                multiple
                sort
                format={format}
                calendarPosition='bottom-center'
                plugins={[<DatePanel key='datePanel' />]}
              />
            )}
          </div>
          <div className='form__item form--contact basis-full'>
            <p className='form__label'>Thông tin liên lạc</p>
            <div className='form__input form__input-phone relative basis-1/6'>
              <box-icon name='phone' class='absolute left-3'></box-icon>
              <input className='pl-8 outline-none w-full bg-transparent' />
            </div>
            <div className='form__input form__input-email relative basis-1/5'>
              <box-icon name='envelope' class='absolute left-3'></box-icon>
              <input
                type='email'
                className='pl-8 outline-none w-full bg-transparent'
              />
            </div>
            <div className='form__input form__input-facebook relative basis-1/6'>
              <box-icon
                name='facebook-square'
                type='logo'
                class='absolute left-3'
              ></box-icon>
              <input
                type='text'
                className='pl-8 outline-none w-full bg-transparent'
              />
            </div>
            <div className='form__input form__input-website relative basis-1/6'>
              <box-icon name='globe' class='absolute left-3'></box-icon>
              <input
                type='text'
                className='pl-8 outline-none w-full bg-transparent'
              />
            </div>

            <MultiSelect
              isCreatable={true}
              value={otherContactOptions}
              onChange={setOtherContactOptions}
              labelledBy={'Select'}
              options={otherContactOptions}
              className='form__input form__input-other basis-1/5 border-none p-0'
            />
          </div>
          {categorySelected === 'food' && (
            <div className='form__item form__order basis-full'>
              <p className='form__label'>Hình thức đặt hàng</p>
              <MultiSelect
                options={orderOptions}
                value={orderSelected}
                onChange={setOrderSelected}
                labelledBy={'Select'}
                className='form__input border-none'
              />
            </div>
          )}
          <div className='form__item form__intro basis-full'>
            <label htmlFor='intro' className='form__label'>
              Giới thiệu
            </label>
            <textarea
              id='intro'
              className='form__input resize-none h-48'
            ></textarea>
          </div>
          <div className='form__item form__image basis-1/5'>
            <label htmlFor='image' className='form__label'>
              Hình ảnh
            </label>
            <input
              type='file'
              id='image'
              multiple
              className='form__input h-fit'
              onChange={handleImageChange}
            />
          </div>
          <div className='form__item form__image-preview flex-wrap basis-4/5'>
            {selectedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`preview ${index}`}
                className='image-preview w-1/4'
              />
            ))}
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
            Đăng
          </button>
        </div>
      </div>
    </div>
  );
}

CreatePostPopup.propTypes = {
  onClose: propTypes.func,
};
