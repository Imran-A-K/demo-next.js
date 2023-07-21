"use client";

import Footer from "../components/Footer/page";
import Navbar from "../components/Navbar/page";

function Withlayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

export default Withlayout;
