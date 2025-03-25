import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-6 lg:px-20">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-600 pb-6">
          
          {/* App Store Buttons */}
          <div className="flex gap-4">
            <img src="/images/app-store.png" alt="Download on the App Store" className="h-12" />
            <img src="/images/google-play.png" alt="Get it on Google Play" className="h-12" />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 lg:mt-0 text-gray-300 text-sm">
            {["About", "FAQs", "Contact", "Terms of Service", "Privacy"].map((item, index) => (
              <a key={index} href="#" className="hover:text-blue-400 transition">
                {item}
              </a>
            ))}
          </nav>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-6">

          {/* Copyright */}
          <p className="text-gray-300 text-sm text-opacity-80">
            © 2025 <span className="font-bold">Naga Lottery</span>. All Rights Reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4 lg:mt-0">
            {[
              { icon: <FaFacebookF />, label: "Facebook" },
              { icon: <FaTwitter />, label: "Twitter" },
              { icon: <FaLinkedinIn />, label: "LinkedIn" }
            ].map((social, index) => (
              <a 
                key={index} 
                href="#" 
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition" 
                aria-label={social.label}
              >
                <span className="text-white text-lg">{social.icon}</span>
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
