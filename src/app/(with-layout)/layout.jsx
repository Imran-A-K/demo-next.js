"use client";

import Navbar from "../components/Navbar/page";

function Withlayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Withlayout;
