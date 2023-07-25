function PasswordInput({
  PassWordVisibleIcon,
  PassWordInvisibleIcon,
  showPassword,
  setShowPassword,
  ComponentId,
  labelTitle,
  placeholder,
}) {
  return (
    <div className="relative my-5">
      <label htmlFor={`${ComponentId}`} className="text-sm">
        {labelTitle}
      </label>
      <input
        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type={showPassword === false ? "password" : "text"}
        placeholder={placeholder ? placeholder : "Password"}
        //   {...register("password", {
        //     required: "Please Enter your password.",
        //   })}
        //   aria-invalid={errors.password ? "true" : "false"}
      />
      <div className="cursor-pointer text-2xl absolute right-3 top-9 z-10 ">
        {showPassword === false ? (
          <PassWordInvisibleIcon
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <PassWordVisibleIcon onClick={() => setShowPassword(!showPassword)} />
        )}
      </div>
      {/* {errors?.password && (
                      <p
                        className="pl-1 pt-2 flex items-center gap-2 text-base text-red-500"
                        role="alert"
                      >
                        <BiError /> {errors.password.message}
                      </p>
                    )} */}
    </div>
  );
}

export default PasswordInput;
