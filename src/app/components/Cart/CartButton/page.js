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
          hover:opacity-75
          transition
          ${disabled && "opacity-75 cursor-not-allowed"}
          ${className}
        `}
    >
      {children}
    </button>
  );
};
