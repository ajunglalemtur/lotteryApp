import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const CustomerSupport: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-indigo-900 to-purple-900 text-white text-center">
      {/* Header Section */}
      <h3 className="text-yellow-400 text-lg font-semibold">
        Get in touch with our friendly support
      </h3>
      <h2 className="text-5xl font-bold mt-2">CUSTOMER SUPPORT</h2>
      <p className="text-lg max-w-2xl mx-auto mt-4">
        Have a question or need help? Contact our friendly support team.
      </p>

      {/* Support Cards Section */}
      <div className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-6 px-10">
        
        {/* Talk to Our Support Team Card */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl text-left w-96 shadow-lg flex items-center gap-4">
          <img src="/images/support-team.png" alt="Support Team" className="w-24 h-24" />
          <div>
            <h4 className="text-xl font-bold">Talk to our support team</h4>
            <p className="text-gray-300 text-sm mt-2">
              Got a question about Lotteries? Get in touch with our friendly staff.
            </p>
            <div className="mt-4 flex gap-2">
              <button className="bg-white text-purple-700 px-4 py-2 rounded-full flex items-center gap-2">
                <FaPhone /> Call Us
              </button>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-full flex items-center gap-2">
                <FaEnvelope /> Email Us
              </button>
            </div>
          </div>
        </div>

        {/* Our Guide to Rifa Card */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl text-left w-96 shadow-lg flex items-center gap-4">
          <img src="/images/guide.png" alt="Guide" className="w-24 h-24" />
          <div>
            <h4 className="text-xl font-bold">Our Guide to Rifa</h4>
            <p className="text-gray-300 text-sm mt-2">
              Check out our FAQs to see if we can help you out.
            </p>
            <button className="mt-4 bg-white text-purple-700 px-4 py-2 rounded-full">
              FAQs & Help
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomerSupport;
