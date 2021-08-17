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
      <div className='img-upload'>
        <img src={src} alt={alt} id={imgId} />
        <div className='upload-text'>
          <h3>Upload a Profile Picture</h3>
          <label htmlFor={inputId}>
            <input
              type={type}
              id={inputId}
              accept='image/*'
              onChange={onChange}
            />
            <span>Select Image</span>
          </label>
          <p>
            <em>Note: Square images tend to work best</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormImageUpload;
