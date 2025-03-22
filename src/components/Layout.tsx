import React from "react";
import Navbar from "../Pages/navbar"; // Adjust path to pages folder
import Footer from "../Pages/Footer";
 // Adjust path to pages folder


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Your navigation bar */}
      <main className="flex-grow">{children}</main> {/* Page content */}
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default Layout;
