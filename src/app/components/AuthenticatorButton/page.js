import React from "react";

function AuthenticatorButton({ title }) {
  return (
    <button className="mt-5 tracking-wide font-semibold bg-black hover:bg-gray-700 text-white w-full py-4 rounded-lg active:scale-[.98] ease-in-out transform active:duration-100 transition-all hover:scale-[1.01] flex items-center justify-center focus:shadow-outline focus:outline-none">
      <svg
        className="w-6 h-6 -ml-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M20 8v6M23 11h-6" />
      </svg>
      <span className="ml-3">{title}</span>
    </button>
  );
}

export default AuthenticatorButton;
