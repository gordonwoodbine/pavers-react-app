const FormInput = ({
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
      <label>{label}</label>
      <input
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
