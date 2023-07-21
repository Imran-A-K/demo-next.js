import React from "react";

function Button({ title }) {
  return (
    <button class="mx-auto bg-black hover:bg-gray-700  text-white rounded-lg px-3 py-2 font-semibold">
      {title}
    </button>
  );
}

export default Button;
