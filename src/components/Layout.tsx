import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Pages/navbar";
import Footer from "../Pages/Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation(); // Get current route

  // List of pages where Footer should be hidden
  const hideFooterOnPages = ["/customer-support"]; 

  return (
    <div>
      <Navbar />
      <main>{children}</main>
      {/* ✅ Hide Footer only on CustomerSupport page */}
      {!hideFooterOnPages.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default Layout;
