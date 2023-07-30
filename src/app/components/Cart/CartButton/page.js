export const CartButton = ({
  className,
  children,
  disabled,
  type = "button",
  handleCheckOut,
  ...props
}) => {
  return (
    <button
      onClick={() => handleCheckOut()}
      disabled={disabled}
      className={`
          w-auto 
          rounded-full 
          bg-black
          border
          border-transparent
          px-5 
          py-3 
          disabled:cursor-not-allowed 
          disabled:opacity-50
          text-white
          font-semibold
          hover:opacity-90
          transition-opacity duration-1000
          ${disabled && "opacity-60 cursor-not-allowed"}
          ${className}
        `}
    >
      {children}
    </button>
  );
};
