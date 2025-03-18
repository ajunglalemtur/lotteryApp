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
            <img src="/images/app-store.png" alt="Download on App Store" className="h-12" />
            <img src="/images/google-play.png" alt="Get it on Google Play" className="h-12" />
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-6 mt-6 lg:mt-0 text-gray-300">
            <a href="#" className="hover:text-blue-400">About</a>
            <span className="text-blue-400">|</span>
            <a href="#" className="hover:text-blue-400">FAQs</a>
            <span className="text-blue-400">|</span>
            <a href="#" className="hover:text-blue-400">Contact</a>
            <span className="text-blue-400">|</span>
            <a href="#" className="hover:text-blue-400">Terms of Services</a>
            <span className="text-blue-400">|</span>
            <a href="#" className="hover:text-blue-400">Privacy</a>
          </nav>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-6">
          
          {/* Copyright */}
          <p className="text-gray-300 text-sm">
            Copyright © 2023. All Rights Reserved By <span className="font-bold">Naga Lottery</span>
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4 lg:mt-0">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <span className="text-white text-lg">
                <FaFacebookF />
              </span>
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <span className="text-white text-lg">
                <FaTwitter />
              </span>
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <span className="text-white text-lg">
                <FaLinkedinIn />
              </span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
