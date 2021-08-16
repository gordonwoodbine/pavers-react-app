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
      <label>{label}</label>

      <div className='form-input'>
        <label htmlFor={inputId}>
          <img id={imgId} src={src} alt={alt} />
        </label>
        <input type={type} id={inputId} accept='image/*' onChange={onChange} />
      </div>
    </div>
  );
};

export default FormImageUpload;
