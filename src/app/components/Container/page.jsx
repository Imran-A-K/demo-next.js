import React from "react";

function Container({ children }) {
  return (
    <div className={`w-full max-w-7xl lg:px-5 mx-auto font-mono`}>
      {children}
    </div>
  );
}

export default Container;
