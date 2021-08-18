const FormInput = ({
  id,
  label,
  type,
  placeholder,
  maxLength,
  value,
  onChange,
  required,
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormInput;
