const FormImageUpload = ({
  label,
  imgId,
  src,
  alt,
  type,
  inputId,
  onChange,
}) => {
  return (
    <div className='form-group'>
      {/* <label>{label}</label> */}

      <div className='img-upload'>
        <img src='assets/default.jpg' alt='profile preview' id={imgId} />
        <div className='upload-text'>
          <h3>Upload a Profile Picture</h3>
          <label htmlFor='profile-img'>
            <input
              type='file'
              id='profile-img'
              accept='image/*'
              onChange={onChange}
            />
            <span>Select Image</span>
          </label>
          <p>
            <em>Square images tend to work best</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormImageUpload;
