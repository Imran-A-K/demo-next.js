function InputComponent({
  ComponentId,
  labelTitle,
  placeHolder,
  type,
  name,
  handleChange,
  handleBlur,
  value,
}) {
  return (
    <div className="my-2">
      <label htmlFor={`${ComponentId}`} className="text-sm">
        {labelTitle}
      </label>
      <input
        autoComplete="off"
        id={`${ComponentId}`}
        className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type={`${type}`}
        name={`${name}`}
        placeholder={`${placeHolder}`}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        // aria-invalid={errors.email ? "true" : "false"}
      />
    </div>
  );
}

export default InputComponent;
