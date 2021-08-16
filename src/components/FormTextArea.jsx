const FormTextArea = ({
  label,
  placeholder,
  maxLength,
  value,
  onChange,
  required,
}) => {
  return (
    <div className='form-group'>
      <label>{label}</label>
      <textarea
        className='textarea'
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        required={required}
      />
      <p className='char-count'>
        {maxLength - value.length} / {maxLength} characters remaining
      </p>
    </div>
  );
};

export default FormTextArea;
