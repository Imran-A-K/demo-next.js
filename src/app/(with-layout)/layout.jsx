"use client";

import Footer from "../components/Footer/page";
import Navbar from "../components/Navbar/page";

function Withlayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Withlayout;
