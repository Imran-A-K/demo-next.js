"use client";

import { useState } from "react";
import Container from "../components/Container/page";
import Footer from "../components/Footer/page";
import Navbar from "../components/Navbar/page";
import SideCart from "../components/SideCart/page";

function Withlayout({ children }) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  return (
    <div>
      <Navbar
        sideBarIsOpen={sideBarIsOpen}
        setSideBarIsOpen={setSideBarIsOpen}
      />
      <SideCart
        sideBarIsOpen={sideBarIsOpen}
        setSideBarIsOpen={setSideBarIsOpen}
      />
      <div className="min-h-screen">{children}</div>

      <Footer />
    </div>
  );
}

export default Withlayout;
