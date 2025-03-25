import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb"; // Import Breadcrumb

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your message has been sent!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-600 to-purple-900 flex justify-center items-center p-6">
      <div className="bg-purple-700 p-10 rounded-2xl max-w-4xl w-full text-white shadow-lg">

        {/* Breadcrumb Navigation */}
        <Breadcrumb />

        <h1 className="text-4xl font-bold text-center">CONTACT</h1>
        <p className="text-center mt-2">
          We'd love to talk about how we can work together. Send us a message below and we'll respond as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 items-center mt-8">
          {/* Contact Form */}
          <div>
            <label htmlFor="name" className="block mb-2">Name*</label>
            <input 
              id="name"
              name="name"
              className="w-full p-3 rounded bg-purple-800 border-none outline-none"
              type="text"
              placeholder="Enter Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email" className="block mt-4 mb-2">Email*</label>
            <input 
              id="email"
              name="email"
              className="w-full p-3 rounded bg-purple-800 border-none outline-none"
              type="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="subject" className="block mt-4 mb-2">Subject*</label>
            <input 
              id="subject"
              name="subject"
              className="w-full p-3 rounded bg-purple-800 border-none outline-none"
              type="text"
              placeholder="Enter Your Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label htmlFor="message" className="block mt-4 mb-2">Message*</label>
            <textarea 
              id="message"
              name="message"
              className="w-full p-3 rounded bg-purple-800 border-none outline-none"
              rows={4}
              placeholder="Write Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contact Info & Illustration */}
          <div className="flex flex-col justify-center items-center text-center">
            <div className="mb-4">
              <p className="font-semibold">PHONE NUMBER</p>
              <p className="text-green-400">+0123 456789</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">EMAIL</p>
              <p className="text-green-400">info@rifa.com</p>
            </div>
            <img src="/images/contact-illustration.png" alt="Customer Support" className="w-40 mt-4" />
          </div>
        </form>

        <button 
          type="submit"
          className="w-full mt-6 p-3 bg-gradient-to-r from-orange-500 to-pink-500 text-lg font-semibold rounded-lg hover:opacity-90"
          onClick={handleSubmit}
        >
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
